"use client";

import { useForm, ValidationError } from "@formspree/react";
import React, { useState } from "react";
import { business } from "../lib/business";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  services: string[];
  size: string;
  spigot: string;
  contactMethod: string;
  notes: string;
};

const serviceOptions = [
  "Driveway & Concrete Cleaning",
  "Sidewalks & Walkways",
  "Patios & Porches",
  "House Washing (Soft Wash for Siding)",
  "Entryways & Front Steps",
  "Light Fence Cleaning"
];

const sizeOptions = [
  "Under 500 sq ft",
  "500–1,000 sq ft",
  "1,000–2,000 sq ft",
  "2,000+ sq ft",
  "Not sure yet"
];

export default function QuoteForm() {
  const [error, setError] = useState<string | null>(null);
  const [state, handleSubmit] = useForm("xrelrnbz");
  const [formState, setFormState] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    address: "",
    services: [],
    size: "",
    spigot: "",
    contactMethod: "Text",
    notes: ""
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormState((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setError(null);

    if (
      !formState.name ||
      !formState.phone ||
      !formState.email ||
      !formState.address ||
      formState.services.length === 0 ||
      !formState.size ||
      !formState.spigot ||
      !formState.contactMethod ||
      !formState.notes
    ) {
      setError("Please complete all required fields.");
      return;
    }

    try {
      await handleSubmit(event);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-800">
        <h2 className="text-lg font-semibold">Thanks for reaching out!</h2>
        <p className="mt-2 text-sm text-emerald-700">
          We received your request and will follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <input
        type="hidden"
        name="_subject"
        value="New Pressure Wash of Atlanta Quote Request"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input
            className="input"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="Full Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="input"
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="Phone Number"
            field="phone"
            errors={state.errors}
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="email">
            Email Address
          </label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="address">
            Service Address or ZIP Code
          </label>
          <input
            className="input"
            id="address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="Service Address or ZIP Code"
            field="address"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="label">Services Requested (select all that apply)</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700"
            >
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formState.services.includes(service)}
                onChange={() => toggleService(service)}
                className="h-4 w-4 accent-brand-600"
              />
              {service}
            </label>
          ))}
        </div>
        <ValidationError
          prefix="Services Requested"
          field="services"
          errors={state.errors}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="label" htmlFor="size">
            Approximate Size
          </label>
          <select
            className="input"
            id="size"
            name="size"
            value={formState.size}
            onChange={handleChange}
            required
          >
            <option value="">Select a size range</option>
            {sizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ValidationError
            prefix="Approximate Size"
            field="size"
            errors={state.errors}
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="spigot">
            Exterior Water Spigot Available?
          </label>
          <select
            className="input"
            id="spigot"
            name="spigot"
            value={formState.spigot}
            onChange={handleChange}
            required
          >
            <option value="">Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <p className="text-xs text-slate-500">
            Residential service uses the home’s exterior water spigot.
          </p>
          <ValidationError
            prefix="Exterior Water Spigot"
            field="spigot"
            errors={state.errors}
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="contactMethod">
            Preferred Contact Method
          </label>
          <select
            className="input"
            id="contactMethod"
            name="contactMethod"
            value={formState.contactMethod}
            onChange={handleChange}
            required
          >
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Email">Email</option>
          </select>
          <ValidationError
            prefix="Preferred Contact Method"
            field="contactMethod"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="label" htmlFor="notes">
          Additional Notes
        </label>
        <textarea
          className="input min-h-[96px]"
          id="notes"
          name="notes"
          value={formState.notes}
          onChange={handleChange}
          required
        />
        <ValidationError
          prefix="Additional Notes"
          field="notes"
          errors={state.errors}
        />
      </div>

      {error && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="button-primary w-full"
        disabled={state.submitting}
      >
        {state.submitting ? "Submitting..." : "Get a Free Quote"}
      </button>
      <p className="text-center text-xs text-slate-500">
        Prefer to talk now?{" "}
        <a className="text-brand-700 underline" href={`tel:${business.phone}`}>
          Call or Text {business.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}

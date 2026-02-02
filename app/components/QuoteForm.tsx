"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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
  timeWindow: string;
};

const serviceOptions = [
  "Driveway cleaning",
  "Sidewalks & walkways",
  "Patios & porches",
  "House wash (soft wash)",
  "Garage doors / entryways",
  "Light fence cleaning"
];

const sizeOptions = [
  "Small (1-car driveway or small patio)",
  "Medium (2-car driveway or mid-size home)",
  "Large (3-car driveway or larger home)",
  "Not sure"
];

const timeOptions = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekends",
  "Flexible"
];

export default function QuoteForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    address: "",
    services: [],
    size: "",
    spigot: "",
    contactMethod: "Text",
    timeWindow: ""
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      !formState.timeWindow
    ) {
      setError("Please complete all required fields.");
      return;
    }

    setLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Unable to send request. Please try again.");
      }

      router.push("/thank-you");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Full name"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input
            className="input"
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="you@email.com"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="address">
            Address or ZIP
          </label>
          <input
            className="input"
            id="address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            placeholder="Street address or ZIP"
            required
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="label">Service requested (select all that apply)</p>
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
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="label" htmlFor="size">
            Approximate size
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
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="spigot">
            Do you have an exterior water spigot available?
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
            We currently require a working exterior spigot at the service
            location.
          </p>
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="contactMethod">
            Preferred contact method
          </label>
          <select
            className="input"
            id="contactMethod"
            name="contactMethod"
            value={formState.contactMethod}
            onChange={handleChange}
          >
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Email">Email</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="timeWindow">
            Preferred time window
          </label>
          <select
            className="input"
            id="timeWindow"
            name="timeWindow"
            value={formState.timeWindow}
            onChange={handleChange}
            required
          >
            <option value="">Select availability</option>
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="label" htmlFor="photos">
          Upload photos (optional)
        </label>
        <input
          className="input"
          id="photos"
          name="photos"
          type="file"
          multiple
        />
        <p className="text-xs text-slate-500">
          Photos help us provide more accurate quotes. Maximum file size limits
          apply based on hosting.
        </p>
      </div>

      {error && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      )}

      <button type="submit" className="button-primary w-full" disabled={loading}>
        {loading ? "Submitting..." : "Get a Free Quote"}
      </button>
      <p className="text-center text-xs text-slate-500">
        Prefer to talk now? Call or text {business.phoneDisplay}.
      </p>
    </form>
  );
}

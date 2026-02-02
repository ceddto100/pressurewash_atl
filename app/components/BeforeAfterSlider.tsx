"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  title: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  title
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);

  return (
    <div className="glass-card overflow-hidden rounded-2xl">
      <div className="relative aspect-video w-full">
        <Image
          src={after}
          alt={`${title} after pressure washing`}
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <Image
            src={before}
            alt={`${title} before pressure washing`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div
            className="h-full w-0.5 bg-white/80 shadow"
            style={{ marginLeft: `${value}%` }}
          />
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
          After
        </div>
      </div>
      <div className="flex items-center gap-4 px-6 py-4">
        <span className="text-sm font-semibold text-slate-700">Adjust</span>
        <input
          aria-label={`Adjust before and after slider for ${title}`}
          type="range"
          min={10}
          max={90}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="h-2 w-full cursor-pointer accent-brand-600"
        />
      </div>
    </div>
  );
}

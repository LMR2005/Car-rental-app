import React from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

function CarFilterOption() {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Cars Available
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Explore our fleet and pick the car that fits your journey
        </p>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Filter Indicator / Icon (optional) */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-400 mr-1">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span>Filter:</span>
        </div>

        {/* Price Dropdown */}
        <div className="relative min-w-[140px]">
          <select
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/10 cursor-pointer"
          >
            <option value="" disabled>
              Price
            </option>
            <option value="min-to-max">Min to Max</option>
            <option value="max-to-min">Max to Min</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        {/* Manufacturer Dropdown */}
        <div className="relative min-w-[160px]">
          <select
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/10 cursor-pointer"
          >
            <option value="" disabled>
              Manufacturer
            </option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
            <option value="tesla">Tesla</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>
    </div>
  );
}

export default CarFilterOption;
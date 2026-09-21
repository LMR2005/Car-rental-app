import React from "react";
import { MapPin, Calendar, Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center">
      {/* Title */}
      <h2 className="text-xl font-semibold tracking-tight text-slate-700 sm:text-2xl">
        Find Your Perfect Ride
      </h2>
      <p className="mt-1 text-sm text-slate-400">
        Choose a pickup location and date to check live vehicle availability
      </p>

      {/* Floating Pill Search Bar */}
      <div className="mt-6 flex w-full max-w-3xl items-center rounded-full border border-slate-200/90 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_12px_35px_rgb(0,0,0,0.09)]">
        
        {/* Location Section */}
        <div className="group flex flex-1 items-center gap-3 rounded-full px-4 py-2 transition-colors hover:bg-slate-50">
          <MapPin className="h-5 w-5 text-blue-600 transition-transform group-hover:scale-110" />
          <div className="flex flex-col text-left">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Location
            </label>
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Center Divider Line */}
        <div className="h-9 w-[1px] bg-slate-200" />

        {/* Date Section */}
        <div className="group flex flex-1 items-center gap-3 rounded-full px-4 py-2 transition-colors hover:bg-slate-50">
          <Calendar className="h-5 w-5 text-blue-600 transition-transform group-hover:scale-110" />
          <div className="flex flex-col text-left">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Pickup Date
            </label>
            <input
              type="date"
              onClick={(e) => e.currentTarget.showPicker?.()}
              className="cursor-pointer bg-transparent text-sm font-medium text-gray-400 outline-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
          </div>
        </div>

        {/* Search Action Button */}
        <button
          type="button"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:bg-blue-700 hover:scale-105 active:scale-95"
          aria-label="Search available cars"
        >
          <Search className="h-5 w-5" />
        </button>

      </div>
    </div>
  );
};

export default SearchInput;
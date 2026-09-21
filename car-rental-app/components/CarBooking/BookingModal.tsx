"use client";

import React from "react";
import Image from "next/image";
import { X, Fuel, Gauge } from "lucide-react";
import BookingForm from "./BookingForm";

interface BookingModalProps {
  car: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ car, isOpen, onClose }: BookingModalProps) { 
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-black text-slate-900">Rent a Car Now</h2>
        <p className="text-sm text-slate-500 mb-6">
          Complete the form below to confirm your reservation.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column: Car Summary */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {car.carBrand}
              </span>
              <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>

              <div className="relative my-6 h-44 w-full">
                <Image
                  src={car.image?.url || "/hero.png"}
                  alt={car.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 rounded-xl bg-white p-3 border border-slate-100">
                  <Gauge className="h-4 w-4 text-blue-600" />
                  <span className="capitalize">{car.carType || "Automatic"}</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white p-3 border border-slate-100">
                  <Fuel className="h-4 w-4 text-blue-600" />
                  <span>{car.carAvg} MPG</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200/60 pt-4 flex items-baseline justify-between">
              <span className="text-xs font-medium text-slate-500">Daily Rate</span>
              <span className="text-2xl font-black text-slate-900">
                ${car.price}
                <span className="text-xs font-normal text-slate-400">/day</span>
              </span>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div>
            <BookingForm car={car} onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
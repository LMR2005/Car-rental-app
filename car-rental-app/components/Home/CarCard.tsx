import React from "react";
import Image from "next/image";
import { Car } from "@/services";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
      {/* Car Picture */}
      <div className="relative h-48 w-full bg-slate-50 p-4">
        <Image
          src={car.image?.url || "/placeholder-car.png"}
          alt={`${car.carBrand} ${car.name}`}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {car.carBrand}
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            {car.name}
          </h3>
        </div>

        {/* Price & Action */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3">
          <div>
            <span className="text-2xl font-extrabold text-slate-900">
              ${car.price}
            </span>
            <span className="text-xs font-medium text-slate-500"> / day</span>
          </div>

          <button
            type="button"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
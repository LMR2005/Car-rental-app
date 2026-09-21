"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { request, gql } from "graphql-request";
import { ArrowLeft, Fuel, Gauge, ShieldCheck, Sparkles, Users, CalendarCheck } from "lucide-react";
import BookingModal from "@/components/CarBooking/BookingModal";


const fetchCarDetails = async (id: string) => {
    const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;
    const query = gql`
    query GetCarById {
      carLists(where: { id: "${id}" }) {
        id
        name
        price
        carAvg
        carBrand
        carType
        image {
          url
        }
      }
    }
  `;
    const result: any = await request(endpoint, query);
    return result?.carLists?.[0];
};

export default function CarDetailsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const params = useParams();
    const carId = params?.id as string;

    const [car, setCar] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (carId) {
            loadCar();
        }
    }, [carId]);

    const loadCar = async () => {
        try {
            setLoading(true);
            const data = await fetchCarDetails(carId);
            setCar(data);
        } catch (error) {
            console.error("Failed to load car details:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <p className="text-slate-400 font-medium animate-pulse">Loading car details...</p>
            </div>
        );
    }

    if (!car) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
                <p className="text-slate-500 text-lg">Vehicle not found.</p>
                <Link
                    href="/"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                    Back to Catalog
                </Link>
            </div>
        );
    }

    return (
        <main className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600 mb-8"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Cars
            </Link>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                {/* Left Column: Image & Specifications */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="relative h-80 sm:h-96 w-full rounded-3xl border border-slate-100 bg-slate-50/70 p-6 flex items-center justify-center overflow-hidden">
                        <Image
                            src={car.image?.url || "/hero.png"}
                            alt={car.name}
                            fill
                            priority
                            className="object-contain p-6 transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                            <Gauge className="h-6 w-6 text-blue-600 mb-1" />
                            <span className="text-xs text-slate-400 font-medium uppercase">Type</span>
                            <span className="text-sm font-bold text-slate-800 capitalize">
                                {car.carType || "Automatic"}
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                            <Fuel className="h-6 w-6 text-blue-600 mb-1" />
                            <span className="text-xs text-slate-400 font-medium uppercase">Efficiency</span>
                            <span className="text-sm font-bold text-slate-800">
                                {car.carAvg} MPG
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                            <Users className="h-6 w-6 text-blue-600 mb-1" />
                            <span className="text-xs text-slate-400 font-medium uppercase">Capacity</span>
                            <span className="text-sm font-bold text-slate-800">5 Seats</span>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                        <h3 className="text-base font-bold text-slate-900 mb-4">Included with Rental</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                                Comprehensive Collision Insurance
                            </li>
                            <li className="flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-emerald-500" />
                                Sanitized & Clean Delivery
                            </li>
                            <li className="flex items-center gap-2">
                                <CalendarCheck className="h-4 w-4 text-emerald-500" />
                                Free 24h Cancellation
                            </li>
                            <li className="flex items-center gap-2">
                                <Gauge className="h-4 w-4 text-emerald-500" />
                                Unlimited Mileage Available
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Pricing Card */}
                <div className="lg:col-span-5">
                    <div className="sticky top-8 flex flex-col rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-md">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                            {car.carBrand}
                        </span>
                        <h1 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                            {car.name}
                        </h1>

                        <div className="mt-6 flex items-baseline gap-2 border-b border-slate-100 pb-6">
                            <span className="text-4xl font-black text-slate-900">${car.price}</span>
                            <span className="text-sm font-medium text-slate-400">/ per day</span>
                        </div>

                        <div className="my-6 space-y-3 text-sm text-slate-500">
                            <div className="flex justify-between">
                                <span>Base Daily Rate</span>
                                <span className="font-semibold text-slate-800">${car.price}.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Standard Protection</span>
                                <span className="font-semibold text-emerald-600">Free</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Taxes & Fees</span>
                                <span className="font-semibold text-slate-800">$0.00</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="w-full rounded-2xl bg-blue-600 py-4 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-lg active:scale-98 cursor-pointer"
                        >
                            Rent Now
                        </button>

                        {/* Modal instance */}
                        <BookingModal
                            car={car}
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getStoreLocations, createBooking } from "@/services";

interface BookingFormProps {
    car: any;
    onClose: () => void;
}

export default function BookingForm({ car, onClose }: BookingFormProps) {
    const [storeLocation, setStoreLocation] = useState<any>([]);
    const today: any = new Date();
    useEffect(() => {
        getStoreLocation_();
    }, [])

    useEffect(() => {
        if (car?.id) {
            setFormValue((prev) => ({
                ...prev,
                carId: car.id, // Plain string
            }));
        }
    }, [car]);

    const getStoreLocation_ = async () => {
        const resp: any = await getStoreLocations();
        console.log(resp);
        setStoreLocation(resp?.storeLocations)
    }
    const { user } = useUser();

    const [formValue, setFormValue] = useState({
        location: "",
        pickUpDate: "",
        dropOffDate: "",
        pickUpTime: "",
        dropOffTime: "",
        contactNumber: "",
        userName: user?.fullName || "",
        carId: car?.id || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Booking:", formValue);
        const resp = await createBooking(formValue);
        // Call your GraphQL createBooking mutation here
        alert(`Reservation submitted for ${car.name}!`);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Pick Up Location */}
            <div>
                <label className="text-xs font-semibold text-slate-600">
                    Pick Up Location
                </label>
                <select
                    name="location"
                    required
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-2.5 text-sm text-slate-700 outline-none focus:border-blue-600"
                >
                    <option value="">Select location</option>
                    {storeLocation && storeLocation.map((loc: any, index: number) => (
                        <option key={index}>{loc?.address}</option>
                    ))}
                </select>
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="text-xs font-semibold text-slate-600">
                        Pick Up Date
                    </label>
                    <input
                        type="date"
                        name="pickUpDate"
                        required
                        onChange={handleChange}
                        className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 text-sm text-slate-700 outline-none focus:border-blue-600"
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold text-slate-600">
                        Drop Off Date
                    </label>
                    <input
                        type="date"
                        name="dropOffDate"
                        required
                        onChange={handleChange}
                        className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 text-sm text-slate-700 outline-none focus:border-blue-600"
                    />
                </div>
            </div>

            {/* Times Grid */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="text-xs font-semibold text-slate-600">
                        Pick Up Time
                    </label>
                    <input
                        type="time"
                        name="pickUpTime"
                        required
                        onChange={handleChange}
                        className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 text-sm text-slate-700 outline-none focus:border-blue-600"
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold text-slate-600">
                        Drop Off Time
                    </label>
                    <input
                        type="time"
                        name="dropOffTime"
                        required
                        onChange={handleChange}
                        className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 text-sm text-slate-700 outline-none focus:border-blue-600"
                    />
                </div>
            </div>

            {/* Contact Number */}
            <div>
                <label className="text-xs font-semibold text-slate-600">
                    Contact Number
                </label>
                <input
                    type="tel"
                    name="contactNumber"
                    placeholder="+1 234 567 890"
                    required
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 text-sm text-slate-700 outline-none focus:border-blue-600"
                />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="w-1/3 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="w-2/3 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 active:scale-98"
                    onClick={handleSubmit}
                >
                    Confirm Rental
                </button>
            </div>
        </form>
    );
}


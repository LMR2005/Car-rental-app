import React from 'react';
import { CarCard } from './CarCard';
import { Car } from "@/services";


// Props for the list component
interface CarListProps {
    cars: Car[];
}

// 2. Main List Component (renders the grid)
export default function CarList({ cars }: CarListProps) {
    if (!cars || cars.length === 0) {
        return (
            <div className="py-12 text-center text-slate-500">
                No cars available.
            </div>
        );
    }   

    return (
        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cars.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
}
"use client"

import CarFilterOption from "@/components/Home/CarFilterOption";
import CarList from "@/components/Home/CarList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import NavBar from "@/components/NavBar";
import { getCarsList } from "@/services";
import { UserButton } from "@clerk/nextjs";
import { Car } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res: any = await getCarsList();
        setCarsList(res?.carLists || []);
      } catch (error) {
        console.error("Failed to load cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);
  return (
    <main className="w-full px-6 sm:px-10 lg:px-16 pt-8 pb-16">
      <div className="mx-auto max-w-7xl">
        <Hero />
        <SearchInput />
        <CarFilterOption />
        <CarList />
      </div>
    </main>
  );
}

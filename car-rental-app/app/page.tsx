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
  const [carsOrgList, setCarsOrgList] = useState<any[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const result: any = await getCarsList();
        setCarsList(result || []);
        setCarsOrgList(result || []);
      } catch (error) {
        console.error("Failed to load cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  function filterCarList(brand: string) {
    if (!brand || brand === "all") {
      setCarsList(carsOrgList);
      return;
    }

    const filterList = carsOrgList.filter((item: any) =>
      item.carBrand == brand);

    setCarsList(filterList);
  }

  function sortCarList(order: any) {
    if (order == 0) {
      setCarsList(carsOrgList);
      return;
    }

    const sortedList = [...carsList].sort((a, b) => {
      const priceA = Number(a.price);
      const priceB = Number(b.price);
      return  order == -1 ? a.price - b.price : b.price - a.price
    });
    setCarsList(sortedList);
  }


  return (
    <main className="w-full px-6 sm:px-10 lg:px-16 pt-8 pb-16">
      <div className="mx-auto max-w-7xl">
        <Hero />
        <SearchInput />
        <CarFilterOption carList={carsOrgList}
          setBrand={(value: string) => filterCarList(value)}
          setSort={(value: any) => sortCarList(value)} />
        {loading ? (
          <div className="py-12 text-center text-slate-400">Loading cars...</div>
        ) : (
          <CarList cars={carsList} />
        )}
      </div>
    </main>
  );
}

"use client"

import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import NavBar from "@/components/NavBar";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full px-6 sm:px-10 lg:px-16 pt-8 pb-16">
      <div className="mx-auto max-w-7xl">
        <Hero />
        <SearchInput/>
      </div>
    </main>
  );
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
            <div>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                    Elevate Every Journey with{" "}
                    <span className="inline-block whitespace-nowrap bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                        MR Car Rental
                    </span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-slate-600 max-w-2xl">
                    Experience effortless booking, transparent pricing, and a fleet of
                    premium vehicles ready for any road ahead.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                        href="/cars"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
                    >
                        Explore Fleet
                    </Link>

                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Quick Trust Points */}
                <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-8 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>Zero hidden charges</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>Flexible pickups & returns</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>24/7 Roadside support</span>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src="/hero.png"
                    alt="Hero Image"
                    className="w-150 object-cover"
                    width={400}
                    height={500}
                />
            </div>
        </div>
    )
}

export default Hero
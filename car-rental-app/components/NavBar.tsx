'use client'

import {
    SignInButton,
    SignUpButton,
    UserButton,
    useUser,
} from "@clerk/nextjs"
import Image from "next/image"
import React from 'react'

const NavBar = () => {
    const { isSignedIn, isLoaded } = useUser()

    return (
        <div className="flex items-center justify-between p-5 bg-white dark:bg-black shadow-md">
            <div className="flex items-center gap-3">
                <Image src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="h-16 w-auto"
                />
                <h1 className="text-2xl font-bold text-black-500">MR Car Rental</h1>
            </div>

            <div className="hidden md:flex gap-4">
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Home</h2>
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>About</h2>
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Contact</h2>
            </div>

            {!isLoaded ? (
                <div className="h-10 w-24 animate-pulse rounded-full bg-slate-200" />
            ) : isSignedIn ? (
                <UserButton
                    showName
                />
            ) : (
                <div className="flex items-center gap-2">
                    <SignInButton>
                        <button className="rounded-full border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
                            Sign in
                        </button>
                    </SignInButton>

                    <SignUpButton>
                        <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                            Sign up
                        </button>
                    </SignUpButton>
                </div>
            )}
        </div>
    )
}

export default NavBar
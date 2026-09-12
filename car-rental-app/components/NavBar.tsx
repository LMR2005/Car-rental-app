import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import React from 'react'

const NavBar = () => {
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
            <UserButton />
        </div>
    )
}

export default NavBar
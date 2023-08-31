"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BsFillMoonStarsFill } from "react-icons/bs"

export default function Navbar() {
    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow-lg bg-white dark:text-teal-400 dark:bg-neutral-700">
            <nav className="py-4 px-4 flex justify-between">
                    <div>
                        <h2 className="sm:text-2xl font-semibold uppercase">Bryce Fish</h2>
                    </div>
                    <div id="rightSideNavItems" className="flex space-x-2">
                        <button>
                            
                        </button>
                        <a href="#home">
                            Home
                        </a>
                        <a href="#projects">
                            Projects
                        </a>
                        <a href="#contact">
                            Contact
                        </a>
                    </div>
            </nav>
        </header>
    )
}
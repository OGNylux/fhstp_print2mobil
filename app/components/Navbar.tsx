"use client";

import React, { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
           <nav className={`fixed top-0 left-0 z-50 w-full bg-stone-50 text-black drop-shadow-sm ${open ? '' : 'rounded-b-3xl'}`}>
            <div className="mx-auto flex items-center justify-between h-16 px-4 md:px-8">
                {/* Left: logo */}
                <div className="flex items-center">
                    <Image src="/logo.svg" alt="Logo" width={40} height={40} className="h-10 w-10 mr-3" />
                    <h1 className="text-lg font-bold">TreeFund</h1>
                </div>

                {/* Center links */}
                <div className="hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex items-center font-medium gap-6">
                    <a href="#about" className="hover:text-gray-700">About Us</a>
                    <a href="#how-it-works" className="hover:text-gray-700">How it works</a>
                    <a href="#projects" className="hover:text-gray-700">Our Projects</a>
                    <a href="#contact" className="hover:text-gray-700">Contact</a>
                </div>

                {/* Right: actions */}
                <div className="flex items-center gap-3">
                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-md text-black hover:bg-gray-100"
                        aria-label="Toggle navigation"
                        aria-expanded={open}
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    <a
                        href="https://github.com/OGNylux/fhstp_print2mobil"
                        aria-label="Open repository on GitHub"
                        className="text-black hover:text-gray-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="h-8 w-8" />
                    </a>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-stone-50 shadow-md z-40 overflow-hidden transition-all duration-300 ease-in-out rounded-b-3xl
                    ${open ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 -translate-y-2 max-h-0'}`}
                aria-hidden={!open}
            >
                <div className="flex flex-col py-2">
                    <a onClick={() => setOpen(false)} href="#about" className="px-4 py-2">About Us</a>
                    <a onClick={() => setOpen(false)} href="#how-it-works" className="px-4 py-2">How it works</a>
                    <a onClick={() => setOpen(false)} href="#projects" className="px-4 py-2">Our Projects</a>
                    <a onClick={() => setOpen(false)} href="#contact" className="px-4 py-2">Contact</a>
                </div>
            </div>
        </nav>
    );
}
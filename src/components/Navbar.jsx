"use client"
import React, { useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const navbarMenuRef = useRef(null);

    const toggleNavbar = () => {
        if (navbarMenuRef.current.classList.contains('hidden')) {
            navbarMenuRef.current.classList.remove('hidden');
        } else {
            navbarMenuRef.current.classList.add('hidden');
        }
    };

    const closeNavbar = () => {
        if (!navbarMenuRef.current.classList.contains('hidden')) {
            navbarMenuRef.current.classList.add('hidden');
        }
    };

    return (
        <nav className="bg-[#1E1E1E]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between pb-0 mx-auto p-4 z-10">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://www.philliebopmusic.com/_next/image?url=%2Fimgs%2Fhome%2Fphillibop-logo-new%20(1)%20(1).png&w=256&q=75" className="h-24" alt="Logo" />
                </Link>
                <button 
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none" 
                    aria-controls="navbar-default" 
                    aria-expanded="false" 
                    onClick={toggleNavbar}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div ref={navbarMenuRef} className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 md:p-0 text-2xl font-normal mt-4 z-10 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" onClick={closeNavbar}>Home</Link>
                        </li>
                        <li>
                            <Link href="/producer" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" onClick={closeNavbar}>Producer</Link>
                        </li>
                        <li>
                            <Link href="/merch" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" onClick={closeNavbar}>Merch</Link>
                        </li>
                        <li>
                            <Link href="/shop" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" onClick={closeNavbar}>Shop</Link>
                        </li>
                        <li>
                            <Link href="/cart" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" onClick={closeNavbar}>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

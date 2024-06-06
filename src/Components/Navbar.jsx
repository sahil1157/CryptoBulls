

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bulls from '../assets/logo.png';
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import ENG from '../assets/Flag.png'
import japan from '../assets/Flag_of_Japan.svg.webp'
import usa from '../assets/usa.webp'
import nep from '../assets/Flag_of_Nepal.svg.png'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({ name: 'Nep', flag: nep });

    const [navbarBackground, setNavbarBackground] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarBackground(true);
        } else {
            setNavbarBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isSidebarOpen]);

    const links = [
        { path: '/', name: 'Home' },
        { path: '/', name: 'Introduction' },
        { path: '/', name: 'Services' },
        { path: '/', name: 'FAQ' },
    ];

    const countries = [
        { name: 'NEP', flag: nep },
        { name: 'ENG', flag: ENG },
        { name: 'JPN', flag: japan },
        { name: 'USA', flag: usa },
    ];

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
        setIsSidebarOpen(false);
    };

    return (
        <div className='bg-gradient-to-tr from-[#013A40] to-[#026874] sticky top-0 z-50 flex'>
            <div style={{ paddingInline: '6%' }} className="relative p-2 w-full flex h-fit">

                <div className="flex flex-row justify-between w-full h-fit items-center">
                    <div className="flex items-center w-fit h-fit flex-row gap-2">
                        <img src={bulls} className="h-[80px]" alt="" />
                    </div>
                    {/* Desktop Navigation Links... */}
                    <div className="hidden lg:flex z-30 flex-row gap-10">
                        {links.map((x, ind) => (
                            <Link
                                key={ind}
                                to={x.path}
                                className="text-white md:cursor-pointer text-lg"
                            >
                                {x.name}
                            </Link>
                        ))}
                    </div>
                    {/* Dropdown Button for large devicess... */}
                    <div className="relative hidden lg:flex flex-row gap-3">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-[130px] mr-6 h-[40px] gap-2 text-center flex-row rounded-full flex items-center bg-white text-black"
                        >
                            <img src={selectedCountry.flag} className="w-[30px] ml-1 h-[30px] rounded-full" alt="" />
                            <p className="text-[#5E5E5E] items-center flex font-semibold text-sm">{selectedCountry.name}</p>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute z-50 top-14 left-0 w-[130px] bg-white rounded-md shadow-lg">
                                {countries.map((country, ind) => (
                                    <div
                                        key={ind}
                                        onClick={() => handleCountryChange(country)}
                                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md"
                                    >
                                        <img src={country.flag} className="w-[30px] h-[30px] rounded-full" alt="" />
                                        <p className="text-black text-sm font-semibold">{country.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Hamburger Menu for Mobile.. */}
                    <div className="flex lg:hidden flex-row items-center gap-3">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <RxHamburgerMenu size={25} className='text-white relative z-20' />
                        </button>
                    </div>
                </div>

                {/* Sidebar for Mobile... */}
                <div className={`fixed top-0 left-0 w-[300px] h-full bg-gray-800 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <RxCross1 size={25} onClick={() => setIsSidebarOpen(false)} className='absolute h-fit right-4 text-white top-6 cursor-pointer' />
                    <div className="flex flex-col gap-16 h-fit mt-24 place-items-center justify-center items-center">
                        {links.map((x, ind) => (
                            <Link
                                key={ind}
                                to={x.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className="text-white text-lg"
                            >
                                {x.name}
                            </Link>
                        ))}
                        {/* Dropdown Button for Mobile..... */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-[130px] h-[40px] gap-2 text-center flex-row rounded-full flex items-center bg-white text-black"
                            >
                                <img src={selectedCountry.flag} className="w-[30px] ml-1 h-[30px] rounded-full" alt="" />
                                <p className="text-[#5E5E5E] items-center flex font-semibold text-sm">{selectedCountry.name}</p>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-12 left-0 w-[130px] bg-white rounded-md shadow-lg z-10">
                                    {countries.map((country, ind) => (
                                        <div
                                            key={ind}
                                            onClick={() => handleCountryChange(country)}
                                            className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md"
                                        >
                                            <img src={country.flag} className="w-[30px] h-[30px] rounded-full" alt="" />
                                            <p className="text-black text-sm font-semibold">{country.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


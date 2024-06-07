import React, { useEffect, useState, useRef } from 'react';
import bulls from '../assets/logo.png';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import 'flag-icons/css/flag-icons.min.css';
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-scroll';


const links = [
    { path: 'strategy', name: 'Home' },
    { path: 'intro', name: 'Introduction' },
    { path: 'services', name: 'Services' },
    { path: 'faq', name: 'Faq' },
];

const Navbar = ({activeSection, scrollToSection, showScrollTop}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({ name: 'ENG', code: 'gb' });

    const dropdownRef = useRef(null);
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isSidebarOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const countries = [
        { name: 'ENG', code: 'gb' },
        { name: 'FRA', code: 'fr' },
        { name: 'SPA', code: 'es' },
    ];

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
        setIsSidebarOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div ref={dropdownRef} className={`p-2 bg-transparent absolute w-[100%] top-0 flex ${showScrollTop ? 'bg-gradient-to-b sticky from-[#013A40] to-[#026874] z-50' : ''}`}>
            <div style={{ paddingInline: '6%' }} className="relative p-2 w-full flex h-fit">
                <div className="flex flex-row justify-between w-full h-fit items-center">
                    <div className="flex items-center w-fit h-fit flex-row gap-2">
                        <img src={bulls} className="h-[80px] lg:cursor-pointer" alt="Logo" />
                    </div>
                    <div className="hidden lg:flex z-30 flex-row gap-10">
                        {links.map((x, ind) => (
                            <Link
                                key={ind}
                                className={`text-white md:cursor-pointer text-lg ${activeSection === x.path && "border-b-2 border-white"}`}
                                onClick={() => scrollToSection(x.path)}
                            >
                                {x.name}
                            </Link>
                        ))}
                    </div>
                    <div className="relative z-50 hidden lg:flex flex-row gap-3 items-center">
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="w-[130px] mr-6 justify-between h-[40px] gap-2 text-center flex-row rounded-full flex items-center bg-white text-black"
                            >
                                <div className='flex flex-row gap-2'>
                                    <span className={`flag-icon flag-icon-${selectedCountry.code} ml-[6px] rounded-full`} style={{ width: '30px', height: '30px' }}></span>
                                    <p className="text-[#5E5E5E] items-center flex font-semibold text-sm">{selectedCountry.name}</p>
                                </div>
                                <IoMdArrowDropdown className="text-[#5E5E5E] mr-3" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute z-50 top-14 left-0 w-[130px] bg-white rounded-md shadow-lg">
                                    {countries.map((country, ind) => (
                                        <div
                                            key={ind}
                                            onClick={() => handleCountryChange(country)}
                                            className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md"
                                        >
                                            <span className={`flag-icon flag-icon-${country.code} rounded-full`} style={{ width: '30px', height: '30px' }}></span>
                                            <p className="text-black text-sm font-semibold">{country.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex lg:hidden relative z-50 flex-row items-center gap-6">
                        <div className="relative z-50 w-full" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="md:w-full w-16 h-[30px] rounded-lg flex justify-center items-center bg-white text-black px-2"
                            >
                                <span className={`flag-icon flag-icon-${selectedCountry.code} rounded-full`} style={{ width: '30px', height: '30px' }}></span>
                                <IoMdArrowDropdown className="text-[#5E5E5E] rounded-full ml-2" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute z-50 top-12 left-0 w-full bg-white rounded-lg shadow-lg">
                                    {countries.map((country, ind) => (
                                        <div
                                            key={ind}
                                            onClick={() => handleCountryChange(country)}
                                            className="flex gap-2 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
                                        >
                                            <span className={`flag-icon flag-icon-${country.code} w-10 h-[20px] rounded-lg`} ></span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <RxHamburgerMenu size={25} className='text-white relative z-20' />
                        </button>
                    </div>
                </div>
                <div className={`fixed top-0 left-0 w-[300px] h-full bg-gray-800 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} ref={sidebarRef}>
                    <RxCross1 size={25} onClick={() => setIsSidebarOpen(false)} className='absolute h-fit right-4 text-white top-6 cursor-pointer' />
                    <div className="flex flex-col gap-16 h-fit mt-24 place-items-center justify-center items-center">
                        {links.map((x, ind) => (
                            <Link
                                key={ind}
                                className="text-white text-lg"
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(x.path)
                                    setIsSidebarOpen(false);
                                }}
                            >
                                {x.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


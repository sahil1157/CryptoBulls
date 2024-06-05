import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bulls from '../../assets/Group 94.png';
import RightEllipse from '../../assets/RightEllipse.png';
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import ENG from '../../assets/Flag.png'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const links = [
        { path: '/', name: 'Home' },
        { path: '/', name: 'Feature' },
        { path: '/', name: 'Blog' },
        { path: '/', name: 'Contact' },
    ];

    return (
        <div className='navbar relative flex h-[90vh] md:h-[100vh]'>
            <div style={{ paddingInline: '6%' }} className="relative p-7 w-full flex h-fit">
                <img
                    src={RightEllipse}
                    className="absolute z-0 right-0 top-0 w-full max-w-[964px] -translate-y-[200px] md:-translate-y-0 h-auto max-h-[639.97px] md:object-cover"
                    alt=""
                />
                <div className="flex flex-row justify-between w-full h-fit items-center">
                    <div className="flex items-center w-fit h-fit flex-row gap-2">
                        <img src={bulls} className="h-[45px] w-[35.43px]" alt="" />
                        <p className="text-[25.1px] text-white">Crypto Bulls</p>
                    </div>
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
                    <div className="hidden lg:flex flex-row gap-3">
                        <button className="w-[82px] h-[40px] gap-2 text-center flex-row rounded-full flex items-center bg-white text-black">
                            <img src={ENG} className="w-[30px] ml-1 h-[30px] rounded-[30px]" alt="" />
                            <p className="text-[#5E5E5E] items-center flex font-semibold text-sm">ENG</p>
                        </button>
                        <button className="w-[93px] h-[40px] rounded-[30px] font-semibold text-[#5E5E5E] bg-white text-sm">
                            LOGIN
                        </button>
                    </div>
                    <div className="flex lg:hidden flex-row items-center gap-3">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <RxHamburgerMenu size={25} className='text-white relative z-20' />
                        </button>
                    </div>
                </div>

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
                        <Link to="#" className="text-white text-lg" onClick={() => setIsSidebarOpen(false)}>
                            ENG
                        </Link>
                        <Link to="#" className="text-white text-lg" onClick={() => setIsSidebarOpen(false)}>
                            LOGIN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderProps from '../../Services/SliderProps';

const Test = () => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            const boxWidth = 300;
            const scrollDistance = boxWidth;

            containerRef.current.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            const boxWidth = 300;
            const scrollDistance = boxWidth;

            containerRef.current.scrollBy({
                left: scrollDistance,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='flex w-full flex-col h-[450px] gap-5'>
            <div className='flex flex-row gap-5 justify-between'>
                <p className='md:text-3xl text-xl md:font-[600] text-white'>How It Works</p>
                <div className='flex flex-row gap-5 items-center'>
                    <button className='w-9 hover:bg-gray-200 h-9 items-center justify-center flex rounded-full bg-white text-black' onClick={scrollLeft}>
                        <IoIosArrowBack size={20} />
                    </button>
                    <button className='w-9 h-9 hover:bg-gray-200 items-center flex justify-center rounded-full bg-white text-black' onClick={scrollRight}>
                        <IoIosArrowForward size={20} />
                    </button>
                </div>
            </div>
            <div style={{ overflowX: 'hidden' }} ref={containerRef} className='flex overflow-x-scroll gap-5 items-center w-full h-full'>
                <div className='flex gap-6'>
                    <SliderProps />
                </div>
            </div>
        </div>
    );
};

export default Test;

import React from 'react';
import CustomButton from '../../Services/CostumButton';
import { SlArrowRight } from "react-icons/sl";

const Left = () => {
    return (
        <div className='max-w-[600px] mt-0 sm:mt-14 flex flex-col gap-2 font-body w-full text-white h-auto'>
            <div className='flex  w-full justify-start items-start flex-col md:text-left gap-7 md:gap-6'>
                <p className="font-semibold lg:text-start font-expletus text-center w-full text-2xl sm:text-3xl md:text-5xl xl:text-6xl">
                    Bullish Strategies for Crypto Bulls
                </p>
                <p className='lg:text-2xl text-lg sm:text-xl font-[500] font-monst md:mt-2 text-[40px] lg:text-start text-center w-full'>
                    Your path to Higher Yields
                </p>
                <div className='flex w-full justify-center lg:justify-start'>
                    <CustomButton className='text-white w-44 h-7 sm:h-11 p-1 flex justify-evenly items-center'>
                        <p className='flex items-center'>Read Documents</p>
                        <SlArrowRight size={10} className='flex items-center' />
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}

export default Left;

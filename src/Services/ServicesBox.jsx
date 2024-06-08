import React from 'react';
import { FaCheck } from "react-icons/fa6";

const ServicesBox = ({ items }) => {

    return (
        <div className='max-w-[327px] min-h-[311px] h-auto font-monst w-full min:h-[311px] text-[#FFFFFF] border-[1px] rounded-xl'>
            <div className='w-full h-fit p-4 justify-center bg-[#0396A699] rounded-t-xl border-b-[2px] items-center flex'>
                <p className='text-center font-expletus font-[600]'>{items.header}</p>
            </div>
            <div className='w-full font-monst flex p-6 mt-8 justify-center'>
                <div className='flex w-fit flex-col gap-6'>
                    <div className='flex items-center gap-2'>
                        <FaCheck size={15} className="min-w-[25px]" />
                        <p className=' font-[500] text-[13px] sm:text-[20px] break-words'>{items.name1}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheck size={15} className="min-w-[25px]" />
                        <p className='font-[500] text-[13px] sm:text-[20px] break-words'>{items.name2}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheck size={15} className="min-w-[25px]" />
                        <p className='font-[500] text-[13px] sm:text-[20px] break-words'>{items.name3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesBox;

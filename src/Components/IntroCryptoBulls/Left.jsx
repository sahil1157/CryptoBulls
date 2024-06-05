import React from 'react';
import LowerTextProps from '../../Services/LowerTextProps';

const Left = () => {
    return (
        <div className='flex flex-col lg:pt-0 pt-8'>
            <div className='w-full lg:text-start text-center '>
                <p className='text-[36px] font-expletus text-[#FFFFFF] font-[700]'>Introducing Crypto Bulls</p>
            </div>
            <div className='flex flex-col mt-7 gap-6'>
                <LowerTextProps />
            </div>
        </div>
    );
}

export default Left;

import React from 'react'
import Right from './Right'

const Left = () => {
    return (
        <div className='flex p-2 relative z-20 lg:flex-row items-center gap-7 w-full justify-between flex-col-reverse'>
            <div className='text-white h-full gap-6 flex flex-col flex-grow'>
                <p className="w-full text-xl sm:text-2xl  md:text-3xl font-[600] font-expletus md:text-[39px] flex justify-center lg:justify-start text-center lg:text-start">
                    Why You Choose Crypto Bulls ?
                </p>
                <p className='text-md text-start font-expletus text-[#FFFFFF] font-[400] md:text-[16px] flex'>
                    Choose Crypto Bulls for unparalleled financial growth and security. With our advanced strategies and expert team, we're dedicated to maximizing your returns while ensuring a safe and seamless investment experience.
                </p>
            </div>
            <Right />
        </div>
    )
}

export default Left
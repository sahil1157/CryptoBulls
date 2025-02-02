import React from 'react'
import QuesImg from '../../assets/QuesImg.png'

const Left = () => {
    return (
        <div className='relative z-20 lg:flex-col flex-col-reverse h-fit gap-6 lg:justify-between justify-center flex text-white'>
            <div className='flex flex-col text-center w-full items-center justify-center gap-3 lg:gap-6'>
                <p className=' text-2xl sm:text-3xl lg:text-5xl font-expletus text-center sm:text-start font-[600] flex md:font-[600]'>Frequently Asked Questions</p>
                <p className='lg:text-start justify-center lg:justify-start font-monst w-full'>Do have any kind of questions? We're here to help.</p>
            </div>
            <div className='w-full lg:justify-start justify-center items-center lg:ml-12 lg:mt-24 flex'>
                <img src={QuesImg} alt="" className='lg:w-[300px] lg:h-[294px] w-[140px] h-[140px] sm:w-fit sm:h-fit' />
            </div>
        </div>
    )
}

export default Left

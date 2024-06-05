import React from 'react'

const LeftBox = () => {
    return (
        <div className='max-w-[327px] w-full h-[311px] text-[#FFFFFF] border-[1px] border-white rounded-xl'>
            <div className='w-full justify-center bg-[#0396A699] rounded-t-xl h-fit border-b-[2px] p-4 items-center flex'>
                <p className='text-center text-3xl font-[600]'>Plan</p>
            </div>
            <div className='flex p-5 w-full justify-center text-center items-center flex-col gap-6'>
                <div className='flex flex-col'>
                    <p className='text-[#FFFFFFA3] text-[18px] font-[400]'>Duration</p>
                    <p className='text-[18px] font-[500]'>2 Years</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#FFFFFFA3] text-[18px] font-[400]'>Return</p>
                    <p className='text-[18px] font-[500]'>2x of your initial investment</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#FFFFFFA3] text-[18px] font-[400]'>Minimum investment</p>
                    <p className='text-[18px] font-[500]'>$150</p>
                </div>
            </div>
        </div>
    )
}

export default LeftBox

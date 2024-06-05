import React from 'react';
import darkhole from '../assets/Darkholeimg.png';
import innerDarkhole from '../assets/InnerDarkhole.png';
import LongRod from '../assets/LongRod.png';

const SliderProps = () => {
    const item = [
        {
            name: "DEPOSIT",
            details: 'Deposit your INR. Your funds will be instantly converted to USDT.',
            steps: 'STEP 1'
        },
        {
            name: 'INVESTMENT MANAGEMENT',
            steps: 'STEP 2',
            details: 'Our expert team will invest your USDT in carefully selected opportunities within the cryptocurrency market.'
        },
        {
            name: 'WATCH YOUR INVESTMENT GROW',
            steps: 'STEP 3',
            details: 'Over two years, your investment will grow steadily, doubling in value by the end of the term.'
        },
        {
            name: 'Recieve Returns',
            details: 'After two years, you can withdraw your investment along with the returns, or reinvest to continue growing your wealt',
            steps: 'STEP 4'

        }
    ]
    return (
        <>
            {
                item && item.map((x, ind) => {
                    return (
                        <div key={ind} className='w-[280px] md:w-[329px] min-h-[238px] h-full rounded-xl mt-16 md:mt-24 bg-[#010314]'>
                            <div className='flex gap-3 justify-start items-start w-full pt-16 p-8'>
                                <div className='relative justify-center text-center items-center flex'>
                                    <img src={darkhole} className='max-w-[30px] max-h-[30px] rounded-full' alt="" />
                                    <img src={innerDarkhole} className='flex absolute' alt="" />
                                    <img src={LongRod} className='flex absolute bottom-7' alt="" />
                                    <p className='flex absolute bottom-32 text-white text-2xl justify-center font-[600] w-[100px]'>{x.steps}</p>
                                </div>
                                <div className='text-white flex flex-col gap-2'>
                                    <p className='text-xl font-[500] font-expletus text-[20px]'>{x.header}</p>
                                    <p className='font-[400] text-[14px] font-monst'>{x.details}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default SliderProps;

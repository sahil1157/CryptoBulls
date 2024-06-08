import React from 'react';

const ChooseServicesProps = ({ items }) => {
    const arr = [
        {
            name: 'Proven Strategies',
            img: '/Assets/Group.png',
            details: 'Our investment strategies are designed to minimize risk and maximize returns.'
        },
        {
            name: 'Expert Team',
            img: '/Assets/expert.png',
            details: 'Our team consists of seasoned professionals with extensive experience in finance and cryptocurrency.'
        },
        {
            name: 'Secure Platform',
            img: '/Assets/secured.png',
            details: 'We prioritize your security with top-notch encryption and secure transaction protocols.'
        }
    ]
    return (

        <>
            {
                arr && arr.map((x, ind) => {
                    return (
                        <div key={ind} className='w-full justify-center font-monst items-center flex  h-auto lg:h-[160px] rounded-xl border-[1px] text-white border-white bg-[#10121D]' >
                            <div className='p-4 w-full lg:p-8 gap-4 flex'>
                                <div className='flex flex-col md:flex-row p-1 gap-1 md:gap-3'>
                                    <div className='flex items-center flex-row gap-3'>
                                        <div className='w-[39px] h-[39px] lg:w-[69px] lg:h-[69px]'>
                                            <img className='flex rounded-full' src={x.img} alt="" />
                                        </div>
                                        <p className='text-[15px] md:hidden lg:text-[16px] font-[500] block flex-wrap text-[#FFFFFF]'>{x.name}</p>
                                    </div>
                                    <div className='md:block flex flex-col gap-2'>
                                        <p className='text-[15px] md:block lg:text-[16px] font-[500] hidden flex-wrap text-[#FFFFFF]'>{x.name}</p>
                                        <p className='text-xs md:block w-full lg:text-[16px] font-[400] hidden flex-wrap text-[#92939E]'>{x.details}</p>

                                    </div>
                                    <p className='text-xs md:hidden w-full lg:text-[16px] font-[400] flex flex-wrap text-[#92939E]'>{x.details}</p>
                                </div>
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
}

export default ChooseServicesProps;

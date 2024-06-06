import React from 'react';

const ChooseServicesProps = () => {
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
                        <div key={ind} className='w-fit justify-center font-monst items-center flex  h-auto lg:h-[160px] rounded-xl border-[1px] text-white border-white bg-[#10121D]' >
                            <div className='p-4 lg:p-8 items-center gap-4 flex'>
                                <img className='w-[50px] h-[50px] lg:w-[69px] lg:h-[69px] rounded-full' src={x.img} alt="" />
                                <div className='flex -mt-1 lg:-mt-3 flex-col gap-1'>
                                    <p className='text-base lg:text-[16px] font-[500] flex flex-wrap text-[#FFFFFF]'>{x.name}</p>
                                    <p className='text-xs lg:text-[16px] font-[400] flex flex-wrap text-[#92939E]'>{x.details}</p>
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

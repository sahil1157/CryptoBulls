import React from 'react'

const Partners = () => {

    const partners = [
        {
            icon: '/Assets/appertaure 1.png',

        },
        {
            icon: "/Assets/Group 97.png",
        },
        {
            icon: '/Assets/krystal 1.png',
        },
        {
            icon: '/Assets/Uniswap.png',
        },
    ]

    return (
        <div className='flex w-full flex-col text-white gap-4'>
            <div className='w-full flex justify-center '>
                <p className='text-[24px] font-[500] font-body'>Our Top Partner</p>
            </div>
            <div className='flex flex-wrap w-full h-full justify-center md:justify-between flex-row gap-7 items-center mt-5'>
                {
                    partners && partners.map((x, ind) => {
                        return (
                            <div key={ind} className='flex p-2 flex-row justify-center items-center gap-1'>
                                <img src={x.icon} alt="" className='h-fit md:h-16' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Partners

import React from 'react'

const Partners = () => {

    const partners = [
        {
            name: 'Spotify',
            icon: '/Assets/SpotifyImg.png',
            className: 'text-2xl md:text-3xl font-[600]',
            imgClassName: 'w-[45.03px] cursor-pointer  h-[45.08px]'

        },
        {
            icon: "/Assets/Google.png",
            className: 'md:text-4xl text-4xl font-[600]',
            imgClassName: 'w-[152.41px] cursor-pointer  h-[47.75px]'
        },
        {
            name: 'Pinterest',
            icon: '/Assets/PinterestImg.png',
            className: 'text-3xl font-[700]',
            imgClassName: ''
        },
        {
            name: "",
            icon: '/Assets/Stripeee.png',
            className: '',
            imgClassName: 'w-[117.24px] cursor-pointer  h-[48.91px]'
        },
        {
            name: '',
            icon: '/Assets/Reddittt.png',
            className: '',
            imgClassName: 'w-[123px] cursor-pointer  h-[42px]'
        }
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
                                <img src={x.icon} alt="" className={x.imgClassName} />
                                <p className={x.className}>{x.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Partners

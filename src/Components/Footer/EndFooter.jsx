import React from 'react'

const EndFooter = () => {
    const icons = [
        {
            icon: '/Assets/fb.png'
        },
        {
            icon: '/Assets/insta.png'
        },
        {
            icon: '/Assets/linkedin.png'
        },
        {
            icon: '/Assets/lastImg.png'
        }
    ]
    return (
        <div>
            <div style={{ paddingInline: '13%' }} className='h-fit w-full flex md:flex-row flex-col items-center justify-center gap-7 p-4 md:justify-between text-white bg-black'>
                <div>
                    <p>Copyright © 2024Crypto Bulls.All rights reserved.</p>
                </div>
                <div className='flex flex-row gap-3'>
                    {
                        icons && icons.map((x, ind) => {
                            return (
                                <button key={ind} className='flex flex-row gap-2'>
                                    <img src={x.icon} alt="" className='w-[15px] h-[15px]'/>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default EndFooter

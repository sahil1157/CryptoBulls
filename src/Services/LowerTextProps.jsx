import React from 'react'

const LowerTextProps = ({ items }) => {

    const item = [
        {
            name: "Who We Are",
            details: 'Welcome to Crypto Bulls, the forefront sanctuary for aficionados of the crypto-verse and discerning investors alike. Brace yourself for a veritable Renaissance in your investment portfolio as we conduct an exponential crescendo, doubling your capital within a mere biennium. Through the alchemy of our perspicacious market insights and impregnable fortifications of security, we embark upon a voyage toward opulence and serenity.',
            details2: '',
            details3: '',
            className: 'flex lg:text-start text-center w-full lg:w-[400px] xl:w-[550px] flex-col'
        },
        {
            name: 'Our Vision',
            details: "At Crypto Bulls, our gaze extends far beyond the horizons of conventional finance, envisioning a realm where each individual wields the keys to unlock their financial destiny. With an unwavering commitment to innovation and inclusivity, we envisage a future where cryptocurrency reigns supreme as the harbinger of global prosperity, fostering a community imbued with the ethos of financial autonomy and abundance.",
            details2: '',
            details3: '',
            className: 'flex lg:w-[400px] w-full flex-col xl:w-[550px] text-center'
        },
        {
            name: "Our Mission",
            details: 'At Crypto Bulls, we echo the yearnings of countless souls yearning to harness the transformative power of cryptocurrency. At the heart of our mission lies the democratization of financial empowerment through groundbreaking investment strategies. We commit to providing a sanctuary of unwavering reliability and prosperity, enabling individuals to enhance their wealth with utmost security and fluidity.',
            details2: '',
            details3: '',
            className: 'flex lg:w-[400px] w-full flex-col xl:w-[550px] text-center'

        }
    ]
    return (
        <>
            <div className='w-full text-white justify-center flex'>
                <div className='flex flex-col gap-4'>
                    {
                        item && item.map((x, ind) => {
                            return (
                                <div key={ind} className='flex mt-9 lg:mt-2 gap-3 flex-col'>
                                    <div className='flex gap-3 text-start justify-start items-center'>
                                        <div className='w-[15px] h-[15px] bg-white rounded-full'></div>
                                        <p className='text-2xl font-[600] text-white'>{x.name}</p>
                                    </div>
                                    <div className={`font-body ${x.className}`}>
                                        <p className='text-start font-[400] text-[14px] flex flex-wrap'>
                                            {x.details}
                                        </p>
                                        <p className='text-start font-[400] text-[14px] flex flex-wrap'>
                                            {x.details2}
                                        </p>
                                        <p className='text-start font-[400] text-[14px] flex flex-wrap'>
                                            {x.details4}
                                        </p>
                                        <p className='text-start font-[400] text-[14px] flex flex-wrap'>
                                            {x.details3}
                                        </p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default LowerTextProps

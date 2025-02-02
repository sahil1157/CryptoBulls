import React from 'react'
import LeftBox from './LeftBox'
import ServicesBox from '../../Services/ServicesBox'
import Test from '../HowItWorks/Test'

const IndexService = () => {
    const items = {
        header: 'SECURITY MEASURES',
        name1: 'Advance encryption',
        name2: 'Secure wallets',
        name3: 'Regular Audits'
    }
    const x = {
        header: 'CUSTOMER SUPPORT',
        name1: '24/7 support',
        name2: 'Dedicated managers',
        name3: 'Comprehensive FAQs'
    }
    return (
        <>
            <div id="services" className='bg-gradient-to-tl pt-[5vh] lg:pt-[10vh] to-[#013A40] from-[#0396A6] text-white w-full flex flex-col gap-12 text-center'>
                <div className='pt-12 px-[5%] sm:px-[13%]'>
                    <p className='sm:text-[36px] text-3xl font-expletus font-[700]'>Services</p>
                    <div className='xl:flex-row xl:justify-between xl:flex w-full md:grid-cols-2 grid-cols-1 flex md:grid flex-wrap justify-center gap-12 md:gap-7 mt-14 sm:mt-24'>
                        <LeftBox />
                        <ServicesBox items={items} />
                        <ServicesBox items={x} />
                    </div>
                    <div className='md:mt-28 mt-16 flex flex-row w-full gap-6'>
                        <Test />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexService

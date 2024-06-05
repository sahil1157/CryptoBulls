import React from 'react'
import LeftBox from './LeftBox'
import SecurityBox from './SecurityBox'
import CostumerSupportBox from './CostumerSupportBox'
import IndexWorks from '../HowItWorks/IndexWorks'

const IndexService = () => {
    return (
        <>
            <div className='bg-gradient-to-tl to-[#013A40] from-[#0396A6] text-white w-full flex flex-col gap-12 text-center'>
                <div style={{ paddingInline: "13%" }} className='pt-12'>
                    <p className='text-[36px] font-[700]'>Services</p>
                    <div className='xl:flex-row xl:justify-between xl:flex w-full md:grid-cols-2 grid-cols-1 flex md:grid flex-wrap justify-center gap-12 md:gap-7 mt-24'>
                        <LeftBox />
                        <SecurityBox />
                        <CostumerSupportBox />
                    </div>
                    <IndexWorks />
                </div>
            </div>
        </>
    )
}

export default IndexService

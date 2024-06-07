import React from 'react'
import Left from './Left'
import LeftEllupse2 from './LeftEllipse'
import QuestionProps from '../../Services/QuestionProps'
import Partners from '../Footer/Partners'

const IndexQuestions = () => {
    return (
        <div id='faq' className='from-[#013A40] lg:pt-[5vh] relative flex flex-col to-[#0396A6] bg-gradient-to-tr'>
            <div style={{ paddingInline: '13%' }} className='flex relative flex-col lg:flex-row justify-between gap-12 w-full h-full mt-16 md:mt-24'>
                <LeftEllupse2 />
                <Left />
                <div className='flex flex-col relative z-20 lg:mt-0 mt-3 gap-7'>
                    <QuestionProps />
                </div>
            </div>
            <div style={{ paddingInline: '13%' }} className='items-center flex w-full h-[70vh] md:h-[50vh]'>
                <Partners />
            </div>
        </div>
    )
}

export default IndexQuestions

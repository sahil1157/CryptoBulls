import React from 'react'
import Left from './Left'
import IndexFooter from '../Footer/IndexFooter'
import LeftEllupse2 from './LeftEllipse'
import QuestionProps from '../../Services/QuestionProps'

const IndexQuestions = () => {
    return (

        <div className='from-[#013A40] h-full relative flex flex-col to-[#0396A6] bg-gradient-to-tr'>
            <div style={{ paddingInline: '13%' }} className='flex relative flex-col lg:flex-row justify-between gap-12 w-full h-full mt-16 md:mt-24'>
             <LeftEllupse2 />

                <Left />
                <div className='flex flex-col relative z-20 lg:mt-0 mt-3 gap-7'>
                    <QuestionProps/>
                </div>
            </div>
            <IndexFooter />
        </div>
    )
}

export default IndexQuestions

import React from 'react'
import IndexStrategy from '../Components/HeroHome/Strategies'
import IndexChoose from '../Components/ChooseCrypto/IndexChoose'
import IndexIntro from '../Components/IntroCryptoBulls/IndexIntro'
import IndexService from '../Components/Services/IndexService'
import IndexQuestions from '../Components/Questions/IndexQuestions'

const Home = () => {
    return (
        <div className='flex w-full flex-col h-full'>
            <IndexStrategy />
            <IndexChoose />
            <IndexIntro />
            <IndexService />
            <IndexQuestions />
        </div>
    )
}

export default Home

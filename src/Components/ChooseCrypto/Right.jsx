import React from 'react'
import Bitcoinimage from '../../assets/BitcoinImage.png'

const Right = () => {
    return (
        <div className='w-full items-center justify-center flex'>
            <img className='sm:max-w-[250px] sm:w-full w-[130px] h-[130px] sm:h-full sm:max-h-[377px]' src={Bitcoinimage} alt="" />
        </div>
    )
}

export default Right

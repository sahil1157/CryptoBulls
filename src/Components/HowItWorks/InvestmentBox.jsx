import React from 'react'
import SliderProps from '../../Services/SliderProps'

const InvestmentBox = () => {
    const items = {
        name:'INVESTMENT MANAGEMENT',
        steps:'STEP 2',
        details:'Our expert team will invest your USDT in carefully selected opportunities within the cryptocurrency market.'
    }
  return (
    <>
      <SliderProps items={items}/>
    </>
  )
}

export default InvestmentBox

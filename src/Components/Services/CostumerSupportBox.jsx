import React from 'react'
import ServicesBox from '../../Services/ServicesBox'

const CostumerSupportBox = () => {
    const items = {
        header: 'COSTOMER SUPPORT',
        name1: '24/7 support',
        name2: 'Deducated managers',
        name3: 'Comprehensive FAQs'
    }
    return (
        <>
            <ServicesBox items={items} />
        </>
    )
}

export default CostumerSupportBox

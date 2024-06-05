import React from 'react'
import ServicesBox from '../../Services/ServicesBox'

const SecurityBox = () => {
    const items = {
        header: 'SECURITY MEASURES',
        name1: 'Advance encryption',
        name2: 'Secure wallets',
        name3: 'Regular Audits'
    }
    return (
        <>
            <ServicesBox items={items} />
        </>
    )
}

export default SecurityBox

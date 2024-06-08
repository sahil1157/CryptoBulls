import React from 'react'
import Bulls from '../../assets/BullImg.png'
import Text from '../../Services/Text'

const Right = () => {
    const x = {
        name: 'Our Story',
        details: 'Born from the crucible of financial sagacity and fervent conviction in the latent potential of cryptocurrency, Crypto Bulls stands as a bastion of innovation and prescience.',
        detalis2: 'Forged by a coterie of seasoned financiers and fervid crypto savants, our edifice is fortified upon the bedrock of astute market acumen and cutting-edge methodologies.',
        details3: 'With an indomitable belief in the limitless vistas of cryptocurrency, we endeavor to dismantle barriers and bestow prosperity upon all.',
        className: 'flex w-[416px] flex-col gap-4',
    }
    return (
        <div className='mt-8 w-full xl:items-center xl:justify-between items-center lg:justify-end flex flex-col gap-5'>
            <div className='flex justify-center'>
                <img src={Bulls} alt="" className='lg:max-w-[250px] lg:w-full w-[110px] sm:w-[180px] sm:h-auto max-h-[377px] h-[120px]' />
            </div>
            <div className='lg:block hidden'>
                <Text x={x} />
            </div>
        </div>
    )
}

export default Right

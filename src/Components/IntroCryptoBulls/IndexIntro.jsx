import React, { forwardRef } from 'react';
import Left from './Left';
import Right from './Right';
import Text from '../../Services/Text';

const IndexIntro = forwardRef(() => {
    const x = {
        name: 'Our Story',
        details: 'Born from the crucible of financial sagacity and fervent conviction in the latent potential of cryptocurrency, Crypto Bulls stands as a bastion of innovation and prescience.',
        detalis2: 'Forged by a coterie of seasoned financiers and fervid crypto savants, our edifice is fortified upon the bedrock of astute market acumen and cutting-edge methodologies.',
        details3: 'With an indomitable belief in the limitless vistas of cryptocurrency, we endeavor to dismantle barriers and bestow prosperity upon all.',
        className: 'text-start font-[400] text-[10px] font-monst flex flex-wrap'
    };
    
    return (
        <div id="intro" className='bg-gradient-to-tr p-5 to-[#013A40] from-[#0396A6]' style={{ paddingTop: '10vh' }}>
            <div className='lg:mt-16 flex flex-col-reverse justify-center lg:flex-row gap-5 w-full lg:justify-between px-[2%] sm:px-[13%]'>
                <div className='flex lg:justify-start gap-3 justify-center items-center flex-col'>
                    <Left />
                    <div className='lg:hidden lg:mt-0 block'>
                        <Text x={x} />
                    </div>
                </div>
                <Right />
            </div>
        </div>
    );
});

export default IndexIntro;

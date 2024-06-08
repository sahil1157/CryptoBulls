import React from 'react';
import Left from './Left';
 import LeftEllupse from '../Ellipse/LeftEllupse';

import ChooseServicesProps from '../../Services/ChooseServicesProps';

const IndexChoose = () => {
    return (
        <div id="choose" className='bg-gradient-to-b from-[#013A40] to-[#037885] pt-[12vh]'>
            <div className="relative flex flex-col items-center justify-center w-full h-full p-12 mx-auto gap-7 px-[5%] sm:px-[13%]">
                <LeftEllupse />
                <Left />
                <div className="relative z-20 flex w-full flex-col pt-7 md:grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                    <ChooseServicesProps/>
                </div>
            </div>
        </div>
    );
}

export default IndexChoose;


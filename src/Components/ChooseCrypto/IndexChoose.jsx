import React from 'react';
import Left from './Left';
import ChooseServicesProps from '../../Services/ChooseServicesProps';
import LeftEllupse from '../Ellipse/LeftEllupse';

const IndexChoose = () => {
    return (
        <section id="choose" className='bg-gradient-to-b from-[#013A40] to-[#037885]'>
            <div style={{ paddingInline: '13%' }} className="relative flex flex-col items-center justify-center w-full h-full p-12 mx-auto gap-7">
                <LeftEllupse />
                <Left />
                <div className="relative z-20 flex w-full  flex-col pt-7 md:grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                    <ChooseServicesProps />
                </div>
            </div>
        </section>
    );
}

export default IndexChoose;

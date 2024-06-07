import React, { forwardRef } from 'react';
import Left from './Left';
import Right from './Right';
import RightEllipse from '../../assets/RightEllipse.png'

const IndexStrategy = forwardRef(() => {
    return (
        <section id="strategy" className='navbar md:pt-32 items-center box-border md:flex top-0 w-full'>
            <img
                src={RightEllipse}
                className="absolute z-0 right-0 top-0 w-full max-w-[964px] h-auto max-h-[639.97px] md:object-cover"
                alt=""
            />
            <div style={{ paddingInline: '13%' }} className='flex lg:ml-8 w-full items-center'>
                <div className="w-full justify-center flex flex-col lg:flex-row lg:justify-between h-[80vh] mt-24">
                    <Left />
                    <Right />
                </div>
            </div>
        </section>
    );
});

export default IndexStrategy;

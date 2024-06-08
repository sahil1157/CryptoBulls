import React, { forwardRef } from 'react';
import Left from './Left';
import Right from './Right';
import RightEllipse from '../../assets/RightEllipse.png'

const IndexStrategy = forwardRef(() => {
    return (
        <div id="strategy" className='navbar sm:h-fit items-center lg:pt-32 md:flex top-0 w-full'>
            <img
                src={RightEllipse}
                className="absolute z-0 right-0 top-0 w-full max-w-[964px] h-auto max-h-[639.97px] md:object-cover"
                alt=""
            />
            <div className='flex lg:ml-8 pt-24 sm:pt-0 w-full sm:h-fit items-center px-[5%] sm:px-[13%]'>
                <div className="w-full justify-center flex flex-col lg:flex-row lg:justify-between mt-24">
                    <Left />
                    <Right />
                </div>
            </div>
        </div>
    );
});

export default IndexStrategy;

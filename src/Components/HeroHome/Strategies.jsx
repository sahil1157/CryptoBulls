import React from 'react';
import Left from './Left';
import Right from './Right';
import RightEllipse from '../../assets/RightEllipse.png'

const IndexStrategy = () => {
    return (
        <div className='navbar -mt-20 md:mt-0 flex top-0 w-full'>
            <img
                    src={RightEllipse}
                    className="absolute z-0 right-0 top-0 w-full max-w-[964px] h-auto max-h-[639.97px] md:object-cover"
                    alt=""
                />
            <div style={{ paddingInline: '13%' }} className="w-full flex flex-col lg:flex-row justify-center lg:justify-between h-[80vh] mt-24">
                <Left />
                <Right />
            </div>
        </div>
    );
}

export default IndexStrategy;

import React from 'react';
import Left from './Left';
import Right from './Right';

const IndexStrategy = () => {
    return (
        <div className='absolute flex top-0 w-full lg:mt-32'>
            <div style={{ paddingInline: '13%' }} className="w-full flex flex-col lg:flex-row justify-center lg:justify-between h-[80vh] mt-24">
                <Left />
                <Right />
            </div>
        </div>
    );
}

export default IndexStrategy;

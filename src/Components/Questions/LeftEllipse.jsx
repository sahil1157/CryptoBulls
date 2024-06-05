import React from 'react'
import ellp1 from './Ellipses/ellip1.png'
import ellp2 from './Ellipses/Ellip2.png'
import ellp3 from './Ellipses/Ellip3.png'

const LeftEllupse2 = () => {
    return (
        <div className='absolute left-0 top-0 -translate-y-20'>
            <img
                src={ellp1}
                className="w-fit h-fit"
                alt="Ellipse 1"
            />
            <div className='absolute w-full left-0 top-0 mt-32'>
                <img
                    src={ellp2}
                    className="w-fit h-fit"
                    alt="Ellipse 2"
                />
                <div className='absolute left-0 mt-44 top-0'>
                    <img
                        src={ellp3}
                        className="w-fit h-fit"
                        alt="Ellipse 3"
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftEllupse2
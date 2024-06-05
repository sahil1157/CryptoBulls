import React from 'react'
import ell4 from '../../../Ellipse/ell4.png';
import ell3 from '../../../Ellipse/ell3.png';
import ell2 from '../../../Ellipse/ell2.png';
import ell1 from '../../../Ellipse/ell1.png';

const LeftEllupse = () => {
    return (
        <div>
            <img
                src={ell4}
                className="absolute z-0  left-0 flex bottom-0  w-fit"
                alt=""
            />
            <img
                src={ell3}
                className="absolute z-0 left-0 bottom-0  w-fit"
                alt=""
            />
            <img
                src={ell2}
                className="absolute z-0  bottom-0 left-0 w-fit"
                alt=""
            />
            <img
                src={ell1}
                className="absolute bottom-0 z-0 left-0  w-fit"
                alt=""
            />
        </div>
    )
}

export default LeftEllupse
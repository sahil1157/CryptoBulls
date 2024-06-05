import React from 'react';

const CustomButton = ({ children, className }) => {
    return (
        <button
            className={`w-44 h-11 border-white border-[2px] rounded-[30px] text-[#5E5E5E] text-sm font-body ${className}`}
        >
            {children}
        </button>
    );
};

export default CustomButton;

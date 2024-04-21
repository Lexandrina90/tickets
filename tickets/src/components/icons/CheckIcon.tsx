import React from 'react';

interface CheckIconProps {
    className?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({className}) => {
    return (
        <>
        <svg viewBox="0 0 20 20" fill="none" className={className}>
            <path d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        </>
    )
}

export default CheckIcon;
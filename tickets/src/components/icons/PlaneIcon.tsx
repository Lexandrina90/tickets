import React from 'react';

interface PlaneIconProps {
    className?: string;
}

const PlaneIcon: React.FC<PlaneIconProps> = ({className}) => {
    return (
        <>
            <svg 
                className={className}
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="50.000000pt" 
                height="50.000000pt" 
                viewBox="0 0 50.000000 50.000000"
                preserveAspectRatio="xMidYMid meet"
            >

                <g 
                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                    fill="currentColor" 
                    stroke="none"
                >
                    <path d="M110 461 c0 -4 14 -41 30 -81 17 -40 30 -74 30 -76 0 -2 -24 -4 -54
                    -4 -50 0 -54 2 -66 30 -8 19 -20 30 -32 30 -18 0 -19 -4 -12 -42 5 -24 8 -54
                    8 -68 0 -14 -3 -44 -8 -67 -7 -39 -6 -43 12 -43 12 0 24 11 32 30 12 28 16 30
                    66 30 30 0 54 -2 54 -4 0 -2 -13 -36 -30 -76 -17 -40 -30 -77 -30 -81 0 -5 11
                    -9 24 -9 19 0 40 20 91 85 l66 85 82 0 c89 0 127 15 127 50 0 35 -38 50 -127
                    50 l-82 0 -66 85 c-51 65 -72 85 -91 85 -13 0 -24 -4 -24 -9z"/>
                </g>
            </svg>
        </>
    )
}

export default PlaneIcon;
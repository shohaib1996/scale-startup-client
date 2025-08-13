import React from 'react';

interface GlobeIconProps {
    width?: number;
    height?: number;
    strokeColor?: string;
    className?: string;
}

const Language: React.FC<GlobeIconProps> = ({
    width = 14,
    height = 15,
    strokeColor = '#B4B7BF',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g id="Frame">
                <path
                    id="Vector"
                    d="M7.00033 13.3334C10.222 13.3334 12.8337 10.7217 12.8337 7.50008C12.8337 4.27842 10.222 1.66675 7.00033 1.66675C3.77866 1.66675 1.16699 4.27842 1.16699 7.50008C1.16699 10.7217 3.77866 13.3334 7.00033 13.3334Z"
                    stroke={strokeColor}
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_2"
                    d="M7.00032 1.66675C5.50246 3.2395 4.66699 5.32818 4.66699 7.50008C4.66699 9.67198 5.50246 11.7607 7.00032 13.3334C8.49819 11.7607 9.33366 9.67198 9.33366 7.50008C9.33366 5.32818 8.49819 3.2395 7.00032 1.66675Z"
                    stroke={strokeColor}
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_3"
                    d="M1.16699 7.5H12.8337"
                    stroke={strokeColor}
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

export default Language;

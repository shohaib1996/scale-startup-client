import React from 'react';

interface SVGProps {
    strokeColor?: string;
    strokeWidth?: number;
    width?: number;
    height?: number;
    className?: string;
}

const Car: React.FC<SVGProps> = ({
    strokeColor = 'white',
    strokeWidth = 2,
    width = 31,
    height = 31,
    className,
}) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.8875 4.03751H11.1125C8 4.03751 7.3125 5.58751 6.9125 7.48751L5.5 14.25H25.5L24.0875 7.48751C23.6875 5.58751 23 4.03751 19.8875 4.03751Z"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M27.9879 25.275C28.1254 26.7375 26.9504 28 25.4504 28H23.1004C21.7504 28 21.5629 27.425 21.3254 26.7125L21.0754 25.9625C20.7254 24.9375 20.5004 24.25 18.7004 24.25H12.3004C10.5004 24.25 10.2379 25.025 9.9254 25.9625L9.6754 26.7125C9.4379 27.425 9.2504 28 7.9004 28H5.5504C4.0504 28 2.8754 26.7375 3.0129 25.275L3.7129 17.6625C3.8879 15.7875 4.2504 14.25 7.5254 14.25H23.4754C26.7504 14.25 27.1129 15.7875 27.2879 17.6625L27.9879 25.275Z"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.5 10.5H4.25"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M26.75 10.5H25.5"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.5 4.25V6.75"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.625 6.75H17.375"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 19.25H11.75"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.25 19.25H23"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Car;

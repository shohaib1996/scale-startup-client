import React from 'react';

interface SVGProps {
    strokeColor?: string;
    strokeWidth?: number;
    width?: number;
    height?: number;
    className?: string;
}

const Archive: React.FC<SVGProps> = ({
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
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M11.75 28H19.25C25.5 28 28 25.5 28 19.25V11.75C28 5.5 25.5 3 19.25 3H11.75C5.5 3 3 5.5 3 11.75V19.25C3 25.5 5.5 28 11.75 28Z"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23 10.1875V18.625C23 17.25 21.875 16.125 20.5 16.125H10.5C9.125 16.125 8 17.25 8 18.625V10.1875C8 8.8125 9.125 7.6875 10.5 7.6875H20.5C21.875 7.6875 23 8.8125 23 10.1875Z"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24.25 20.1875H23"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 20.1875H6.75"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23 18V14.25C23 12.875 21.875 11.75 20.5 11.75H10.5C9.125 11.75 8 12.875 8 14.25V18"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23 18.625V20.1875H18.625C18.625 21.9125 17.225 23.3125 15.5 23.3125C13.775 23.3125 12.375 21.9125 12.375 20.1875H8V18.625C8 17.25 9.125 16.125 10.5 16.125H20.5C21.875 16.125 23 17.25 23 18.625Z"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Archive;

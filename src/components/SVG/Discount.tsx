import React from 'react';

interface CustomIconProps {
    strokeColor?: string;
    strokeWidth?: number;
    width?: number;
    height?: number;
    className?: string;
}

const Discount: React.FC<CustomIconProps> = ({
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
                d="M5.48514 18.8255L3.58516 16.9255C2.81016 16.1505 2.81016 14.8755 3.58516 14.1005L5.48514 12.2005C5.81014 11.8755 6.07264 11.238 6.07264 10.788V8.10045C6.07264 7.00045 6.97265 6.10048 8.07265 6.10048H10.7601C11.2101 6.10048 11.8477 5.83801 12.1727 5.51301L14.0726 3.61299C14.8476 2.83799 16.1227 2.83799 16.8977 3.61299L18.7977 5.51301C19.1227 5.83801 19.7601 6.10048 20.2101 6.10048H22.8977C23.9977 6.10048 24.8976 7.00045 24.8976 8.10045V10.788C24.8976 11.238 25.1601 11.8755 25.4851 12.2005L27.3852 14.1005C28.1602 14.8755 28.1602 16.1505 27.3852 16.9255L25.4851 18.8255C25.1601 19.1505 24.8976 19.788 24.8976 20.238V22.9254C24.8976 24.0254 23.9977 24.9255 22.8977 24.9255H20.2101C19.7601 24.9255 19.1227 25.188 18.7977 25.513L16.8977 27.413C16.1227 28.188 14.8476 28.188 14.0726 27.413L12.1727 25.513C11.8477 25.188 11.2101 24.9255 10.7601 24.9255H8.07265C6.97265 24.9255 6.07264 24.0254 6.07264 22.9254V20.238C6.07264 19.7755 5.81014 19.138 5.48514 18.8255Z"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.75 19.25L19.25 11.75"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.6181 18.625H18.6294"
                stroke={strokeColor}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.3681 12.375H12.3794"
                stroke={strokeColor}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Discount;

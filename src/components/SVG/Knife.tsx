import * as React from 'react';

interface KnifeProps {
    width?: number | string;
    height?: number | string;
    layoutMode?: 'fill' | 'intrinsic' | 'responsive'; // Renamed layout to layoutMode
    extraClassName?: string; // For passing extra custom classes
    fill?: string; // Accept string for the fill color
}

const Knife: React.FC<KnifeProps> = ({
    width = '65', // Default width
    height = '180', // Default height
    layoutMode = 'intrinsic', // Renamed from layout to layoutMode
    extraClassName = '', // Default extra class
    fill = 'none', // Default fill value
}) => {
    const layoutStyles =
        layoutMode === 'fill'
            ? { width: '100%', height: '100%' }
            : { width, height };

    return (
        <svg
            {...layoutStyles} // Use layoutMode styles based on layoutMode prop
            viewBox="0 0 65 180"
            className={extraClassName} // Apply extra classes
            fill={fill} // Set fill color based on the passed prop
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M55.5852 179C63.5188 51.957 25.8344 16.3364 6.00049 14.4065L32.4457 2C72.7746 37.0692 64.6758 134.612 55.5852 179Z"
                stroke="url(#paint0_linear_44_193)"
                strokeWidth="3"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_44_193"
                    x1="38.8439"
                    y1="44.688"
                    x2="61.447"
                    y2="193.849"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#355BFB" />
                    <stop offset="1" stopColor="#F15A2D" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Knife;

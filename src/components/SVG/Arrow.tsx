import React from 'react';

interface ArrowLeftIconProps {
    width?: number;
    height?: number;
    className?: string;
}

const Arrow: React.FC<ArrowLeftIconProps> = ({
    width = 20,
    height = 20,
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} `} // Added transition for smooth effect
        >
            <g id="Iconsax/Linear/arrowleft">
                <path
                    id="Vector"
                    d="M12.0257 4.94141L17.084 9.99974L12.0257 15.0581M2.91732 9.99974H16.9423"
                    stroke="currentColor" // use currentColor to inherit color from parent
                    strokeWidth="1.66667"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

export default Arrow;

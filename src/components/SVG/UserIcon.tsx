import React from 'react';

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props} // spread props to allow customization when using this component
        >
            <g clipPath="url(#clip0_122_1696)">
                <path
                    d="M8.236 14.6668C11.9179 14.6668 14.9027 11.6821 14.9027 8.00016C14.9027 4.31826 11.9179 1.3335 8.236 1.3335C4.5541 1.3335 1.56934 4.31826 1.56934 8.00016C1.56934 11.6821 4.5541 14.6668 8.236 14.6668Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.23535 8.6665C9.33992 8.6665 10.2354 7.77107 10.2354 6.6665C10.2354 5.56193 9.33992 4.6665 8.23535 4.6665C7.13078 4.6665 6.23535 5.56193 6.23535 6.6665C6.23535 7.77107 7.13078 8.6665 8.23535 8.6665Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4.90137 13.7748V12.6668C4.90137 12.3132 5.04184 11.9741 5.29189 11.724C5.54194 11.474 5.88108 11.3335 6.2347 11.3335H10.2347C10.5883 11.3335 10.9275 11.474 11.1775 11.724C11.4276 11.9741 11.568 12.3132 11.568 12.6668V13.7748"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_122_1696">
                    <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.235352)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default UserIcon;

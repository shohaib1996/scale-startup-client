import React from 'react';

interface ReusableSVGProps {
    width?: number;
    height?: number;
    fillOpacity?: number;
    gradientColor?: string; // Allow changing gradient color
    className?: string; // Allow passing custom classes
}

const Flower: React.FC<ReusableSVGProps> = ({
    width = 210,
    height = 210,
    fillOpacity = 0.15,
    gradientColor = '#5356FF',
    className = '',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 210 210"
            fill="none"
            className={className}
        >
            <path
                d="M74.3435 75.2562C46.144 47.8189 65.5686 0 104.913 0C144.258 0 163.683 47.8189 135.483 75.2562L104.913 105L74.3435 75.2562Z"
                fill="url(#paint0_linear_564_3153)"
                fillOpacity="0.15"
            />
            <path
                d="M74.5192 134.744C46.3198 162.181 65.7444 210 105.089 210C144.434 210 163.859 162.181 135.659 134.744L105.089 105L74.5192 134.744Z"
                fill="url(#paint1_linear_564_3153)"
                fillOpacity="0.15"
            />
            <path
                d="M75.2562 135.658C47.8189 163.857 0 144.432 0 105.088C0 65.7427 47.8189 46.318 75.2562 74.5175L105 105.088L75.2562 135.658Z"
                fill="url(#paint2_linear_564_3153)"
                fillOpacity="0.15"
            />
            <path
                d="M134.744 135.482C162.181 163.681 210 144.257 210 104.912C210 65.5669 162.181 46.1423 134.744 74.3417L105 104.912L134.744 135.482Z"
                fill="url(#paint3_linear_564_3153)"
                fillOpacity="0.15"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_564_3153"
                    x1="88.8718"
                    y1="-4.5656e-07"
                    x2="104.913"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="0.917117" stopColor="#5356FF" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_564_3153"
                    x1="89.0476"
                    y1="210"
                    x2="105.089"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="0.917117" stopColor="#5356FF" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_564_3153"
                    x1="-4.5656e-07"
                    y1="121.129"
                    x2="105"
                    y2="105.088"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="0.917117" stopColor="#5356FF" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_564_3153"
                    x1="210"
                    y1="120.953"
                    x2="105"
                    y2="104.912"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="0.917117" stopColor="#5356FF" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Flower;

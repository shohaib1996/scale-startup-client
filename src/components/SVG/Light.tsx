// MyCustomSVGComponent.tsx
import React from 'react';

const Light: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="1195"
        height="1544"
        viewBox="0 0 1195 1544"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props} // Spread props for customization
    >
        <g filter="url(#filter0_f_44_81)">
            <path
                d="M146.297 614.917C114.002 559.012 68.043 430 5.21901 430C-47.3552 430 -38.4777 624.477 53.3079 785.742C265.864 1099.58 422.056 1114 563.133 1114C704.21 1114 765 1023.45 765 967.548C765 911.644 722.508 832.086 493.042 832.086C263.58 832.086 178.592 670.821 146.297 614.917Z"
                fill="#E967EC"
                fillOpacity="0.7"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_44_81"
                x="-457"
                y="0"
                width="1652"
                height="1544"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feGaussianBlur
                    stdDeviation="215"
                    result="effect1_foregroundBlur_44_81"
                />
            </filter>
        </defs>
    </svg>
);

export default Light;

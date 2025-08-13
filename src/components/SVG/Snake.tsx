// MyPathSVGComponent.tsx
import React from 'react';

const Snake: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="139"
        height="74"
        viewBox="0 0 139 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props} // Spread props for customization
    >
        <path
            d="M2.40111 2.32453L11.5618 21.3736C12.6659 23.6696 15.32 24.7683 17.7239 23.9244L32.8667 18.6088C35.447 17.7031 38.2764 19.0384 39.2174 21.6061L44.8446 36.9602C45.7288 39.3729 48.2979 40.7225 50.7863 40.0816L66.0121 36.16C68.5259 35.5125 71.1172 36.8965 71.977 39.3458L76.3394 51.7734C77.2366 54.3293 80.006 55.7059 82.5852 54.8781L98.3009 49.834C100.855 49.0143 103.601 50.3558 104.524 52.8742L110.253 68.508C111.113 70.8541 113.573 72.2053 116.014 71.6724L137.16 67.0563"
            stroke="url(#paint0_linear_22_25)"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <defs>
            <linearGradient
                id="paint0_linear_22_25"
                x1="141.902"
                y1="69.8884"
                x2="-7.24465"
                y2="0.464632"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#702FFF" />
                <stop offset="1" stopColor="#702FFF" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export default Snake;

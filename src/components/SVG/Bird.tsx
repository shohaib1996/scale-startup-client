import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
    width?: string | number;
    height?: string | number;
    fillColor?: string; // Prop to control fill color
    strokeColor?: string; // Prop to control stroke color
    fillOpacity?: number; // Optional prop to control fill opacity
    strokeOpacity?: number; // Optional prop to control stroke opacity
}

const Bird: React.FC<SVGProps> = ({
    width = 187,
    height = 160,
    fillColor = '#FDB70B',
    strokeColor = 'white',
    fillOpacity = 0.3,
    strokeOpacity = 0.1,
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 187 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="Group">
                <path
                    id="Vector"
                    d="M166.637 93.6166C166.637 130.278 136.915 160 100.253 160C63.5913 160 31.2627 128.992 31.2627 92.3302C31.2627 55.6685 67.4843 24.457 104.146 24.457C140.808 24.457 166.637 56.9549 166.637 93.6166Z"
                    fill={fillColor}
                    fillOpacity={fillOpacity}
                />
                <path
                    id="Vector_2"
                    d="M149.339 15.4687C149.339 15.4687 95.5146 60.1026 94.1944 73.2371C92.8741 86.3717 143.297 71.663 172.359 33.9181C207.514 -11.7652 170.344 -4.2331 149.339 15.4687Z"
                    fill={fillColor}
                    fillOpacity={fillOpacity}
                />
                <path
                    id="Vector_3"
                    d="M165.656 65.7893C165.656 65.7893 137.643 91.026 137.22 98.118C136.797 105.227 166.147 98.0841 178.452 75.2171C193.195 47.8647 176.539 54.7197 165.656 65.7893Z"
                    fill={fillColor}
                    fillOpacity={fillOpacity}
                />
                <path
                    id="Vector_4"
                    d="M55.8402 152.467C86.1276 152.467 110.68 127.915 110.68 97.6272C110.68 67.3398 86.1276 42.787 55.8402 42.787C25.5528 42.787 1 67.3398 1 97.6272C1 127.915 25.5528 152.467 55.8402 152.467Z"
                    stroke={strokeColor}
                    strokeOpacity={strokeOpacity}
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
};

export default Bird;

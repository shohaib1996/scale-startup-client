import React from 'react';

const UserAddIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props} // spread props to allow customization when using this component
        >
            <g clipPath="url(#clip0_14_255)">
                <path
                    d="M1.56934 14.0001C1.56928 12.9737 1.86543 11.969 2.42223 11.1067C2.97904 10.2444 3.77285 9.56112 4.7084 9.13881C5.64395 8.7165 6.6815 8.57314 7.69651 8.72592C8.71153 8.8787 9.66089 9.32114 10.4307 10.0001"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.90267 8.66667C8.74362 8.66667 10.236 7.17428 10.236 5.33333C10.236 3.49238 8.74362 2 6.90267 2C5.06172 2 3.56934 3.49238 3.56934 5.33333C3.56934 7.17428 5.06172 8.66667 6.90267 8.66667Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.9014 10.6665V14.6665"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.9014 12.6665H10.9014"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_14_255">
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

export default UserAddIcon;

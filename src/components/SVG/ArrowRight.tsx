import { cn } from '@/lib/utils';
import React from 'react';

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (className) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('stroke-white', className)}
    >
        <path
            d="M14.6668 7.99996C14.6668 4.31806 11.6821 1.33329 8.00016 1.33329C4.31826 1.33329 1.3335 4.31806 1.3335 7.99996C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99996Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M5.6665 8L9.6665 8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.3335 10L10.3335 8L8.3335 6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowRight;

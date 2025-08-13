import React from 'react';

const Dot = ({
    rows = 10,
    cols = 10,
    dotSize = 9,
    spacing = 12,
    color = '#F68ABB',
    className = '', // Default empty string for className
}) => {
    const dotsArray = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dotsArray.push(
                <ellipse
                    key={`${row}-${col}`}
                    cx={col * spacing}
                    cy={row * spacing}
                    rx={dotSize / 2}
                    ry={(dotSize * 0.85) / 2}
                    fill={color}
                    fillOpacity="0.7"
                />,
            );
        }
    }

    return (
        <svg
            width={cols * spacing}
            height={rows * spacing}
            xmlns="http://www.w3.org/2000/svg"
            className={className} // Add className here
        >
            {dotsArray}
        </svg>
    );
};

export default Dot;

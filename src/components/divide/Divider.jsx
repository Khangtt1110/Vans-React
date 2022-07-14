import React from 'react';

const Divider = ({ margin, width, padding, color }) => {
    return (
        <hr
            style={{
                width: width,
                border: `1px solid ${color || 'black'}`,
                margin: margin,
                padding: padding,
                background: color,
            }}
        />
    );
};

export default Divider;

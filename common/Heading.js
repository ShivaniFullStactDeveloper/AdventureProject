import React from 'react';

const Heading = ({ level = 2, children, className = '' }) => {
    const Tag = `h${level}`;
    return <Tag className={className}>{children}</Tag>;
};

export default Heading;

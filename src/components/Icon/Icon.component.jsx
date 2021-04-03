import React from 'react';

const Icon = ({ iconName, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`./sprite.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icon;

import React from 'react';

import './Icon.styles.css';

const Icon = ({ iconName }) => {
    return (<div className="icon-box">
        <svg className="iconSvg">
            <use xlinkHref={`./sprite.svg#icon-${iconName}`} />
        </svg>
  </div>);
}

export default Icon;
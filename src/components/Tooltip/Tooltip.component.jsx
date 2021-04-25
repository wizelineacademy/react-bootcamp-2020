/* eslint-disable no-nested-ternary */
import React, { useState, cloneElement, isValidElement } from 'react';

export default function TooltipBubble({ children, x, y }) {
  return (
    <div
      className="relative flex items-center"
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    >
      <div
        className="absolute whitespace-no-wrap bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150"
        style={{ left: '100%', opacity: 0 }}
      >
        {children}
        <div
          className="text-sm mt-2 bg-gray-600 text-gray-100 px-1 absolute rounded bg-opacity-50 shadow-xl hidden"
          style={{ left: '-6px', transform: 'rotate(45deg)' }}
        />
      </div>
    </div>
  );
}

export function Tooltip({ message, component: Component, children }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [show, setShow] = useState(false);

  function onMouseEnter(e) {
    // eslint-disable-next-line no-shadow
    const { x, y, width } = e.target.getBoundingClientRect();
    setY(y);
    setX(x + width / 2);
    setShow(true);
  }

  function onMouseLeave() {
    setShow(false);
  }

  const props = {
    onMouseEnter,
    onMouseLeave,
  };

  return (
    <>
      {Component ? (
        <Component {...props} />
      ) : isValidElement(children) ? (
        cloneElement(children, props)
      ) : (
        children(props)
      )}
      <TooltipBubble x={x} y={y} show={show}>
        {message}
      </TooltipBubble>
    </>
  );
}

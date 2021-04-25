import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, href, size = '10', props }) {
  return href ? (
    <Link size={size} href={href}>
      {children}
    </Link>
  ) : (
    <div {...props} className="button" />
  );
}

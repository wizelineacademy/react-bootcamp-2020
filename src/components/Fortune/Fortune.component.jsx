import React from 'react';

import { useFortune } from '../../utils/hooks/useFortune';
import './Fortune.styles.css';

function Fortune() {
  const { fortune } = useFortune();

  return <span className="fortune">{fortune} </span>;
}

export default Fortune;

import React from 'react';

import { useFortune } from '../../utils/hooks/useFortune';

function Fortune() {
  const { fortune } = useFortune();

  return <span className="fortune">{fortune} </span>;
}

export default Fortune;

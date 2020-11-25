import React from 'react';
import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons';

function InputSearch() {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return <>
      <Input className="search-input" style={{width:"200px"}} placeholder="search" prefix={<SearchOutlined />} />
  </>;
}

export default InputSearch;
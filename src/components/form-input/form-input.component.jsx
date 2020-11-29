/* eslint-disable */
import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherPorps }) => (
  <div className='form-input-container'>
    <label htmlFor={otherPorps.type}>{label}</label>
    <input onChange={handleChange} {...otherPorps} />
  </div>
);

export default FormInput;

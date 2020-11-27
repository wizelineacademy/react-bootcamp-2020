/* eslint-disable */
import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label }) => (
  <div className='form-input-container'>
    <label>{label}</label>
    <input onChange={handleChange} />
  </div>
);

export default FormInput;

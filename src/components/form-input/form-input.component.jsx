/* eslint-disable */
import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, type }) => (
  <div className='form-input-container'>
    <label htmlFor={type}>{label}</label>
    <input required type={type} onChange={handleChange} />
  </div>
);

export default FormInput;

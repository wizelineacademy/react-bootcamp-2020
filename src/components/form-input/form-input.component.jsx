/* eslint-disable */
import React from 'react';

import { FormInputContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherPorps }) => (
  <FormInputContainer>
    <label htmlFor={otherPorps.type}>{label}</label>
    <input onChange={handleChange} {...otherPorps} />
  </FormInputContainer>
);

export default FormInput;

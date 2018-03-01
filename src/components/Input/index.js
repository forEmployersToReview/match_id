// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';


const InputField = ({
  inputType,
  inputStyle,
  labelId,
  inputValue,
  textLabel,
  handleChange
}) => (
  <input
    id={labelId}
    type={inputType}
    className={inputStyle}
    placeholder={textLabel}
    value={inputValue}
    onChange={handleChange}
  />
);

InputField.defaultProps = {
  inputStyle: 'elem-input-style',
  inputType: 'text',
  labelId: 'input-field-label'
};

InputField.propTypes = {
  inputValue: T.string,
  textLabel: T.string,
  handleChange: T.func
};

export default InputField;

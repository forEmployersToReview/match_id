// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Button = ({ buttonStyle, children, handleClick }) => (
  <button className={buttonStyle} onClick={handleClick}>
    {children}
  </button>
);

Button.defaultProps = {
  buttonStyle: 'elem-button-style'
};

Button.propTypes = {
  children: T.node,
  buttonStyle: T.string,
  handleClick: T.func
};

export default Button;

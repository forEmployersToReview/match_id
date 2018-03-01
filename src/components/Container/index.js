// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Container = ({ containerStyle, children }) => (
  <div className={containerStyle}>{children}</div>
);

Container.defaultProps = {
  containerStyle: 'elem-container-style'
};

Container.propTypes = {
  children: T.node,
  containerStyle: T.string
};

export default Container;

// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const H2 = ({ h2Style, children }) => <h2 className={h2Style}>{children}</h2>;

H2.defaultProps = {
  h2Style: 'elem-H2-style'
};

H2.propTypes = {
  children: T.string,
  h2Style: T.string
};

export default H2;

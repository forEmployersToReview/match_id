import React from 'react';
import { PropTypes as T } from 'prop-types';

const Section = ({ sectionStyle, children }) => (
  <section className={sectionStyle}>{children}</section>
);

Section.defaultProps = {
  sectionStyle: 'elem-section-style'
};

Section.propTypes = {
  children: T.node,
  sectionStyle: T.string
};

export default Section;

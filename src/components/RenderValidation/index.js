// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const RenderValidation = ({ responseStatus }) => {
  if (!responseStatus) {
    return null;
  }
  if (responseStatus.error) {
    return (
      <span className="ds-render-validation-error">{responseStatus.error}</span>
    );
  }
  return (
    <pre className="ds-render-validation-success">
      {JSON.stringify(responseStatus)}
    </pre>
  );
};

RenderValidation.propTypes = {
  responseStatus: T.object
}

export default RenderValidation;

import * as React from 'react';
import * as PropTypes from 'prop-types';

export const Card = (props) => {
  const { className, children } = props;

  return <div className={`${className}  flex rounded auth-content`}>{children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType])
    .isRequired,
};

Card.defaultProps = {
  className: '',
};

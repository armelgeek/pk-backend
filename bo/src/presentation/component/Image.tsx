import * as React from 'react';
import * as PropTypes from 'prop-types';

export const Image = (
  { value },
  // eslint-disable-next-line jsx-a11y/alt-text
) => (
  value && <div className='w-full h-full flex items-center justify-center'><img height={40} width={40} src={value} /></div>
);

Image.propTypes = {
  value: PropTypes.string,
};

Image.defaultProps = {
  value: '',
};

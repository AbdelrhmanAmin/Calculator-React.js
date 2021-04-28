import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, opt, next } = props;
  return (
    <div>
      {parseInt(total, 10) || '0'}
      {opt || ''}
      {parseInt(next, 10) || ''}
    </div>
  );
};

Display.propTypes = {
  total: PropTypes.string,
  opt: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  opt: '',
  next: '',
};

export default Display;

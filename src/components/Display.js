import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, opt, next } = props;
  return (
    <div className="display">
      <strong className="display-strong">
        {total || '0'}
        {opt || ''}
        {next || ''}
      </strong>
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

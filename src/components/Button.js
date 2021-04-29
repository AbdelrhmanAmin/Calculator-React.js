import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, clickHandler, color, wide,
  } = props;
  return (
    <button onClick={clickHandler} type="button" style={{ background: color !== '' ? color : '#F5913E', width: wide ? '50%' : '25%' }}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;

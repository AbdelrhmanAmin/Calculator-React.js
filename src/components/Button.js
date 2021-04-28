import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, handleClick } = props;
  return (
    <button onClick={handleClick} type="button">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;

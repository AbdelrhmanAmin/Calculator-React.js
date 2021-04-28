import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';

const Display = (props) => {
  const { result } = props;
  return (
    <div>
      {result}
      <ButtonPanel />
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;

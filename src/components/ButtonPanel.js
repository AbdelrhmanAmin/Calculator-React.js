import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { handleClick } = props;
  return (
    <div div>
      <div>
        <Button handleClick={handleClick} name="AC" />
        <Button handleClick={handleClick} name="+" />
        <Button handleClick={handleClick} name="+/-" />
        <Button handleClick={handleClick} name="÷" />
      </div>
      <div>
        <Button handleClick={handleClick} name="7" />
        <Button handleClick={handleClick} name="8" />
        <Button handleClick={handleClick} name="9" />
        <Button handleClick={handleClick} name="X" />
      </div>
      <div>
        <Button handleClick={handleClick} name="4" />
        <Button handleClick={handleClick} name="5" />
        <Button handleClick={handleClick} name="6" />
        <Button handleClick={handleClick} name="-" />
      </div>
      <div>
        <Button handleClick={handleClick} name="1" />
        <Button handleClick={handleClick} name="2" />
        <Button handleClick={handleClick} name="3" />
        <Button handleClick={handleClick} name="+" />
      </div>
      <div>
        <Button handleClick={handleClick} name="0" />
        <Button handleClick={handleClick} name="." />
        <Button handleClick={handleClick} name="=" />
      </div>
    </div>
  );
};
ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;

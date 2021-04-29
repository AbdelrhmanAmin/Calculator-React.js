import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  return (
    <div className="Panel">
      <div className="Panel-row">
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="AC" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="+/-" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="%" />
        <Button wide={false} color="" clickHandler={clickHandler} name="÷" />
      </div>
      <div className="Panel-row">
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="7" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="8" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="9" />
        <Button wide={false} color="" clickHandler={clickHandler} name="x" />
      </div>
      <div className="Panel-row">
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="4" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="5" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="6" />
        <Button wide={false} color="" clickHandler={clickHandler} name="-" />
      </div>
      <div className="Panel-row">
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="1" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="2" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="3" />
        <Button wide={false} color="" clickHandler={clickHandler} name="+" />
      </div>
      <div className="Panel-row special">
        <Button wide color="E0E0E0" clickHandler={clickHandler} name="0" />
        <Button wide={false} color="E0E0E0" clickHandler={clickHandler} name="." />
        <Button wide={false} color="" clickHandler={clickHandler} name="=" />
      </div>
    </div>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

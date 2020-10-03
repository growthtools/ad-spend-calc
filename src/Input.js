import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, value }) => {

  return (
    <div>
      <div className="input-form">
        <label htmlFor="input-form" className="input-form__label">Some Input</label>
        <input type="text" className="input-form__input" id="input-form" value={value}
          onChange={(e) => onChange(e.target.value)}></input>
      </div>
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Input;


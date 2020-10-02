import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, value }) => {

  return (
    <div>
      <div className="input-wrapper">
        <label htmlFor="input-label">Some Input</label>
        <input type="text" className="input-field" id="input" value={value}
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


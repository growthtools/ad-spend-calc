import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({ value, onChange }) => {
  return (
    <div class="radio-button-wrapper">
      <label class="radio-button-label">
        Radio Button Label
          <input type="radio" name="name" value="name"></input>
        <span class="radio-button-checkmark"></span>
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;


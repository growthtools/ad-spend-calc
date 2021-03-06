import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

const RadioButton = ({ id, value, options, onChange }) => {
  return options.map(opt => (
    <RadioButtonWrapper key={id + opt}>
      <label className={classnames("container", { checked: value === opt })}>
        {opt}
        <input
          type="radio"
          name={id}
          value={opt}
          checked={value === opt}
          onChange={onChange}
        ></input>
        <span className="checkmark"></span>
      </label>
    </RadioButtonWrapper>
  ));
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;

const RadioButtonWrapper = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  user-select: none;

  &:not(:first-of-type) {
    margin-left: 2rem;
  }

  .container {
    color: #b0bec5;
    cursor: pointer;
    &.checked {
      color: #263238;
    }
  }
  // hide the default radio button
  input {
    display: none;
  }

  // create a custom radio button
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: rgba(44, 216, 134, 0.15);
    border-radius: 50%;
    border: 1px solid #2cd886;
  }

  // on mouse-over, add a green background color
  &:hover input ~ .checkmark {
    background-color: rgba(44, 216, 134, 0.35);
  }

  // when the radio button is checked, add a green background
  & input:checked ~ .checkmark {
    background-color: #2cd886;
    box-shadow: 0 2px 12px 0 rgba(44, 216, 134, 0.25);
  }

  /* inner dot/circle - hidden when not checked */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* show dot/circle when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* style the dot/circle */
  .container .checkmark:after {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
`;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = ({ onChange, value, label, type, focus }) => {
  return (
    <InputForm inputType={type}>
      <div className="input-label">{label}</div>
      <input
        type="text"
        className="input"
        id="input-form"
        value={value === 0 ? "" : value}
        onChange={e => onChange(e.target.value)}
        autoFocus={focus}
      ></input>
    </InputForm>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  focus: PropTypes.bool,
};

Input.defaultProps = {
  focus: false,
};

export default Input;

const InputForm = styled.div`
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: ${p => (p.inputType === "percentage" ? "'%'" : "'$'")};
    position: absolute;
    height: 46px;
    width: 33px;
    top: 32px;
    left: -15px;
    border-radius: 5px 0 0 5px;
    background-color: #eceff1;
    color: #607d8b;
    font-size: 16px;
    font-weight: bold;
    line-height: 44px;
    text-align: center;
  }
  .input-label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #263238;
    font-size: 16px;
  }
  .input {
    width: 100%;
    margin-left: -1rem;
    box-sizing: border-box;
    font-weight: 300;
    height: 48px;
    border: 1px solid #cfd8dc;
    border-radius: 6px;
    padding: 0;
    padding-left: 41px;
    font-size: 16px;

    &::placeholder {
      color: #b0bec5;
      font-size: 16px;
    }

    &:focus {
      border-color: #8cc63f;
      border-radius: 6px;
      box-shadow: 0 0 0 8px rgba(140, 198, 63, 0.3);
      outline: none;
    }
    &:hover {
      border-color: #8cc63f;
    }
    &:visited {
      border-color: #b0bec5;
    }
    &:valid {
      border-color: #b0bec5;
    }
  }
`;

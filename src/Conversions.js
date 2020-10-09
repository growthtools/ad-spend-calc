import React from "react";
import PropTypes from "prop-types";

import Input from "./Input.js";
import InputWrapper from "./InputWrapper";
import { asFloat } from "./utils";
import { isComplete } from "./completion";

const Conversions = ({ inputs, handleInput, completion }) => {
  return (
    <InputWrapper
      isComplete={isComplete(completion, "registrationPageConversionRate")}
    >
      <h2>Conversions</h2>

      <Input
        type="percentage"
        value={inputs.callBookingConversionRate}
        onChange={asFloat(handleInput("callBookingConversionRate"))}
        label="Booking page conversion rate"
        tooltip="Percentage of optins that register for a strategy call."
      />
      <Input
        type="percentage"
        value={inputs.registrationPageConversionRate}
        onChange={asFloat(handleInput("registrationPageConversionRate"))}
        label="Registration page conversion rate"
        tooltip="Percentage of registration page views that opt-in."
      />
    </InputWrapper>
  );
};

Conversions.propTypes = {
  inputs: PropTypes.shape({
    callBookingConversionRate: PropTypes.number.isRequired,
    registrationPageConversionRate: PropTypes.number.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
  completion: PropTypes.number.isRequired,
};

export default Conversions;

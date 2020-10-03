import React from "react";
import PropTypes from "prop-types";

import Input from "./Input.js";
import { asFloat } from "./utils";

const Conversions = ({ inputs, handleInput }) => {
  return (
    <>
      <h2>Conversions</h2>

      <Input
        type="percentage"
        value={inputs.callBookingConversionRate}
        onChange={asFloat(handleInput("callBookingConversionRate"))}
        label="Booking page conversion rate"
      />
      <Input
        type="percentage"
        value={inputs.registrationPageConversionRate}
        onChange={asFloat(handleInput("registrationPageConversionRate"))}
        label="Registration page conversion rate"
      />
    </>
  );
};

Conversions.propTypes = {
  inputs: PropTypes.shape({
    callBookingConversionRate: PropTypes.number.isRequired,
    registrationPageConversionRate: PropTypes.number.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Conversions;

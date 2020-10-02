import React from "react";
import PropTypes from "prop-types";

import Input from "./Input.js";

const Conversions = ({ inputs, handleInput }) => {
  return (
    <>
      <h2>Conversions</h2>

      <Input
        type="percentage"
        value={inputs.callBookingConversionRate}
        onChange={handleInput("callBookingConversionRate")}
        label="Booking page conversion rate"
      />
      <Input
        type="percentage"
        value={inputs.registrationPageConversionRate}
        onChange={handleInput("registrationPageConversionRate")}
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

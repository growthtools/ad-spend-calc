import React from "react";
import PropTypes from "prop-types";

import Input from "./Input.js";
import RadioButton from "./RadioButton";

const StrategyCalls = ({ inputs, handleInput }) => {
  return (
    <>
      <h2>Strategy Calls</h2>

      <div className="input-form">
        <label htmlFor="have_sales_call" className="input-form__label">
          Have a strategy call?
        </label>
        <RadioButton
          id="have_sales_call"
          value={inputs.haveSalesCall ? "Yes" : "No"}
          options={["Yes", "No"]}
          onChange={v => handleInput("haveSalesCall")(v === "Yes")}
        />
      </div>
      <Input
        type="percentage"
        value={inputs.salesCallConversionRate}
        onChange={handleInput("rsalesCallConversionRateevenueTarget")}
        label="Sales call conversion rate"
      />
      <Input
        type="percentage"
        value={inputs.cancellationRate}
        onChange={handleInput("cancellationRate")}
        label="Estimated no show/cancellation rate"
      />
    </>
  );
};

StrategyCalls.propTypes = {
  inputs: PropTypes.shape({
    salesCallConversionRate: PropTypes.number.isRequired,
    cancellationRate: PropTypes.number.isRequired,
    haveSalesCall: PropTypes.bool.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default StrategyCalls;

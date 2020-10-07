import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Input from "./Input.js";
import RadioButton from "./RadioButton";
import InputWrapper from "./InputWrapper";
import { asFloat } from "./utils";
import { isComplete } from "./completion";

const StrategyCalls = ({ inputs, handleInput, completion }) => {
  return (
    <InputWrapper isComplete={isComplete(completion, "cancellationRate")}>
      <h2>Strategy Calls</h2>

      <RadioContainer>
        <label htmlFor="have_sales_call">Have a strategy call?</label>
        <RadioButton
          id="have_sales_call"
          value={inputs.haveSalesCall ? "Yes" : "No"}
          options={["Yes", "No"]}
          onChange={e =>
            handleInput("haveSalesCall")(e.target.value === "Yes")
          }
        />
      </RadioContainer>
      <Input
        type="percentage"
        value={inputs.salesCallConversionRate}
        onChange={asFloat(handleInput("salesCallConversionRate"))}
        label="Sales call conversion rate"
      />
      <Input
        type="percentage"
        value={inputs.cancellationRate}
        onChange={asFloat(handleInput("cancellationRate"))}
        label="Estimated no show/cancellation rate"
      />
    </InputWrapper>
  );
};

StrategyCalls.propTypes = {
  inputs: PropTypes.shape({
    salesCallConversionRate: PropTypes.number.isRequired,
    cancellationRate: PropTypes.number.isRequired,
    haveSalesCall: PropTypes.bool.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
  completion: PropTypes.number.isRequired,
};

export default StrategyCalls;

const RadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  label {
    flex-basis: 100%;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #263238;
    font-size: 16px;
  }
`;

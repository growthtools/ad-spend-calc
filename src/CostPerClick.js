import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import InputWrapper from "./InputWrapper";
import { asFloat } from "./utils";
import { isComplete } from "./completion";

const CostPerClick = ({ inputs, handleInput, completion }) => {
  return (
    <InputWrapper isComplete={isComplete(completion, "ctr")}>
      <h2>Cost per click</h2>

      <Input
        type="number"
        value={inputs.cpc}
        onChange={asFloat(handleInput("cpc"))}
        label="Estimated CPC"
      />
      <Input
        type="percentage"
        value={inputs.ctr}
        onChange={asFloat(handleInput("ctr"))}
        label="Estimated ad CTR"
      />
    </InputWrapper>
  );
};

CostPerClick.propTypes = {
  inputs: PropTypes.shape({
    cpc: PropTypes.number.isRequired,
    ctr: PropTypes.number.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
  completion: PropTypes.number.isRequired,
};

export default CostPerClick;

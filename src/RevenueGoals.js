import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import InputWrapper from "./InputWrapper";
import { asFloat } from "./utils";
import { isComplete } from "./completion";

const RevenueGoals = ({ inputs, handleInput, completion }) => {
  return (
    <InputWrapper isComplete={isComplete(completion, "salePrice")}>
      <h2>
        Revenue goals {isComplete(completion, "salePrice") ? "t" : "f"} -{" "}
        {completion}
      </h2>
      <Input
        type="number"
        value={inputs.revenueTarget}
        onChange={asFloat(handleInput("revenueTarget"))}
        label="Revenue target"
      />
      <Input
        type="number"
        value={inputs.salePrice}
        onChange={asFloat(handleInput("salePrice"))}
        label="Average cost per sale"
      />
    </InputWrapper>
  );
};

RevenueGoals.propTypes = {
  inputs: PropTypes.shape({
    revenueTarget: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
  }),
  handleInput: PropTypes.func.isRequired,
  completion: PropTypes.number.isRequired,
};

export default RevenueGoals;

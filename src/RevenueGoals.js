import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import { asFloat } from "./utils";

const RevenueGoals = ({ inputs, handleInput }) => {
  return (
    <>
      <h2>Revenue Goals</h2>
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
    </>
  );
};

RevenueGoals.propTypes = {
  inputs: PropTypes.shape({
    revenueTarget: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
  }),
  handleInput: PropTypes.func.isRequired,
};

export default RevenueGoals;

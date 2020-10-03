import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import { asFloat } from "./utils";

const CostPerClick = ({ inputs, handleInput }) => {
  return (
    <>
      <h2>Cost per click</h2>

      <Input
        type="percentage"
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
    </>
  );
};

CostPerClick.propTypes = {
  inputs: PropTypes.shape({
    cpc: PropTypes.number.isRequired,
    ctr: PropTypes.number.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default CostPerClick;

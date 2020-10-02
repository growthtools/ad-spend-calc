import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";

const CostPerClick = ({ inputs, handleInput }) => {
  return (
    <>
      <h2>Cost per click</h2>

      <Input
        type="percentage"
        value={inputs.cpc}
        onChange={handleInput("cpc")}
        label="Estimated CPC"
      />
      <Input
        type="percentage"
        value={inputs.ctr}
        onChange={handleInput("ctr")}
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

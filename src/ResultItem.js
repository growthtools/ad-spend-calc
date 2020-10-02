import React from "react";
import PropTypes from "prop-types";

const ResultItem = ({ completed, label, value, description }) => {
  return (
    <div>
      <span className="completed">{completed}</span>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
      {description && <p>{description}</p>}
    </div>
  );
};

ResultItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ResultItem;

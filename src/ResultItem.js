import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CheckGreen from "./check-green.svg";
import CheckGrey from "./check-grey.svg";

const ResultItem = ({ completed, label, value, description }) => {
  return (
    <Item>
      <span className="completed">
        <img
          alt="Checkmark"
          aria-hidden="true"
          src={completed ? CheckGreen : CheckGrey}
        />
      </span>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
      {description && <p>{description}</p>}
    </Item>
  );
};

ResultItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ResultItem;

const Item = styled.div`
  min-height: 73px;
  position: relative;

  .completed {
    padding-right: .5rem;
  }
  .label {
    vertical-align: top;
  }
  .value {
    margin-right: 1rem;
    text-align: right;
    float: right;
  }
  p {
    color: #78909C;
    margin: 0;
    font-size: 12px;
    font-style: italic;
    line-height: 16px;
  }
  &::after {
    content: " ";
    position: absolute;
    top: 3.5rem;
    left: -24px;
    height: 1px;
    width: 112%;
    background-color: #0e143e;
    filter: contrast(80%);
  }
`;
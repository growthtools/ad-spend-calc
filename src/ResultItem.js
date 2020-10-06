import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CheckGreen from "./check-green.svg";
import CheckGrey from "./check-grey.svg";

const ResultItem = ({ completed, label, value, description }) => {
  return (
    <Item completed={completed}>
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
  position: relative;
  padding: 1rem 0 1.5rem;

  .completed {
    padding-right: .5rem;
  }
  .label {
    vertical-align: top;
    font-weight: 500;
  }
  .value {
    color: ${p => (p.completed ? "#2cd886" : "#455A64")};
    margin-right: 1rem;
    text-align: right;
    float: right;
  }
  p {
    color: #78909C;
    margin: 0 0 .5rem 2rem;
    font-size: 12px;
    font-style: italic;
    line-height: 16px;
    max-width: 181px;
  }
    &:not(:first-of-type)::before {
    content: " ";
    position: absolute;
    top: -.5rem;
    left: -24px;
    height: 1px;
    width: 112%;
    background-color: #0e143e;
    filter: contrast(80%);
  }
  &:nth-of-type(1n+8)  {
    .value, .label {
      font-weight: 900;
    }
  }
  &:nth-of-type(0n+8)  {
    .value::before {
      content: "$";
      padding-right: 3px;
    }
  }
`;
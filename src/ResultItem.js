import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ResultItem = ({ label, value, description, show }) => {
  if (!show) {
    return null;
  }

  return (
    <Item>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
      {description && <p>{description}</p>}
    </Item>
  );
};

ResultItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
  show: PropTypes.bool,
};

ResultItem.defaultProps = {
  show: true,
};

export default ResultItem;

const Item = styled.div`
  position: relative;
  padding: 1rem 2rem;
  border-bottom: 1px solid #273152;

  .label {
    vertical-align: top;
    font-weight: 500;
  }
  .value {
    color: #2cd886;
    margin-right: 1rem;
    text-align: right;
    float: right;
  }
  p {
    color: #78909c;
    margin: 0.5rem 0;
    font-size: 12px;
    font-style: italic;
    line-height: 16px;
    max-width: 181px;
  }
  &:nth-of-type(1n + 8) {
    .value,
    .label {
      font-weight: 900;
    }
  }
  &:nth-of-type(0n + 6),
  &:nth-of-type(0n + 7),
  &:nth-of-type(0n + 8) {
    .value::before {
      content: "$";
      padding-right: 3px;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import Averages from "./Averages";

const IndustryAverages = () => {
  return (
    <IndustryAveragesContent>
      <h2>Industry averages</h2>
      <div className="col">
        <h3>Strategy call funnel stats</h3>
        <Averages type="high" />
      </div>
      <div className="col">
        <h3>No strategy call funnel stats</h3>
        <Averages type="low" />
      </div>
    </IndustryAveragesContent>
  );
};

export default IndustryAverages;

const IndustryAveragesContent = styled.div`
  margin: -2.5rem auto 2.5rem;
  padding: 2rem;
  max-width: 888px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.08);

  display: grid;
  grid: 78px 1fr 1fr / 1fr 1fr;

  h2 {
    grid-column: 1/4;
    grid-row: 1/2;
    color: #161f5d;
    font-family: Times, serif;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.75rem;
    margin: 0 auto;
    padding: 0.5rem 0;
  }
  .col {
    max-width: 412px;
    h3 {
      margin: 0 0 1rem 0;
      color: #263238;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
  .col:first-of-type {
    padding: 0 1rem;
    grid-column: 1/2;
    grid-row: 2/4;
  }

  .col:last-of-type {
    grid-column: 2/3;
    grid-row: 2/4;
    margin-left: 2rem;
    padding: 0 0;
  }
`;

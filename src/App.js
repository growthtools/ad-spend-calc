import React, { useState } from "react";
import "./App.css";
import { useImmer } from "use-immer";
import styled from "styled-components";

import Header from "./Header";

import RevenueGoals from "./RevenueGoals";
import StrategyCalls from "./StrategyCalls";
import Conversions from "./Conversions";
import CostPerClick from "./CostPerClick";
import Results from "./Results";
import AlertIcon from "./alert.svg";
import IndustryAverages from "./IndustryAverages";
import { newCompletionFor } from "./completion";

function App() {
  const [inputs, setInputs] = useImmer(industryStandards);
  const [completion, setCompletion] = useState(0);

  const handleInput = field => v => {
    setInputs(draft => {
      draft[field] = v;
    });
    setCompletion(newCompletionFor(completion, field));
  };

  return (
    <div className="App">
      <Header />
      <MainContent>
        <div className="col">
          <RevenueGoals {...{ inputs, handleInput, completion }} />
          <StrategyCalls {...{ inputs, handleInput, completion }} />
          <Conversions {...{ inputs, handleInput, completion }} />
          <CostPerClick {...{ inputs, handleInput, completion }} />
        </div>
        <div className="col">
          <Results {...inputs} completion={completion} />
          <Disclaimer>
            <img alt="Alert" aria-hidden="true" src={AlertIcon} />
            <p>
              <strong>All results above are estimates.</strong> These
              calculations are for informational purposes and do not guarantee
              results.
            </p>
          </Disclaimer>
        </div>
      </MainContent>
      <IndustryAverages />
    </div>
  );
}

export default App;

const industryStandards = {
  revenueTarget: 50000,
  salePrice: 10000,
  haveSalesCall: true,
  salesCallConversionRate: 20,
  cancellationRate: 30,
  callBookingConversionRate: 5,
  registrationPageConversionRate: 20,
  cpc: 1,
  ctr: 1,
};

const MainContent = styled.div`
  margin: -5.5rem auto 5rem;
  padding: 6rem 3.5rem 2.5rem;
  max-width: 888px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.08);

  display: grid;
  grid-template-columns: 1fr 1fr;

  .col:first-of-type {
    h2 {
      color: #161f5d;
      font-family: Times, serif;
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: 1px;
      line-height: 1.75rem;
      margin: 1.5rem 0;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  .col:last-of-type {
    margin-top: -2.7rem;
  }
`;

const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;

  p {
    margin-top: 0.25rem;
    padding: 0 2rem;
    max-width: 290px;
    color: #263238;
    font-size: 12px;
    text-align: center;
    strong {
      font-weight: 500;
    }
  }
`;

import React from "react";
import "./App.css";
import { useImmer } from "use-immer";
import styled from "styled-components";

import Header from "./Header";

import RevenueGoals from "./RevenueGoals";
import StrategyCalls from "./StrategyCalls";
import Conversions from "./Conversions";
import CostPerClick from "./CostPerClick";
import Results from "./Results";

function App() {
  const [inputs, setInputs] = useImmer(industryStandards);

  const handleInput = field => v => {
    setInputs(draft => {
      draft[field] = v;
    });
  };

  return (
    <div className="App">
      <Header />
      <MainContent>
        <div className="col">
          <RevenueGoals {...{ inputs, handleInput }} />
          <StrategyCalls {...{ inputs, handleInput }} />
          <Conversions {...{ inputs, handleInput }} />
          <CostPerClick {...{ inputs, handleInput }} />
        </div>
        <div className="col">
          <Results {...inputs} />
        </div>
      </MainContent>
    </div>
  );
}

export default App;

const industryStandards = {
  revenueTarget: 50000,
  salePrice: 10000,
  haveSalesCall: true,
  salesCallConversionRate: 0.2,
  cancellationRate: 0.3,
  callBookingConversionRate: 0.05,
  registrationPageConversionRate: 0.2,
  cpc: 1,
  ctr: 0.01,
};

const MainContent = styled.div`
  margin: -5.5rem auto 5rem;
  padding: 2.5rem;
  max-width: 888px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.08);

  display: grid;
  grid-template-columns: 1fr 1fr;

  h2 {
    color: #161f5d;
    font-family: Times, serif;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 2.375rem;
    margin: 1.5rem 0;

    &:first-child {
      margin-top: 0;
    }
  }
`;

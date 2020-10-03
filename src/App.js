import React from "react";
import "./App.css";
import { useImmer } from "use-immer";

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
      <div className="main-content">
        <div className="col">
          <RevenueGoals {...{ inputs, handleInput }} />
          <StrategyCalls {...{ inputs, handleInput }} />
          <Conversions {...{ inputs, handleInput }} />
          <CostPerClick {...{ inputs, handleInput }} />
        </div>
        <div className="col">
          <Results {...inputs} />
        </div>
      </div>
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

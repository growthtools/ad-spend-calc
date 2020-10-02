import React from "react";
import "./App.css";
import { useImmer } from "use-immer";
import Input from "./Input.js";

function App() {
  const [inputs, setInputs] = useImmer(industryStandards);

  const handleInput = field => e => {
    setInputs(draft => {
      draft[field] = e.target.value;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          type="number"
          value={inputs.revenueTarget}
          onChange={handleInput("revenueTarget")}
        />
        <code>{JSON.stringify(inputs)}</code>
      </header>
    </div>
  );
}

export default App;

const industryStandards = {
  revenueTarget: 50000,
  salePrice: 10000,
  salesCallConversionRate: 0.2,
  cancellationRate: 0.3,
  callBookingConversionRate: 0.05,
  registrationPageConversionRate: 0.2,
  cpc: 1,
  ctr: 0.01,
};

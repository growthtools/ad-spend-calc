import React from "react";
import "./App.css";
import { useImmer } from "use-immer";

interface changeEvent {
  target: valued
}

interface valued {
  value: string
}

interface



function App() {
  const [inputs, setInputs] = useImmer(industryStandards);

  const handleInput = (field: any, e: changeEvent) => {
    setInputs((draft: ) => {
      draft[field] = e.target.value;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Calculate your Ad Spend</p>
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

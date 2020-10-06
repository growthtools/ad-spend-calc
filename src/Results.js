import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ResultItem from "./ResultItem";
import { isComplete } from "./completion";

const Results = ({
  revenueTarget,
  salePrice,
  haveSalesCall,
  salesCallConversionRate,
  cancellationRate,
  callBookingConversionRate,
  registrationPageConversionRate,
  cpc,
  ctr,
  completion,
}) => {
  const salesReq = salesRequired(revenueTarget, salePrice);
  const preNoShowSalesCallCount = preNoShowSalesCallsNeeded(
    salesReq,
    salesCallConversionRate
  );
  const totalsSalesCallCount = salesCallesNeeded(
    preNoShowSalesCallCount,
    cancellationRate
  );
  const registrantCount = registrantsNeeded(
    totalsSalesCallCount,
    callBookingConversionRate
  );
  const landingViews = landingPageViewsNeeded(
    registrantCount,
    registrationPageConversionRate
  );
  const reachCount = reachRequired(landingViews, ctr);
  const totalAdSpend = adSpendRequired(landingViews, cpc);
  const eachCallCost = costPerCall(totalAdSpend, totalsSalesCallCount);
  const actualRevenue = totalRevenue(salePrice, salesReq);
  const roas = returnOnAdSpend(actualRevenue, totalAdSpend);

  const results = [
    {
      completed: isComplete(completion, "salePrice"),
      label: "Sales needed",
      value: Math.ceil(salesReq).toLocaleString("en"),
    },
    {
      completed: isComplete(completion, "cancellationRate"),
      label: "Sales calls needed",
      value: Math.ceil(totalsSalesCallCount).toLocaleString("en"),
    },
    {
      completed: isComplete(completion, "callBookingConversionRate"),
      label: "Registrants needed",
      value: Math.ceil(registrantCount).toLocaleString("en"),
    },
    {
      completed: isComplete(completion, "registrationPageConversionRate"),
      label: "Landing page view needed",
      value: Math.ceil(landingViews).toLocaleString("en"),
    },
    {
      completed: isComplete(completion, "ctr"),
      label: "Reach required",
      value: Math.ceil(reachCount).toLocaleString("en"),
      description:
        "Make sure your audience size you choose is beg enough for this.",
    },
    {
      completed: isComplete(completion, "cpc"),
      label: "Ad spend required",
      value: asCurrency(totalAdSpend),
    },
    {
      completed: isComplete(completion, "cpc"),
      label: "Cost per strategy call",
      value: asCurrency(eachCallCost),
    },
    {
      completed: isComplete(completion, "salePrice"),
      label: "Total revenue",
      value: asCurrency(actualRevenue),
    },
    {
      completed: isComplete(completion, "cpc"),
      label: "Return on ad spend (ROAS)",
      value: asCurrency(roas),
    },
  ];

  const resultItems = results.map(r => <ResultItem key={r.label} {...r} />);
  return (
    <ResultCard>
      <ResultHeader>Results</ResultHeader>
      {resultItems}
    </ResultCard>
  );
};

Results.propTypes = {
  revenueTarget: PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
  haveSalesCall: PropTypes.bool.isRequired,
  salesCallConversionRate: PropTypes.number.isRequired,
  cancellationRate: PropTypes.number.isRequired,
  callBookingConversionRate: PropTypes.number.isRequired,
  registrationPageConversionRate: PropTypes.number.isRequired,
  cpc: PropTypes.number.isRequired,
  ctr: PropTypes.number.isRequired,

  completion: PropTypes.number.isRequired,
};

export default Results;

const salesRequired = (revGoal, salePrice) => Math.ceil(revGoal / salePrice);
const preNoShowSalesCallsNeeded = (salesRequired, salesCallConversionRate) =>
  Math.ceil(salesRequired / salesCallConversionRate);
const salesCallesNeeded = (preCount, cancellationRate) =>
  Math.ceil(preCount / (1 - cancellationRate));
const registrantsNeeded = (salesCallCount, callBookingConversionRate) =>
  Math.ceil(salesCallCount / callBookingConversionRate);
const landingPageViewsNeeded = (
  registrantCount,
  registrationPageConversionRate
) => Math.ceil(registrantCount / registrationPageConversionRate);
const reachRequired = (landingPageViews, ctr) =>
  Math.ceil(landingPageViews / ctr);
const adSpendRequired = (landingPageViews, cpc) => landingPageViews * cpc;
const costPerCall = (adSpend, callsNeeded) => adSpend / callsNeeded;
const totalRevenue = (salePrice, sales) => salePrice * sales;
const returnOnAdSpend = (rev, adSpend) => rev / adSpend;

const ResultCard = styled.div`
  background-color: #0e143e;
  border-radius: 12px;
  color: white;
  padding: 2.5rem 1.5rem 0 1.5rem;
`;

const ResultHeader = styled.h2`
  color: #2cd886;
  margin: 0 0 2.5rem;
  font-family: Times, serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;
`;

const asCurrency = num =>
  num.toLocaleString("en", { minimumFractionDigits: 2 });

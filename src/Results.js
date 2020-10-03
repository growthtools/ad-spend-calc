import React from "react";
import PropTypes from "prop-types";

import ResultItem from "./ResultItem";

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
      completed: true,
      label: "Sales needed",
      value: Math.ceil(salesReq).toString(),
    },
    {
      completed: true,
      label: "Sales calls needed",
      value: Math.ceil(totalsSalesCallCount).toString(),
    },
    {
      completed: true,
      label: "Registrants needed",
      value: Math.ceil(registrantCount).toString(),
    },
    {
      completed: true,
      label: "Landing page view needed",
      value: Math.ceil(landingViews).toString(),
    },
    {
      completed: true,
      label: "Reach required",
      value: Math.ceil(reachCount).toString(),
      description:
        "Make sure your audience size you choose is beg enough for this.",
    },
    {
      completed: true,
      label: "Ad spend required",
      value: totalAdSpend.toFixed(2).toString(),
    },
    {
      completed: true,
      label: "Cost per strategy call",
      value: eachCallCost.toFixed(2).toString(),
    },
    {
      completed: true,
      label: "Total revenue",
      value: actualRevenue.toFixed(2).toString(),
    },
    {
      completed: true,
      label: "Return on ad spend (ROAS)",
      value: roas.toFixed(2).toString(),
    },
  ];

  const resultItems = results.map(r => <ResultItem key={r.label} {...r} />);
  return (
    <>
      <h2>Results</h2>
      {resultItems}
    </>
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
};

export default Results;

const salesRequired = (revGoal, salePrice) => revGoal / salePrice;
const preNoShowSalesCallsNeeded = (salesRequired, salesCallConversionRate) =>
  salesRequired / salesCallConversionRate;
const salesCallesNeeded = (preCount, cancellationRate) =>
  preCount / (1 - cancellationRate);
const registrantsNeeded = (salesCallCount, callBookingConversionRate) =>
  salesCallCount / callBookingConversionRate;
const landingPageViewsNeeded = (
  registrantCount,
  registrationPageConversionRate
) => registrantCount / registrationPageConversionRate;
const reachRequired = (landingPageViews, ctr) => landingPageViews / ctr;
const adSpendRequired = (landingPageViews, cpc) => landingPageViews * cpc;
const costPerCall = (adSpend, callsNeeded) => adSpend / callsNeeded;
const totalRevenue = (salePrice, sales) => salePrice * sales;
const returnOnAdSpend = (totalRevenue, adSpend) => totalRevenue / adSpend;

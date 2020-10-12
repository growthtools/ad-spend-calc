import React from "react";
import styled from "styled-components";

const Averages = ({ type }) => {
  const highAvgs = [
    { "Top of funnel CTR": "1%" },
    { "Middle/bottom of funnel CTR": "2 - 4%" },
    { "Webinar optin page conversion rate": "20%" },
    { "Live webinar attendee rate": "10%" },
    { "Live webinar conversion rate to booked call": "5%" },
    { "Evergreen webinar attendee rate": "60%" },
    { "Evergreen webinar conversion rate to booked call": "5%" },
    { "Email open rate": "2%" }
  ]

  const lowAvgs = [
    { "Top of funnel CTR": "1%" },
    { "Middle/bottom of funnel CTR": "2 - 4%" },
    { "Lead magnet optin page conversion rate": "20%" },
    { "Webinar attendee rate": "5 - 20%" },
    { "Sales page add-to-cart rate": "16 - 20%" },
    { "Sales page conversion rate": "5%" },
    { "Email open rate": "2%" }
  ]

  const highAvgRows = (avgsArray) => {
    let row = [];
    avgsArray.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        row.push(<div key={key}>{key}<span>{obj[key]}</span></div>)
      })
    })
    return (
      <div>{row}</div>
    )
  }

  let rows = "";
  if (type === "low") {
    rows = highAvgRows(lowAvgs);
  }
  if (type === "high") {
    rows = highAvgRows(highAvgs);
  }

  return (
    <List>
      {rows}
    </List>
  )

}

export default Averages;

const List = styled.div`
  color: #263238;
  > div {
    margin-left: -1rem;
    padding: 0 1rem;
    font-size: 14px;
  }
  div {
    height: 40px;
    line-height: 40px;
  }
  div:nth-child(2n+2) {
    height: 32px;
    line-height: 32px;
    background-color: #F9FAFA;
  }
  
  span {
    float: right;
    font-size: 14px;
    font-weight: bold;
    text-align: right;
  }
`;
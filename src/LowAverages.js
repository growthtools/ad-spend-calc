import React from "react";
import AveragesList from "./AveragesList";

const LowAverages = () => {
  const lowAvgs = [
    { "Top of funnel CTR": "1%" },
    { "Middle/bottom of funnel CTR": "2 - 4%" },
    { "Lead magnet optin page conversion rate": "20%" },
    { "Webinar attendee rate": "5 - 20%" },
    { "Sales page add-to-cart rate": "16 - 20%" },
    { "Sales page conversion rate": "5%" },
    { "Email open rate": "2%" }
  ]

  let rows = [];
  lowAvgs.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      rows.push(<div key={key}>{key}<span>{obj[key]}</span></div>)
    })
  })

  return (
    <AveragesList>
      {rows}
    </AveragesList>
  )

}

export default LowAverages;
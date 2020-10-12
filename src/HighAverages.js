import React from "react";
import AveragesList from "./AveragesList";

const HighAverages = () => {
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

  let rows = [];
  highAvgs.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      rows.push(<div key={key}>{key}<span>{obj[key]}</span></div>)
    })
  })


  return (
    <AveragesList>
      <div>{rows}</div>
    </AveragesList>
  )

}

export default HighAverages;
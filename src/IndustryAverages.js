import React from "react";
import styled from "styled-components";

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

const IndustryAverages = () => {
  return (
    <IndustryAveragesContent>
      <h2>Industry averages</h2>
      <div className="col">
        <h3>High ticket webinar coaching stats</h3>
        <table>
          <tr>
            <td>Top of funnel CTR</td><td>1</td>
          </tr>
          <tr>
            <td>Middle/bottom of funnel CTR</td><td>2 - 4</td>
          </tr>
          <tr>
            <td>Webinar optin page conversion rate</td><td>20</td>
          </tr>
          <tr>
            <td>Live webinar attendee rate</td><td>10</td>
          </tr>
          <tr>
            <td>Live webinar conversion rate to booked call</td><td>5</td>
          </tr>
          <tr>
            <td>Evergreen webinar attendee rate</td><td>60</td>
          </tr>
          <tr>
            <td>Evergreen webinar conversion rate to booked call</td><td>5</td>
          </tr>
          <tr>
            <td>Email open rate</td><td>2</td>
          </tr>
        </table>
      </div>
      <div className="col">
        <h3>Low ticket webinar coaching stats</h3>
        <table>
          <tr>
            <td>Top of funnel CTR</td><td>1</td>
          </tr>
          <tr>
            <td>Middle/bottom of funnel CTR</td><td>2 - 4</td>
          </tr>
          <tr>
            <td>Lead magnet optin page conversion rate</td><td>20</td>
          </tr>
          <tr>
            <td>Webinar attendee rate</td><td>10</td>
          </tr>
          <tr>
            <td>Sales page add-to-cart rate</td><td>5</td>
          </tr>
          <tr>
            <td>Sales page conversion rate</td><td>60</td>
          </tr>
          <tr>
            <td>Webinar attendee rate</td><td>5</td>
          </tr>
        </table>

      </div>
    </IndustryAveragesContent>
  )
}

export default IndustryAverages;

const IndustryAveragesContent = styled.div`
  margin: -2.5rem auto 2.5rem;
  padding: 2.5rem 2rem 2.5rem;
  max-width: 888px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.08);

  display: grid;
  grid: 72px 1fr 1fr / 1fr 1fr;

  h2 {
    grid-column: 1/4;
    grid-row: 1/2;
    color: #161f5d;
    font-family: Times, serif;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.75rem;
    margin: 0 auto;

  }
  .col { 
    padding: 0 1rem;
    h3 {
      margin: 0 0 1rem 0;
      color: #263238;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    table {
      width: 100%;
      color: #263238;
      font-size: 14px;
     

      tr {
        height: 2rem;
      }
      td:last-of-type {
        text-align: right;
        font-weight: 700;
      }
    }
  }
  .col:first-of-type {
    grid-column: 1/2;
    grid-row: 2/4;
  }

  .col:last-of-type {
    grid-column: 2/3;
    grid-row: 2/4;
    margin-left: 2rem;
  }
`;

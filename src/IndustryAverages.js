import React from "react";
import styled from "styled-components";

const IndustryAverages = () => {
  return (
    <IndustryAveragesContent>
      <h2>Industry averages</h2>
      <div className="col">
        <h3>High ticket webinar coaching stats</h3>
        <div className="list">
          <div>Top of funnel CTR<span>1%</span></div>
          <div>Middle/bottom of funnel CTR<span>2 - 4%</span></div>
          <div>Webinar optin page conversion rate<span>20%</span></div>
          <div>Live webinar attendee rate<span>10%</span></div>
          <div>Live webinar conversion rate to booked call<span>5%</span></div>
          <div>Evergreen webinar attendee rate<span>60%</span></div>
          <div>Evergreen webinar conversion rate to booked call<span>5%</span></div>
          <div>Email open rate<span>2%</span></div>
        </div>
      </div>
      <div className="col">
        <h3>Low ticket webinar coaching stats</h3>
        <div className="list">
          <div>Top of funnel CTR<span>1%</span></div>
          <div>Middle/bottom of funnel CTR<span>2 - 4%</span></div>
          <div>Lead magnet optin page conversion rate<span>20%</span></div>
          <div>Webinar attendee rate<span>10%</span></div>
          <div>Sales page add-to-cart rate<span>5%</span></div>
          <div>Sales page conversion rate<span>60%</span></div>
          <div>Webinar attendee rate<span>5%</span></div>
        </div>
      </div>
    </IndustryAveragesContent >
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
  grid: 78px 1fr 1fr / 1fr 1fr;

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
    padding: .5rem 0;

  }
  .col {
    max-width: 412px;
    h3 {
      margin: 0 0 1rem 0;
      color: #263238;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .list {
      color: #263238;
      > div {
        margin-left: -1rem;
        padding: 0 1rem;
        font-size: 14px;
        &:nth-child(odd) {
          height: 40px;
          line-height: 40px;
        }
        &:nth-child(even) {
          line-height: 32px;
          height: 32px;
          background-color: #F9FAFA;
        }
      }
      span {
        float: right;
        font-size: 14px;
        font-weight: bold;
        text-align: right;
      }
    }
  }
  .col:first-of-type {
    padding: 0 1rem;
    grid-column: 1/2;
    grid-row: 2/4;
  }

  .col:last-of-type {
    grid-column: 2/3;
    grid-row: 2/4;
    margin-left: 2rem;
    padding: 0 0;
  }
`;

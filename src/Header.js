import React from "react";
import styled from "styled-components";

import logo from "./logo.svg";

const Header = () => {
  return (
    <AppHeader>
      <img src={logo} alt="Growth Tools logo" />
      <h1>
        Ad Spend <span className="calc">Calculator</span>
      </h1>
    </AppHeader>
  );
};

export default Header;

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  background-color: #161f5d;
  background-image: url(/star.svg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 80%;

  h1 {
    margin-top: 11.75rem;

    color: #2cd886;
    font-size: 3.75rem;
    font-weight: 900;
    letter-spacing: 0.625rem;
    line-height: 3.5rem;
    text-align: center;
    text-transform: uppercase;

    .calc {
      display: block;
      margin-top: 0.5rem;

      font-family: "Noto Serif Mayanmar Bold", serif;
      color: white;
      font-size: 5.5rem;
      font-weight: bold;
      letter-spacing: 0.3125rem;
      line-height: 5.5rem;
      text-align: center;

      border-bottom: 0.5rem solid #2cd886;
    }
  }
`;

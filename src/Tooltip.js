import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tooltip = ({ children }) => {
  return (
    <Wrapper>
      <Header>Help</Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
};

export default Tooltip;

const Wrapper = styled.div`
  position: absolute;
  top: 5.3rem;
  left: -1rem;
  width: calc(100% - 2rem);
  z-index: 1;

  padding: 1rem;

  background: white;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 1.25rem 0 rgba(0, 0, 0, 0.1);
`;

const Header = styled.h4`
  text-transform: uppercase;
  color: #263238;
  font-size: 0.625rem;
  font-weight: bold;
  letter-spacing: 0.125rem;
  line-height: 1rem;
  margin: 0;
`;

const Content = styled.p`
  color: #263238;
  font-size: 0.75rem;
  letter-spacing: 0;
  line-height: 1rem;
  margin: 0.5rem 0 0;
`;

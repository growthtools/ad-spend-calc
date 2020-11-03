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
  top: 6rem;
  left: -1rem;
  max-width: 17.5rem;
  width: calc(100% - 2rem);
  z-index: 1;

  padding: 1rem;

  background: white;
  border-radius: 0.375rem;
  filter: drop-shadow(0 0.125rem 1.25rem rgba(0, 0, 0, 0.1));

  &:before {
    content: " ";
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);

    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid white;
    border-left: 0.5rem solid transparent;
  }
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

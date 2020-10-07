import styled from "styled-components";

const InputWrapper = styled.div`
  border-left: 2px solid ${p => (p.isComplete ? "#17DA5E" : "#ECEFF1")};
  padding-left: 2rem;

  position: relative;

  &:not(:last-child) {
    padding-bottom: 4rem;
  }

  &:last-child {
    border-color: white;
  }

  &:before {
    content: "";

    position: absolute;
    left: -13.5px;
    top: 0;

    border-radius: 50%;
    background-color: ${p => (p.isComplete ? "#17DA5E" : "#ECEFF1")};
    border: 4px solid white;
    height: 1rem;
    width: 1rem;
  }
`;

export default InputWrapper;

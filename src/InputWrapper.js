import styled from "styled-components";

const InputWrapper = styled.div`
  padding-left: 1rem;

  position: relative;

  &:not(:last-child) {
    padding-bottom: 4rem;
  }

  &:last-child {
    border-color: white;
  }
`;

export default InputWrapper;

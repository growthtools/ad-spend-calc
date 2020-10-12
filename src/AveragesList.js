import styled from "styled-components";

const AveragesList = styled.div`
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

export default AveragesList;
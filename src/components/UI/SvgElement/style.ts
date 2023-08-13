import styled from "styled-components";
import { keyframes } from "styled-components";

export const changeFill = keyframes`
  0% { opacity:0}
  10% {opacity:1}
  90% {opacity:1}
  100% {opacity:0}
`;

export const Container = styled.div`
  position: absolute;
  /* background-color: red; */
  width: 100%;
  z-index: -1;

  svg {
    margin-left: 14rem;
  }
`;

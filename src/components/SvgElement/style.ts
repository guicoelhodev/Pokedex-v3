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

  img {
    /* height: 100vh; */
    transform: translateX(5rem);
  }
`;

export const SvgComponent = styled.svg`
  height: 100vh !important;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transition: fill 10s linear;
  animation: ${changeFill} 10s infinite;
  z-index: 0;
`;

import styled from "styled-components";
import CurveSvg from "../../assets/wave.svg";

export const ContainerHome = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: lightgreen;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: transparent;
  background-image: url(${CurveSvg});
`;

export const Curve = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  background-color: blue;

  svg {
    width: 100%;
    height: 100%;
    fill: #81d3e5;
  }
`;

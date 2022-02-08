import styled, { keyframes } from "styled-components";
import { changeFill } from "../SvgElement/style";

interface PropsStyle {
  color: string;
  socialType: string;
}

export const showDetails = keyframes`
  
  20% {
    transform:translateX(100px);
  }

`;

export const NavBar = styled.nav`
  min-width: 80px;
  width: 180px;
  height: 100vh;
  background-color: inherit;
  z-index: 1;
  position: absolute;
  right: 0;

  ul {
    display: flex;
    margin-left: auto;
    width: 80px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 20px 0 0;

    li {
      position: relative;
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    ul {
      padding-right: 5px;
    }
  }
  @media (max-width: 500px) {
    height: 85%;
    ul {
      justify-content: flex-end;
      height: 100%;
      gap: 10px;
    }
  }
`;

export const LinkSocial = styled.a<PropsStyle>`
  height: 60px;
  left: 0;
  padding: 5px;
  display: block;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row;
  border-radius: 8px;
  gap: 10px;
  border: 3px solid transparent;
  outline: 3px solid transparent;

  span {
    display: none;
    color: ${(props) => props.color};
    filter: brightness(0.6);
    font-size: 1.05rem;
  }
  svg {
    width: 45px;
    height: 45px;
    fill: ${(props) => props.color};
    filter: brightness(0.7);
    animation: ${changeFill} 10s infinite;
  }

  :hover,
  :focus {
    background-color: aliceblue;
    aspect-ratio: none;
    width: 140px;
    height: 60px;
    transform: translateX(-70px);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    border-color: ${(props) => props.color};

    span {
      display: block;
    }

    svg {
      filter: brightness(0.5);
    }
  }
`;

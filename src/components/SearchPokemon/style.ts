// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Alert } from "@mui/material";
import styled from "styled-components";
import { keyframes } from "styled-components";

const loading = keyframes`
from { transform: rotate(0)}
to { transform: rotate(360deg)}
`;

export const Container = styled.main`
  padding: 50px;
  width: clamp(280px, 90%, 600px);
  height: 10px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    gap: 20px;
  }
  aside {
    z-index: 3;
    width: clamp(280px, 90%, 330px);

    text-align: center;
  }
`;

export const SearchBtn = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  transform: translateY(2px);

  display: flex;
  align-items: center;

  background-color: transparent;
  border: 1px solid red;
  border-radius: 50%;

  padding: 5px;
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), border-radius 0.2s linear;

  svg {
    width: 40px;
    height: 40px;
    fill: #c94747;
    transition: all 0.4s;
  }
  span {
    display: none;
    font-size: 1rem;
  }

  :hover,
  :focus {
    width: 130px;
    background-color: #c94747;
    color: white;
    border-radius: 8px;
    outline: 1px solid transparent;

    svg {
      fill: #fff;
      transform: rotate(180deg);
    }
    span {
      display: block;
    }
  }
  :active {
    filter: brightness(1.3);
  }
`;

export const LoadingPokemon = styled(SearchBtn)`
  gap: 10px;
  flex-direction: row-reverse;

  svg {
    animation: ${loading} 2s infinite linear;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Autocomplete, Alert } from "@mui/material";

const loading = keyframes`
from { transform: rotate(0)}
to { transform: rotate(360deg)}
`;

export const AutoCompleteStyle = styled(Autocomplete)`
  * {
    z-index: 1;
  }
`;
export const Container = styled.article`
  padding: 50px;
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  flex-direction: column;

  article {
    display: flex;
    gap: 20px;
  }
  aside {
    display: flex;
    gap: 40px;
    z-index: 0;
  }
`;
export const NextPokemon = styled.button`
  padding: 8px;
  border-radius: 6px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid transparent;
  background-color: inherit;
  font-size: 1rem;
  gap: 20px;

  svg {
    width: 40px;
    height: 40px;
    fill: ${(props) => props.color};
  }
  p {
    text-align: right;
    color: black;
    font-weight: 500;
    font-style: bold;
    font-size: 1.3rem;
  }

  :hover {
    svg {
      filter: brightness(1.1);
    }
  }
  :hover,
  :focus {
    p {
      color: ${(props) => props.color};
    }
  }
  :focus {
    outline: 1px solid ${(props) => props.color};
  }
`;
export const AlertStyle = styled(Alert)`
  z-index: 0 !important;
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
    filter: brightness(1);
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

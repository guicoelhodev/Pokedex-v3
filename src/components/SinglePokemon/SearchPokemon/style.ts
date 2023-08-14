import styled from "styled-components";
import { Autocomplete, Alert } from "@mui/material";

export const AutoCompleteStyle = styled(Autocomplete)`
  * {
    z-index: 999;
  }
`;
export const Container = styled.article`
  padding: 1rem;
  padding-top: 5rem;
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
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

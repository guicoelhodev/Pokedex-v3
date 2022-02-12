import styled from "styled-components";

export const AllInfoPokemon = styled.article`
  width: 100%;
  height: auto;
  border: 1px solid tomato;
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h3 {
      color: ${(props) => props.color};
      font-size: 1.4rem;
      font-family: "Montserrat", sans-serif;
      padding-top: 20px;
    }
    p {
      color: #333;
      font-family: "Work Sans", sans-serif;
      line-height: 1.2rem;
      span {
        background-color: tomato;
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 1rem;
        color: white;
        border: 1px solid tomato;
        :hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;

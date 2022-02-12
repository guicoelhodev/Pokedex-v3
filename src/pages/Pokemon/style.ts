import styled from "styled-components";

export const ContainerPokemon = styled.div`
  margin: 0 auto;
  margin-top: 300px;
  width: 100%;
  max-width: 1280px;
  height: auto;
  background-color: #fff;
  position: relative;

  svg {
    animation: none;
    path:nth-child(2) {
      filter: brightness(0.9);
    }
  }
  main {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    * {
      z-index: 2;
    }

    section {
      width: 100%;
    }
  }
`;

export const PokemonInfo = styled.div`
  width: 100%;
  max-width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  article {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid tomato;
    gap: 20px;
    padding-top: 40px;
    width: 100%;

    h2 {
      font-size: 3.5rem;
      color: white;
      letter-spacing: 0.3rem;
      text-shadow: -1px -1px 0px #333, -1px 1px 0px #333, 1px -1px 0px #333, 1px 0px 0px #333;
      span {
        color: #333;
        font-size: 3rem;
        text-shadow: -1px -1px 0px transparent, -1px 1px 0px #fff, 1px -1px 0px #fff,
          1px 0px 0px #fff;
      }
    }
    ul {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      transform: translateX(100px);
    }
  }

  aside {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;

    img {
      max-width: 400px;
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
    }
  }
`;

export const TypeCard = styled.li`
  background-color: ${(props) => props.color};
  padding: 5px 8px;
  color: white;
  font-size: 1.2rem;
  font-style: bold;
  border: 1px solid white;
  border-radius: 4px;
`;

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

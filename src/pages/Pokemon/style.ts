import styled from "styled-components";

export const ContainerPokemon = styled.div`
  margin: 0 auto;
  margin-top: 300px;
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  height: 100%;
  background-color: #fff;
  position: relative;

  svg {
    animation: none;
    path:nth-child(2) {
      filter: brightness(1.2);
    }
  }
  main {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    border: 1px solid red;

    * {
      z-index: 2;
    }

    section {
      width: 100%;
      max-width: 600px;
    }
  }
`;

export const PokemonInfo = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border: 1px solid red;

  article {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 80px;

    h2 {
      text-align: left;
      font-size: 3.5rem;
      color: white;
      letter-spacing: 0.3rem;
      text-shadow: -1px -1px 0px transparent, -1px 1px 0px #000, 1px -1px 0px transparent,
        1px 0px 0px transparent;
    }
    ul {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
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
      width: 400px;
      aspect-ratio: 1/1;
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

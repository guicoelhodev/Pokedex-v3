import styled from "styled-components";

export const ContainerPokemon = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  justify-content: space-between;

  svg {
    animation: none;
  }

  * {
    z-index: 1;
  }
`;

export const PokemonC = styled.main`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
export const GeneralInfo = styled.section`
  width: clamp(300px, 100%, 800px);
  height: 100%;
  max-height: 100vh;

  display: flex;
  flex-direction: column;

  article {
    display: flex;
    flex-direction: column;
    gap: 20px;

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
      padding-right: 140px;

      li {
        display: block;
      }
    }
  }
  aside {
    width: 100%;
    height: 100%;
    max-height: 700px;
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

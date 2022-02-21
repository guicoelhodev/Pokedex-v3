import styled from "styled-components";

export const ContainerPokemon = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 80px;

  svg {
    animation: none;
    transition: all 0.8s linear;
    path:nth-child(2) {
      filter: brightness(0.85);
    }
  }

  main {
    width: 100%;
    max-width: 700px;
  }
  article {
    * {
      z-index: 1;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    main {
      max-width: none;
    }
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
  width: clamp(300px, 100%, 600px);
  height: 100%;
  max-height: 100vh;

  display: flex;
  gap: 20px;
  flex-direction: column;

  article {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      padding-top: 60px;
      padding-left: 40px;
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
    padding-right: 60px;
    z-index: 1;

    img {
      max-width: 360px;
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
    }
  }
  @media (max-width: 900px) {
    max-width: none;
    width: 100%;
    order: -1;

    aside {
      padding: 0;
      justify-content: center;
      padding-bottom: 30px;

      img {
        padding: 20px;
        border-radius: 50%;
        width: 240px;
        background-color: ${(props) => props.color};
        filter: brightness(0.85);
      }
    }
  }
  article {
    ul {
      padding: 0;
      justify-content: center;
      gap: 20px;
    }
    h2 {
      padding: 0;
      text-align: center;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;

    aside {
      img {
        background-color: transparent;
        padding: 20px 0 0 0;
        border-radius: 0;
      }
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

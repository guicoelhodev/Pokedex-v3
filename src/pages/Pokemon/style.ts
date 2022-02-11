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

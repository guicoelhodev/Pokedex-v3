import styled, { keyframes } from "styled-components";

export const ContainerHome = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;

  display: flex;

  main {
    display: flex;
    justify-content: space-between;
    width: 100%;

    aside {
      display: grid;
      place-items: center;
      height: 100%;
      max-height: 720px;
      padding-right: 80px;
    }
  }

  * {
    z-index: 1;
  }
`;

const showPokemon = keyframes`
  
  10%{ 
    opacity:1; 
    transform:translateX(0);
  }

  90% { 
    opacity: 1;
  }
  95% { 
    opacity:0;
    transform:translateX(0);
    }
  96%{
    transform:translateX(100px);
  }
`;
export const pokemonImg = styled.img`
  transform: translateX(100px);
  opacity: 0;
  aspect-ratio: 1/1;
  display: block;
  max-width: 380px;
  width: 100%;
  object-fit: contain;
  animation: ${showPokemon} 10s infinite;
  transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s;

  :hover {
    scale: 1.12;
  }
`;

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

  section {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 30px;
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
  width: 380px;
  object-fit: contain;
  animation: ${showPokemon} 10s infinite;
  transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s;

  :hover {
    scale: 1.12;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.color};
  transition: color 2s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const Purpose = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: center;

  div {
    display: flex;
    align-self: center;
    align-items: center;
    gap: 20px;
  }
  * {
    color: ${(props) => props.color};
    transition: color 2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  span {
    border: 2px solid;
    width: 60px;
  }

  h2 {
    font-size: 1.8rem;
  }

  aside {
    padding-top: 30px;
    max-width: 600px;

    p {
      font-size: 1.4rem;
      text-align: center;
      font-weight: 400;

      span {
        font-weight: 600;
        color: #c94040;
        border: none;
      }
    }

    ul {
      padding-top: 30px;
      align-self: flex-start;
      width: 100%;

      li {
        list-style: square;
        font-size: 1.2rem;
        padding: 5px 0;
      }
    }
  }
`;

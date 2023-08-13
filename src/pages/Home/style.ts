import styled, { keyframes } from "styled-components";

interface IStyledProps {
  bgColor: string;
}
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
  100%{
    transform:translateX(100px);
  }
`;

export const View = styled.div<IStyledProps>`
  position: relative;
  width: 100%;

  :after {
    content: "";
    background-color: ${(p) => p.bgColor};
    position: absolute;
    top: 0;
    width: calc((100% - 80rem) / 2 - 8rem);
    right: 0;
    height: 718px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: min(100%, 80rem);
  height: 100%;
  min-height: 100vh;

  margin: 0 auto;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;

  padding: 1rem;
`;

export const ToolSection = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PurposeContent = styled.section`
  max-width: 40rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    padding-top: 4rem;
  }

  color: ${(props) => props.color};
  transition: color 2s cubic-bezier(0.23, 1, 0.32, 1);

  .purpose-title {
    position: relative;
    display: flex;
    align-self: center;
    align-items: center;
    gap: 20px;

    h2 {
      font-size: 2rem;
    }
    ::before {
      content: "";
      top: 5px;
      height: 5px;

      background-color: ${(props) => props.color};
      width: 3rem;
    }

    ::after {
      content: "";
      top: 5px;
      height: 5px;

      background-color: ${(props) => props.color};
      width: 3rem;
    }
  }

  article > p {
    font-size: 1.4rem;
  }
  ul {
    font-size: 1.4rem;
    padding-left: 1.2rem;

    li {
      list-style: square;
    }
  }
`;

export const pokemonImg = styled.img`
  transform: translateX(100px);
  margin-right: 2rem;
  opacity: 0;
  aspect-ratio: 1/1;
  display: block;
  width: 380px;
  object-fit: contain;
  animation: ${showPokemon} 10s infinite;
  transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s;

  @media (max-width: 950px) {
    width: 300px;
  }
  @media (max-width: 500px) {
    padding-top: 20px;
    width: 200px;

    :hover {
      scale: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.color};
  transition: color 2s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const ContainerShowTools = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;

  button {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 50%;

    svg {
      width: 100%;
      height: 100%;
      transition: all 1s linear;
      fill: ${(props) => props.color};
      filter: brightness(0.6);
    }

    :focus {
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;

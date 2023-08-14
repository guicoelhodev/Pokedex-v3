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

  @media (max-width: 900px) {
    flex-direction: column-reverse;

    img {
      width: 15rem;
    }
  }
`;

export const ToolSection = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    align-items: center;
    gap: 1rem;

    h1 {
      padding-top: 0;
    }
  }
`;

export const PurposeContent = styled.section`
  max-width: 40rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
  opacity: 0;
  aspect-ratio: 1/1;
  width: 30rem;
  object-fit: contain;
  animation: ${showPokemon} 10s infinite;
  transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s;
`;

export const Title = styled.h1`
  padding-top: 3rem;
  font-size: 3rem;
  color: ${(props) => props.color};
  transition: color 2s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const ContainerTools = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    height: 100px;

    span {
      opacity: 0;
      transition: all 0.9s;
      color: #333;
    }

    :hover,
    :focus {
      span {
        opacity: 1;
      }
    }

    img {
      border-radius: 8px;
      width: 4rem;
    }

    span {
      transform: translateY(5px);
    }
  }

  @media (max-width: 480px) {
    li {
      justify-content: flex-end;
      img {
        width: 3rem;
      }
    }
  }
`;

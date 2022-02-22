import styled, { keyframes } from "styled-components";

export const ContainerHome = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  display: flex;

  main {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-evenly;

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
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 30px 0 20px 30px;
  }

  @media (max-width: 950px) {
    main {
      flex-direction: column-reverse;

      aside,
      section {
        padding: 0;
      }
      section {
        height: 100%;
        padding-left: 20px;

        div {
          padding: 0 60px;
        }
      }
      aside {
        height: auto;
        width: auto;
      }
    }

    @media (max-width: 500px) {
      section {
        padding-left: 0 !important;
        span,
        p {
          font-size: 1rem;
        }
      }
      h1 {
        padding-top: 10px;
        text-align: center;
        font-size: 2.6rem;
        text-shadow: -1px -1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff, 1px 0px 0px #fff;
      }
    }
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

export const Purpose = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  padding: 0 !important;
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

      a {
        font-weight: 600;
        color: #c94040;
        border: none;

        :hover {
          text-decoration: underline;
        }
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
  @media (max-width: 700px) {
    width: 94%;
  }
  @media (max-width: 500px) {
    ul {
      padding-left: 40px;
    }
  }
  @media (max-width: 375px) {
    aside {
      p,
      a {
        font-size: 1rem;
      }
      p {
        padding-top: 20px;
      }

      ul {
        li {
          font-size: 0.9rem;
        }
      }
    }
  }
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

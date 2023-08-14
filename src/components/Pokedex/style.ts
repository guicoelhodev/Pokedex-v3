import styled from "styled-components";

export const Container = styled.div`
  width: min(100%, 80rem);
  height: 100%;
  min-height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  padding: 40px;
  article {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    h2 {
      font-size: 3rem;
      color: #d71515;
      font-family: "Montserrat", Arial;
    }
    img {
      height: 80px;
    }
  }

  footer {
    margin: 0 auto;
  }

  :after {
    content: "";
    background-color: ${(p) => p.color};
    position: absolute;
    top: 0;
    width: calc((100% - 80rem) / 2 - 8rem);
    right: 0;
    height: 718px;
  }
`;

export const PokemonsPage = styled.aside`
  align-self: flex-end;
  width: auto;
  display: flex;
  align-items: center;
  gap: 20px;

  z-index: 2;
  p {
    font-size: 1.2rem;
  }
  select {
    background-color: transparent;
    border: 1px solid #389ec6;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 4px;

    :focus {
      color: white;
      background-color: #389ec6;
      outline: 1px solid white;
    }
    * {
      background-color: white;
      color: black;
    }
  }
  option {
    appearance: unset;
  }
`;

export const PokemonList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  scrollbar-width: thin;
`;

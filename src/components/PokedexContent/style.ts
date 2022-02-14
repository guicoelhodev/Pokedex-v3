import styled from "styled-components";

export const Container = styled.div`
  width: clamp(300px, 100%, 800px);
  min-height: 600px;
  height: 100%;
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  padding: 40px 20px;
  article {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    h2 {
      font-size: 3rem;
      color: #d71515;
      font-family: "Montserrat";
    }
    img {
      height: 80px;
    }
  }

  footer {
    margin: 0 auto;
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
`;

export const PokemonList = styled.ul`
  width: 100%;
  max-width: 800px;
  height: 400px;
  overflow: scroll;
  border: 1px solid orange;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const PokemonItem = styled.li`
  height: 200px;
`;

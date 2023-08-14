import styled from "styled-components";

interface IStyledProps {
  bgColor: string;
}

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
  width: min(100%, 80rem);
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  padding-top: 0;
  position: relative;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 860px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.color};
  font-size: 2rem;
  font-weight: 700;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  padding: 10px 0;
`;

export const PokemonImage = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  img {
    width: 20rem;
    aspect-ratio: 1/1;
    object-fit: contain;
  }

  div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 3rem;
      letter-spacing: 0.2rem;
      color: #fff;
    }
  }

  aside {
    width: 21rem;
    aspect-ratio: 1/1;
  }

  @media (max-width: 860px) {
    div {
      padding: 1rem;
      border-radius: 50%;
      margin: 0 auto;
      img {
        width: 10rem;
      }

      h2 {
        color: ${(p) => p.color};
      }
    }
  }

  @media (max-width: 500px) {
    div h2 {
      color: #fff;
    }
  }
`;
export const Text = styled.p`
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: 700;
  filter: brightness(0.6);
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
`;
export const StatsList = styled.ul`
  width: 100%;
  height: auto;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 200px);
  padding: 30px 0 20px 0;

  @media (max-width: 900px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: 1rem;
    grid-template-columns: 1fr;

    li {
      width: 300px;
      justify-self: center;
    }
  }
`;

export const ItemStat = styled.li`
  width: 100%;
  -webkit-box-shadow: 2px 4px 5px -1px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.28);
  article {
    display: flex;
    justify-content: space-between;

    padding: 8px 10px;

    svg {
      height: 25px;
      width: 25px;
      fill: ${(props) => props.color};
      filter: brightness(0.8);
    }

    p {
      font-size: 1.2rem;
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      color: ${(props) => props.color};
      filter: brightness(0.7);
      font-weight: 500;
    }
  }

  section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 6px 0 20px 0;

    span {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 500px) {
    section {
      padding: 0 4px 20px 4px;
      span {
        font-size: 0.85rem;
      }
    }
  }
`;

export const Progress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  height: 15px;
  width: 100px;
  background-color: whitesmoke;
  border-radius: 8px;
  border: 1px solid ${(props) => props.color};

  ::-webkit-progress-bar {
    // chrome config
    border-radius: 8px;
    background-color: whitesmoke;
    border: 0.5px solid ${(props) => props.color};
  }
  ::-webkit-progress-value {
    background: ${(props) => props.color};
    border-radius: 8px;
  }

  ::-moz-progress-bar {
    background: ${(props) => props.color};
    border-radius: 8px;
  }
`;

export const EffectsContainer = styled.section`
  grid-column: span 2;

  aside {
    display: flex;
    flex-direction: column;
    gap: 30px;

    h3 {
      color: ${(props) => props.color};
      font-size: 1.5rem;
      font-weight: 700;
      font-family: "Montserrat", Arial, Helvetica, sans-serif;
      padding: 20px 0 0 0;
    }

    div {
      span {
        padding: 2px 6px;
        height: 30px;
        background-color: tomato;
        color: white;
        font-weight: 400;
        font-size: 1rem;
        border-radius: 4px;
      }

      p {
        color: #333;
        font-size: 1rem;
        line-height: 1.3rem;
        font-family: "MOntserrat", Arial, Helvetica, sans-serif;
      }
    }
  }
`;

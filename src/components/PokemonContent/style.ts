import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 300px;

  span {
    font-size: 1.2rem;
    color: #444;
  }
`;
export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 30px 30px 30px;

  * {
    z-index: 0;
  }
  @media (max-width: 500px) {
    padding: 40px 0 0 0;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.color};
  font-size: 2rem;
  font-weight: 700;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  padding: 10px 0;

  @media (max-width: 500px) {
    text-align: center;
  }
`;
export const Span = styled.span`
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: 700;
  filter: brightness(0.6);
  font-family: "Montserrat", Arial, Helvetica, sans-serif;

  @media (max-width: 500px) {
    padding: 0 0 10px 10px;
  }
`;
export const StatsList = styled.ul`
  width: 100%;
  height: auto;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 200px);
  padding: 30px 0 20px 0;

  @media (max-width: 500px) {
    gap: 20px;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 180px);
  }
  @media (max-width: 375px) {
    gap: 10px;
    grid-template-columns: repeat(2, 160px);
  }
  @media (max-width: 350px) {
    gap: 5px;
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

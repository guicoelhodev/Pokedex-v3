import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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

  padding: 10px;
  border: 1px solid red;

  * {
    z-index: 0;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.color};
  font-size: 2rem;
  font-weight: 700;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
`;
export const StatsList = styled.ul`
  width: 100%;
  height: auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 200px);
  padding: 20px 0 50px;
`;

export const ItemStat = styled.li`
  width: 100%;

  article {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;

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

import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;

  display: grid;
  place-items: center;
`;
export const ItemContainer = styled.li`
  width: 340px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.color ? props.color : "whitesmoke")};
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.color};

  header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 8px;
    gap: 10px;

    h4 {
      font-size: clamp(1.8rem, 100%, 2rem);
      white-space: nowrap;
      color: white;
      letter-spacing: 0.12rem;
      display: block;
    }
    span {
      color: black;
      font-weight: 700;
      font-size: 1.8rem;
    }
  }
  main {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    background-color: transparent !important;
    border: none;
  }
`;

export const Image = styled.img`
  width: 140px;
  height: 120px;
  object-fit: contain;
`;
export const Information = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;

  article {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: center;
      p {
        text-align: center;
      }
      span {
        color: white;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }
  }
`;

export const type = styled.li`
  background-color: ${(props) => props.color};
  color: white;
  padding: 5px 8px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;

  border: 1px solid #fff;
  border-radius: 4px;
`;

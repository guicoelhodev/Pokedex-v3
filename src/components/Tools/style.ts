import styled from "styled-components";

export const ContainerTools = styled.ul`
  width: 100%;
  display: flex;
  padding: 0 60px;
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
    }
  }

  @media (max-width: 500px) {
    justify-content: space-evenly;
    padding: 0;
    span {
      max-width: 80px;
      padding-top: 5px;
      font-size: 0.8rem;
      text-align: center;
    }

    li {
      justify-content: center;
    }
  }
`;

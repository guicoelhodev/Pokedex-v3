import styled from "styled-components";

interface PropsStyle {
  stateDropdown: boolean;
}
export const ContainerMenu = styled.ul<PropsStyle>`
  position: absolute;
  top: 0;
  right: 0;
  width: ${(props) => (props.stateDropdown === false ? "80px" : "200px")} !important;
  height: 100vh;
  background-color: ${(props) => (props.stateDropdown === false ? "transparent" : props.color)};
  transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  li:nth-child(4) {
    a {
      span {
        font-size: 0.9rem;
      }
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 34px 10px 34px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const SocialLink = styled.a`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  span {
    color: white;
    font-size: 1rem;
  }
  svg {
    fill: white;
  }
`;

export const OpenDropDown = styled.button`
  margin-top: 20px;
  margin-right: 10px;
  background-color: white;
  width: 40px;
  height: 40px;

  border: 1px solid white;
  border-radius: 50%;
  outline: 1px solid transparent;

  display: grid;
  place-items: center;
  align-self: flex-end;
  svg {
    width: 20px;
    height: 20px;
  }

  :hover {
    filter: brightness(0.9);
  }
`;

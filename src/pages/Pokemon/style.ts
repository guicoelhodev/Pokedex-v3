import styled from "styled-components";

interface IStyledProps {
  bgColor: string;
}

export const View = styled.div<IStyledProps>`
  position: relative;
  width: 100%;

  .svg {
    position: absolute;
    z-index: -1;
  }
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

export const PokemonImage = styled.section`
  display: grid;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 25rem;
    aspect-ratio: 1/1;
    object-fit: contain;
    transform: translateY(-8rem);
  }
`;

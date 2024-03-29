import * as S from "./style";
interface Type {
  color: string;
  bg: string;
}

const SvgWave = (props: Type) => (
  <S.Container>
    <svg
      width="1186"
      height="719"
      viewBox="0 0 1186 719"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1185 1V718C1012.67 711.147 660.163 631.138 628.774 365.925C597.385 100.712 197.179 12.1362 1 1H1185Z"
        fill={props.color}
        stroke={props.color}
      />
    </svg>
  </S.Container>
);

export default SvgWave;

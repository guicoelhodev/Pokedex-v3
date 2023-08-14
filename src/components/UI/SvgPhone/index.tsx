import * as S from "./style";
interface Type {
  color: string;
  bg: string;
}

export const SvgWaveMobile = (props: Type) => (
  <S.SvgComponent width={540} height={960} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill={props.bg} d="M0 0h540v960H0z" />
    <path
      d="m0 219 22.5-3.3c22.5-3.4 67.5-10 112.5-9s90 9.6 135 38.1 90 76.9 135 102.4 90 28.1 112.5 29.5L540 378V0H0Z"
      fill={props.color}
    />
  </S.SvgComponent>
);

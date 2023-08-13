import * as S from "./style";
import SvgBg from "../../static/brown_bg.svg";
interface Type {
  color: string;
  bg: string;
}

const SvgWave = (props: Type) => (
  <S.Container>
    <img src={SvgBg} />
  </S.Container>
  // <S.SvgComponent width={1280} height={1000} xmlns="http://www.w3.org/2000/svg">
  //   <path fill={props.bg} d="M0 0h1280v720H0z" />
  //   <path
  //     d="m873 720-29.8-30c-29.9-30-89.5-90-112.2-150-22.7-60-8.3-120 10-180s40.7-120 4.8-180C710 120 616 60 569 30L522 0h758v720Z"
  //     fill={props.color}
  //   />
  // </S.SvgComponent>
);

export default SvgWave;

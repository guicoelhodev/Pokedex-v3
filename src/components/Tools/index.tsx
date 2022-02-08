import SvgFilter from "../../Filters/tools_svg";
import * as S from "./style";

function ToolsComponent() {
  const arr = ["vite js", "styled components", "typescript", "figma", "react JS"];
  return (
    <S.ContainerTools>
      {arr.map((item, index) => (
        <li key={item}>
          <SvgFilter type={index} />
          <span>{item}</span>
        </li>
      ))}
    </S.ContainerTools>
  );
}

export default ToolsComponent;

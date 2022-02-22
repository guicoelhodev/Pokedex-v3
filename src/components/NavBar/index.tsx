import * as S from "./style";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import useWindowDimensions from "../../hook/useWindowDimensions";
import DropDownMenu from "../DropdownMenu";

interface Props {
  color: string;
}
function NavBar({ color }: Props) {
  const { width } = useWindowDimensions();
  return (
    <S.NavBar>
      {width > 700 ? (
        <ul>
          <li>
            <S.LinkSocial
              href="https://www.linkedin.com/in/guilherme-santos-coelho-1b7036210/"
              target="_blank"
              rel="noreferrer"
              color={color}
              socialType="linkedIn">
              <AiFillLinkedin />
              <span>linkedin</span>
            </S.LinkSocial>
          </li>
          <li>
            <S.LinkSocial
              href="https://github.com/GuiCoelho-S/Pokedex-v3"
              target="_blank"
              rel="noreferrer"
              color={color}
              socialType="github">
              <AiFillGithub />
              <span>github</span>
            </S.LinkSocial>
          </li>
          <li>
            <S.LinkSocial
              href="https://www.instagram.com/g__coelho/"
              target="_blank"
              rel="noreferrer"
              color={color}
              socialType="instagram">
              <AiFillInstagram />
              <span>instagram</span>
            </S.LinkSocial>
          </li>
        </ul>
      ) : (
        <DropDownMenu color={color} />
      )}
    </S.NavBar>
  );
}

export default NavBar;

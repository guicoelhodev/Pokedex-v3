import React from "react";
import * as S from "./style";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

interface Props {
  color: string;
}
function NavBar({ color }: Props) {
  return (
    <S.NavBar>
      <ul>
        <li>
          <S.LinkSocial href="/" color={color} socialType={"linkedIn"}>
            <AiFillLinkedin />
            <span>linkedin</span>
          </S.LinkSocial>
        </li>
        <li>
          <S.LinkSocial href="/" color={color} socialType="github">
            <AiFillGithub />
            <span>github</span>
          </S.LinkSocial>
        </li>
        <li>
          <S.LinkSocial href="/" color={color} socialType="instagram">
            <AiFillInstagram />
            <span>instagram</span>
          </S.LinkSocial>
        </li>
      </ul>
    </S.NavBar>
  );
}

export default NavBar;

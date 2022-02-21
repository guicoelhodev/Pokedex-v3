import * as S from "./style";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

interface Props {
  color: string;
}

function DropDownMenu({ color }: Props) {
  const [dropdownState, setDropdownState] = useState(false);

  return (
    <S.ContainerMenu stateDropdown={dropdownState} color={color}>
      {dropdownState ? (
        <>
          <S.OpenDropDown onClick={() => setDropdownState(false)}>
            <AiOutlineClose />
          </S.OpenDropDown>
          <li>
            <S.SocialLink
              href="https://www.linkedin.com/in/guilherme-santos-coelho-1b7036210/"
              target="_blank"
              rel="noreferrer"
              color={color}>
              <AiFillLinkedin />
              <span>linkedin</span>
            </S.SocialLink>
          </li>
          <li>
            <S.SocialLink
              href="https://github.com/GuiCoelho-S/Pokedex-v3"
              target="_blank"
              rel="noreferrer"
              color={color}>
              <AiFillGithub />
              <span>github</span>
            </S.SocialLink>
          </li>
          <li>
            <S.SocialLink
              href="https://www.instagram.com/g__coelho/"
              target="_blank"
              rel="noreferrer"
              color={color}>
              <AiFillInstagram />
              <span>instagram</span>
            </S.SocialLink>
          </li>
        </>
      ) : (
        <S.OpenDropDown onClick={() => setDropdownState(true)}>
          <GiHamburgerMenu />
        </S.OpenDropDown>
      )}
    </S.ContainerMenu>
  );
}

export default DropDownMenu;

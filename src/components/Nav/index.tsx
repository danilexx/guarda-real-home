/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Container,
  Links,
  Link,
  FilledLogo,
  Wrapper,
  MenuWrap,
  BurguerMenu,
  MenuLink,
  MenuContainer,
  PrimaryLink,
  RegularLink,
  Horacio
} from "./styles";
// import { slide as Menu } from "react-burger-menu";
import { useMedia, useToggle, useLockBodyScroll } from "react-use";

const Nav: React.FC<{ menuAction?: any }> = ({ menuAction }) => {
  // const isSmall = useMedia("(max-width: 800px)");
  const [isMenuOpened, toggleMenu] = useToggle(false);
  useLockBodyScroll(isMenuOpened);
  // const handleStateChange = React.useCallback(state => {
  //   toggleMenu(state.isOpen);
  // }, []);

  return (
    <>
      <Wrapper className="nav">
        <Container>
          <MenuLink href="/">
            <FilledLogo />
          </MenuLink>
          <BurguerMenu
            isMenuOpened={isMenuOpened}
            onClick={() => {
              console.log("ola");
              toggleMenu();
            }}
          />
        </Container>
      </Wrapper>
      <MenuContainer isOpen={isMenuOpened}>
        <PrimaryLink href="/register">Fazer Cadastro</PrimaryLink>
        <RegularLink href="/login">Entrar</RegularLink>
        <RegularLink href="/blog">Blog</RegularLink>
        <RegularLink href="/support">Fale Conosco</RegularLink>
        <Horacio isOpen={isMenuOpened} />
      </MenuContainer>
    </>
  );
};

export default Nav;

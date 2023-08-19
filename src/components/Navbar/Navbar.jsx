import React from "react";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  MenuStyled,
  LogoContainerStyled,
  IconoContainerStyled,
  NavListPrincipal,
  MenuContainer,
} from "./NavbarStyles";
import { useContext } from "react";
import { Contexto } from "./BurgerMenuContext";
import { Link } from "react-router-dom";
import { LinkNav } from "./NavbarStyles";

const Navbar = () => {
  const { state, dispatch } = useContext(Contexto);

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <LogoContainerStyled>
          <a href="/#">
            <img src="./logo.png" alt="logo" />
          </a>
        </LogoContainerStyled>
        <MenuStyled>
          <MenuContainer
            icon
            onClick={() => dispatch({ type: "openBurgerMenu" })}
          >
            <img src="./menu.png"></img>
          </MenuContainer>
          <NavListPrincipal className={state.isBurgerMenuOpen ? "open" : ""}>
            <Link to="/">
              <LinkNav> Home</LinkNav>
            </Link>
            <Link to="/sobrenosotros">
              <LinkNav> Somos</LinkNav>
            </Link>
            <Link to="/productosroutes">
              <LinkNav> Productos</LinkNav>
            </Link>
            <Link to="/contactoroutes">
              <LinkNav> Contacto</LinkNav>
            </Link>
          </NavListPrincipal>
        </MenuStyled>
        <IconoContainerStyled>
          <img src="./usuario.png" alt="icono" />
          <img src="./carritodecompras.png" alt="icono" />
        </IconoContainerStyled>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Navbar;

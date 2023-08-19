import React from "react";
import { HeroContainerStyled, HeroTextContainerStyled } from "./HeroStyles";
const Hero = () => {
  return (
    <HeroContainerStyled id="hero">
      <HeroTextContainerStyled>
        <h1>Creación Textil</h1>
        <h2>Virgen del Valle, C.A.</h2>
        <p>
          Nos dedicamos a la producción y comercialización de prendas de vestir;
          mayormente en el rubro deportivo para damas y caballeros.
        </p>
      </HeroTextContainerStyled>
    </HeroContainerStyled>
  );
};

export default Hero;

import React from "react";
import {
  BeneficiosContainerStyled,
  BeneficiosCardStyled,
  CardStyled,
} from "./BeneficiosStyles";

const Beneficios = () => {
  return (
    <BeneficiosContainerStyled id="beneficios">
      <h2>Beneficios</h2>
      <p>
        Al obtener nuestros servicios, cuentas con mucha eficacia al momento de
        recibir tu pedido.
      </p>
      <BeneficiosCardStyled>
        <CardStyled>
          <img src="./1.png" alt="imagen" />
          <p>
            Trabajo responsable y rápido, con buena capacidad de finalizacion en
            cada detalle.
          </p>
        </CardStyled>
        <CardStyled>
          <img src="./2.png" alt="imagen" />
          <p>
            Empresa apasionada por la costura, muy profesional, detallista y con
            buena reputacion.
          </p>
        </CardStyled>
        <CardStyled>
          <img src="./3.png" alt="imagen" />
          <p>Excelente atención y buena presencia.</p>
        </CardStyled>
      </BeneficiosCardStyled>
    </BeneficiosContainerStyled>
  );
};

export default Beneficios;

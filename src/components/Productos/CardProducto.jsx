import React from "react";
import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
  ImgCard,
  TextCard,
  ButtonCard,
  TextPrice,
} from "./CardsProductosStyles";

const CardProducto = ({ tarjetaImg, nombre, precio }) => {
  return (
    <ProductosCard>
      <ImgCard>
        <img src={tarjetaImg} alt={nombre} />
      </ImgCard>
      <TextCard>
        <h2>{nombre}</h2>
        <ContainerPrice>
          <TextPrice>Precio</TextPrice>
          <CardPrice>${precio}</CardPrice>
        </ContainerPrice>
        <ButtonCard>Agregar</ButtonCard>
      </TextCard>
    </ProductosCard>
  );
};

export default CardProducto;

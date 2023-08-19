import React from "react";
import {
  ButtonMinus,
  ButtonMore,
  ContainerButtonStyled,
  ProductosContainer,
  ProductosWrapper,
} from "./CardsProductosStyles";
import { products } from "../../data/Products";
import CardProducto from "./CardProducto";

const CardsProductos = () => {
  return (
    <ProductosWrapper>
      <h2>Productos</h2>
      <ProductosContainer>
        {products.map((food) => {
          return <CardProducto key={food.id} {...food} />;
        })}
      </ProductosContainer>
      <ContainerButtonStyled>
        <ButtonMore>Ver mas</ButtonMore>
        <ButtonMinus>Ver menos</ButtonMinus>
      </ContainerButtonStyled>
    </ProductosWrapper>
  );
};

export default CardsProductos;

import React from "react";
import {
  ButtonMore,
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
      <ButtonMore>Ver mas</ButtonMore>
    </ProductosWrapper>
  );
};

export default CardsProductos;

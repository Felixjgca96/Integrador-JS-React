import React from "react";
import { ProductosRoutesContainerStyled } from "./ProductosRoutesStyles";
import Categorias from "../../components/Categorias/Categorias";
import CardsProductos from "../../components/Productos/CardsProductos";

const ProductosRoutes = () => {
  return (
    <ProductosRoutesContainerStyled>
      <Categorias />
      <CardsProductos />
    </ProductosRoutesContainerStyled>
  );
};

export default ProductosRoutes;

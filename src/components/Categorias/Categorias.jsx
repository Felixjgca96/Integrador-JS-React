import React from "react";
import { CategoriasContainer, CategoriasWrapper } from "./CategoriasStyles";
// import { categories } from "../../data/Categories";
import Categoria from "./Categoria";
import { useSelector } from "react-redux";

const Categorias = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <CategoriasWrapper id="productos">
      <h2>Categorias</h2>
      <CategoriasContainer>
        {categories.map((category) => {
          return <Categoria {...category} key={category.id} />;
        })}
      </CategoriasContainer>
    </CategoriasWrapper>
  );
};

export default Categorias;

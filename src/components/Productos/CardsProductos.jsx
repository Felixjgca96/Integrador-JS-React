import React from "react";
import Button from "../UI/Button/Button";

import {
  ContainerButtonStyled,
  ProductosContainer,
  ProductosWrapper,
} from "./CardsProductosStyles";
// import { Products } from "../../data/Products";
import CardProducto from "./CardProducto";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { INITIAL_LIMIT } from "../../utils";

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector((state) => state.products.products);

  const { selectedCategory } = useSelector((state) => state.categories);

  const totalProducts = useSelector((state) => state.products.totalProducts);

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [selectedCategory]);

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, foods]) => {
          return foods.map((food) => {
            if (limit >= food.id || selectedCategory) {
              return <CardProducto {...food} key={food.id} />;
            }
            return null;
          });
        })}
      </ProductosContainer>

      {!selectedCategory && (
        <ContainerButtonStyled>
          <Button
            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            secondary="true"
            disabled={INITIAL_LIMIT === limit}
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
          >
            Ver más
          </Button>
        </ContainerButtonStyled>
      )}
    </>
  );
};

export default CardsProductos;

import React from "react";
import { BorderDecoration, CardCategoria } from "./CategoriasStyles";
import { selectCategory } from "../../redux/categories/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

const Categoria = ({ img, title, category }) => {
  const { selectedCategory } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const listOfCategories = useSelector(
    (state) => state.categories.categories
  ).map((category) => category.category);

  const handlerSubmit = (e) => {
    e.preventDefault();

    const newCategory = value.trim().toLowerCase().split(" ").join("");

    const selectedCategory = listOfCategories.find(
      (category) => category.toLowerCase() === newCategory
    );

    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory));
    } else {
      return alert("Categoria no encontrada");
    }

    setValue("");
  };

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
      radius="10"
      disabled={!value}
    >
      <img src={img} alt={category} />
      <h2>{title}</h2>
      <BorderDecoration />
    </CardCategoria>
  );
};

export default Categoria;

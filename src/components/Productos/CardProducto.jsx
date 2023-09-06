import { formatPrice } from "../../utils/index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import Button from "../UI/Button/Button";

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
  ImgCard,
  TextCard,
  ButtonCard,
  TextPrice,
} from "./CardsProductosStyles";

const CardProducto = ({ tarjetaImg, nombre, precio, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductosCard>
      <ImgCard>
        <img src={tarjetaImg} alt={nombre} />
      </ImgCard>
      <TextCard>
        <h2>{nombre}</h2>
        <ContainerPrice>
          <TextPrice>Precio</TextPrice>
          <CardPrice>{formatPrice(precio)}</CardPrice>
        </ContainerPrice>
        <ButtonCard>Agregar</ButtonCard>
        <Button
          onClick={() => dispatch(addToCart({ img, title, desc, price, id }))}
        >
          Agregar
        </Button>
      </TextCard>
    </ProductosCard>
  );
};

export default CardProducto;

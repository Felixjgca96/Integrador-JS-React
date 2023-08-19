import Hero from "../../components/Hero/Hero";
import Beneficios from "../../components/Beneficios/Beneficios";
import Categorias from "../../components/Categorias/Categorias";
import Contacto from "../../components/Contacto/Contacto";

import { HomeWrapper } from "./HomeStyles";
import CardsProductos from "../../components/Productos/CardsProductos";

function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Beneficios />
      <Categorias />
      <CardsProductos />
      <Contacto />
    </HomeWrapper>
  );
}

export default Home;

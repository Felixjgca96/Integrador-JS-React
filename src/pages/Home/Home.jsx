import Hero from "../../components/Hero/Hero";
import Beneficios from "../../components/Beneficios/Beneficios";
import Categorias from "../../components/Categorias/Categorias";
import CardsProductos from "../../components/Productos/CardsProductos";
import Contacto from "../../components/Contacto/Contacto";

import { HomeWrapper } from "./HomeStyles";

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

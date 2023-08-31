export const products = [
  {
    id: 1,
    nombre: "Conjunto Deportivo",
    precio: "15",
    category: "hombre",
    tarjetaImg: "./conjuntodeportivo.png",
  },

  {
    id: 2,
    nombre: "Franelillas",
    precio: "5",
    category: "hombre",
    tarjetaImg: "./franelilla.png",
  },
  {
    id: 3,
    nombre: "Franela 100% Algodon",
    precio: "8",
    category: "hombre",
    tarjetaImg: "./franela100.png",
  },
  {
    id: 4,
    nombre: "Camisa Poliester",
    precio: "5",
    category: "hombre",
    tarjetaImg: "./camisapoliester.png",
  },

  {
    id: 5,
    nombre: "Calza Dama",
    precio: "15",
    category: "dama",
    tarjetaImg: "./calzadama.png",
  },
  {
    id: 6,
    nombre: "Remera Dama",
    precio: "5",
    category: "dama",
    tarjetaImg: "./remeradama.png",
  },
  {
    id: 7,
    nombre: "Top Dama",
    precio: "15",
    category: "dama",
    tarjetaImg: "./topdama.png",
  },
  {
    id: 8,
    nombre: "Campera Dama",
    precio: "25",
    category: "dama",
    tarjetaImg: "./camperadama.png",
  },
  {
    id: 9,
    nombre: "Campera Niño",
    precio: "15",
    category: "niño",
    tarjetaImg: "./camperaniño.png",
  },
  {
    id: 10,
    nombre: "Jogger Dama",
    precio: "5",
    category: "dama",
    tarjetaImg: "./joggerdama.png",
  },
  {
    id: 11,
    nombre: "Mochila Dama",
    precio: "35",
    category: "dama",
    tarjetaImg: "./mochiladama.png",
  },
  {
    id: 12,
    nombre: "Chaqueta Impermeable",
    precio: "12",
    category: "hombre",
    tarjetaImg: "./chaquetaimpermeable.png",
  },
  {
    id: 13,
    nombre: "Uniforme Deportivo",
    precio: "20",
    category: "hombre",
    tarjetaImg: "./uniformedeportivo.png",
  },
  {
    id: 14,
    nombre: "Jogger Caballero",
    precio: "10",
    category: "hombre",
    tarjetaImg: "./jogger.png",
  },
  {
    id: 15,
    nombre: "Mochila Niño",
    precio: "35",
    category: "niño",
    tarjetaImg: "./mochilaniño.png",
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});

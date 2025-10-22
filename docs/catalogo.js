const motos = [
  {
    nombre: "Kawasaki ZX6R 2025",
    descripcion: "Moto deportiva con motor de 636cc, ideal para velocidad y precisión.",
    precio: "$380,000 MXN",
    imagen: "imagenes/zx6r2025.jpeg"
  },
  {
    nombre: "Yamaha R3 2025",
    descripcion: "Diseño agresivo, motor de 321cc y una conducción ágil y ligera.",
    precio: "$180,000 MXN",
    imagen: "imagenes/r3_2025.jpeg"
  },
  {
    nombre: "Kawasaki Ninja 650 2025",
    descripcion: "Moto versátil con potencia media, perfecta para ciudad o carretera.",
    precio: "$260,000 MXN",
    imagen: "imagenes/ninja650_2025.jpeg"
  },
  {
    nombre: "Honda GL 150 2016",
    descripcion: "Clásica y confiable, ideal para uso diario. Motor 150cc.",
    precio: "$1,000,000,000,000 MXN",
    imagen: "imagenes/honda_gl150_2016.png"
  },
  {
    nombre: "Italika 125",
    descripcion: "Económica, ligera y práctica. Perfecta para ciudad.",
    precio: "$27,000 MXN",
    imagen: "imagenes/italika125.jpeg"
  }
];

const contenedor = document.getElementById("catalogo");

motos.forEach(moto => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <img src="${moto.imagen}" alt="${moto.nombre}">
    <h3>${moto.nombre}</h3>
    <p>${moto.descripcion}</p>
    <p class="precio">${moto.precio}</p>
    <button class="boton">Comprar</button>
  `;

  contenedor.appendChild(tarjeta);
});

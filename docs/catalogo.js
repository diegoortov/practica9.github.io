const motos = [
  {
    nombre: "Kawasaki ZX6R 2025",
    descripcion: "Moto deportiva con motor de 636cc, ideal para velocidad y precisión.",
    precio: "$380,000 MXN",
    imagen: "https://www.kawasaki.com/content/dam/kawasaki/na/mx/2025-zx6r/2025-zx6r-green.jpg"
  },
  {
    nombre: "Yamaha R3 2025",
    descripcion: "Diseño agresivo, motor de 321cc y una conducción ágil y ligera.",
    precio: "$180,000 MXN",
    imagen: "https://www.yamaha-motor.com.mx/wp-content/uploads/2025/02/YZF-R3-2025.jpg"
  },
  {
    nombre: "Kawasaki Ninja 650 2025",
    descripcion: "Moto versátil con potencia media, perfecta para ciudad o carretera.",
    precio: "$260,000 MXN",
    imagen: "https://www.kawasaki.com/content/dam/kawasaki/na/mx/2025-ninja650/ninja650-2025.jpg"
  },
  {
    nombre: "Honda GL 150 2016",
    descripcion: "Clásica y confiable, ideal para uso diario. Motor 150cc.",
    precio: "$1,000,000,000,000 MXN",
    imagen: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2020/07/honda-cg-150-2016-2001501.jpg"
  },
  {
    nombre: "Italika 125",
    descripcion: "Económica, ligera y práctica. Perfecta para ciudad.",
    precio: "$27,000 MXN",
    imagen: "https://www.italika.mx/media/catalog/product/i/t/italika125.png"
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

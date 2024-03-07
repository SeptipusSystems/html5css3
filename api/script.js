document.addEventListener("DOMContentLoaded", () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((json) => listar_en_pantalla(json));

  /*fetch("https://rickandmortyapi.com/api/character/3")
    .then((response) => response.json())
    .then((json) => mostrar_en_pantalla(json));*/
});

function mostrar_en_pantalla(json, item) {
  const nombre = document.createElement("div");

  const imagen = document.createElement("img");
  imagen.src = json.image;
  item.appendChild(imagen);

  nombre.textContent = "Nombre: " + json.name;
  item.appendChild(nombre);

  const status = document.createElement("div");
  status.textContent = "Estado: " + json.status;
  item.appendChild(status);

  const species = document.createElement("div");
  species.textContent = "Especie: " + json.species;
  item.appendChild(species);
}

function listar_en_pantalla(json) {
  let content = document.getElementById("content");
  json.results.forEach((element) => {
    const item = document.createElement("div");
    item.className = "item";
    mostrar_en_pantalla(element, item);
    content.appendChild(item);
  });
}

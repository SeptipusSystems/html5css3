document.addEventListener("DOMContentLoaded", () => {
    fetch("https://fakestoreapi.com/products?limit=8&sort=desc")
      .then((response) => response.json())
      .then((json) => listar_en_pantalla(json));
  });

  function listar_en_pantalla(json){
    const productos = document.getElementById("productos");
    json.forEach(element => {
        const item = document.createElement("article");
        item.className = "item";
        producto(element,item);
        productos.appendChild(item);
});
  }

function producto(json,item)
{
  const imagen = document.createElement("img");
  imagen.src = json.image;
  item.appendChild(imagen);
    
  const price = document.createElement("span");
  price.className = "price";
  price.innerHTML = json.price;
  item.appendChild(price);

  const category = document.createElement("span");
  category.className = "category";
  category.innerHTML = json.category;
  item.appendChild(category);
}
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://fakestoreapi.com/products?sort=desc")//limit=8&
      .then((response) => response.json())
      .then((json) => listar_en_pantalla(json));
  });

  function listar_en_pantalla(json){
    console.log("Cargando...");
    const productos = document.getElementById("productos");
   // let cont = 0;
    json.forEach(element => {
   /*   if(cont >= 5){
        return "";
      }*/
    /*  console.log(element.category.charAt(0).toLowerCase());
      if(element.category.charAt(0).toLowerCase() == 'm'){*/
        const item = document.createElement("article");
        item.className = "item";
        producto(element,item);
        productos.appendChild(item);
      //}
       // cont++;
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
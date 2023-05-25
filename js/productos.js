// STOCK DE Libros


class Libro { constructor (titulo, imagen,autor, editorial,precio,stock,categoria, sku){
    this.titulo = titulo;
    this.imagen = imagen;
    this.autor = autor;
    this.editorial = editorial;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
    this.sku = sku;
}
}
const en_la_sombra = new Libro("En La Sombra" ,"../img/sombra.harry.jpg", "Principe Harry","Plaza & Janes", 13600, 25, "Biografía", "AA183");
const reina_charlotte = new Libro("La reina Charlotte", "../img/reina.charlotte.jpg","Julia Quinn y Shonda Rhimess","Titania", 17480, 125, "Novelas de amor", "AA153");
const dolor_no_es_mio= new Libro("Este dolor no es mío","../img/este.dolor.jpg","Mark Wolynn", "Gaia", 25990, 20, "Autoayuda", "AA153");
const muchas_vidas = new Libro("Muchas vidas", "../img/muchas.vidas.jpg","muchos maestros","Brian Weiss", "B de bolsillo", 8500, 205, "Autoayuda", "AA1443");

const roma_soy_yo = new Libro("Roma soy yo","../img/roma.soy.jpg" ,"Santiago Posteguillo","B de bolsillo" , 17500, 55, "Historia", "AA186");
const una_magia_oscura = new Libro("Una magia más oscura", "../img/una.magia.jpg" , "V.E Schwab", "Destino ", 29130, 89, "Ficción","AB154");
const cuerpos = new Libro ("Cuerpos", "../img/cuerpos.png" ,"Noemi Casquet","B de bolsillo", 3200, 12, "Ficción", "AB147");
const malas_mujeres = new Libro("Malas mujeres", "../img/malas.mujeres.jpg","Maria Hesse","Lumen", 18160, 45, "Novelas Gráficas", "BC485");
const persepolis = new Libro("Persépolis", "../img/persepolis.jpg" , "Marjane Satrapi","Reservoir Books", 17060, 740, "Novelas Gráficas", "BV151");
const algo_resuena = new Libro ("Algo resuena en lo profundo", "../img/algo.resuena.png","Canals Sergio","Uqbar Editores", 4470, 88, "Autoayuda", "GF481");
const ando_lento = new Libro ("Ando lento", "../img/ando.lento.jpg","May Patricia", "Urano",13950, 1, "Autoayuda", "GF112");
const despantallado = new Libro("Despantalaldo", "../img/despantallado.jpg","Fabian Rivas" ,"ZIG-ZAG", 9520, 33, "Literatura Infantil", "DD424");

const productos = [en_la_sombra, reina_charlotte ,dolor_no_es_mio, muchas_vidas,  roma_soy_yo, una_magia_oscura, cuerpos, malas_mujeres, persepolis, algo_resuena, ando_lento, despantallado

];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(){
productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("col-sm-6");
    div.classList.add("col-md-4");
    div.classList.add("col-xl-3");

    div.innerHTML = `
                        <div class="card producto">
                        <img class="producto-imagen card-img-top " src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-detalle card-body ">
                        <h5 class="producto-titulo card-title">${producto.autor}</h3>
                        <p class="producto-precio producto-precio">${producto.precio}</p>
                        <p class="producto-precio">${producto.categoria}</p>
                        <button class="producto-agregar" id="${producto.sku}">Agregar al carrito</button>
                        
                    </div> `;

                    contenedorProductos.append(div);
 })
}
cargarProductos();
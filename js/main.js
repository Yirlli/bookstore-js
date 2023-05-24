// STOCK DE Libros


class Libro { constructor (titulo,editorial,precio,stock,categoria, sku){
    this.titulo = titulo;
    this.editorial = editorial;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
    this.sku = sku;
}
}
const la_ultima_profecia = new Libro("La última profecía de María Magdalena", "Lita Donoso", 13600, 25, "Historia y Arqueología", "AA183");
const roma_soy_yo = new Libro("Roma soy yo", "Santiago Posteguillo", 17500, 55, "Historia y Arqueología", "AA186");
const una_magia_oscura = new Libro("Una magia más oscura", "V.E Schwab", 6450, 89, "Ficción","AB154");
const cuerpos = new Libro ("Cuerpos", "Noemi Casquet", 3200, 12, "Ficción", "AB147");
const malas_mujeres = new Libro("Malas mujeres", "Maria Hesse", 18160, 45, "Novelas Gráficas", "BC485");
const persepolis = new Libro("Persépolis", "Marjane Satrapi", 17060, 740, "Novelas Gráficas", "BV151");
const algo_resuena = new Libro ("Algo resuena en lo profundo", "Canals Sergio", 447, 88, "Autoayuda", "GF481");
const ando_lento = new Libro ("Ando lento", "May Patricia", 13900, 1, "Autoayuda", "GF112");
const giraversos = new Libro("Giraversos", "Arrau Fernanda", 4810, 15, "Poesía", "DD481");
const lazos_de_sangre = new Libro("Lazos de sangre", "Silva Acevedo Manuel", 9520, 33, "Poesía", "DD424");

const libros = [la_ultima_profecia, roma_soy_yo, una_magia_oscura, cuerpos, malas_mujeres, algo_resuena, giraversos, lazos_de_sangre

];



//muestra los libros disponibles
console.log("Perfecto, aca puedes ver los libros que tenemos disponibles")
//console.log(Libro.precio)


// filtrar por precio
/*
alert("No tengo mucho dinero para gastar")
let precioConsulta = parseFloat(prompt("De que precio aproximadamente quieres ver los libros disponibles?"))
const arrayProductosPorPrecio = libros.filter(libros => libros.precio > precioConsulta)
console.log(arrayProductosPorPrecio)*/

function buscarLibroporPrecio (){
    let busqueda = parseInt(prompt("De que precio aproximadamente quieres ver los libros disponibles? "));
    let producto = libros.filter((Libro) => Libro.precio.includes(busqueda))
    if(libros.precio >= busqueda){
        console.table(producto)
    }else{
    console.log("No lo tenemos")
    }
}
buscarLibroporPrecio();




//muestra un libro en especifico
// let libroBuscado = prompt("Por casualidad tendras este libro?")
// const buscarLibroEspecifico = libros.find(libros => libros.titulo === libroBuscado);
// console.log(buscarLibroEspecifico)
// alert("hmmm quisiera saber si tienes este libro")
function buscarLibroporTitulo (){
  // let busqueda = prompt("Que libro estas buscando? ").trim().toLowerCase();

    let producto = libros.find((Libro) => Libro.titulo.toLowerCase().includes(busqueda))

    if(producto.length >0){

        console.table(producto)
    }else{
        console.log("No lo tenemos")
     }
 }
 
 //buscarLibroporTitulo();

//agregar al carrito de compras2


const comprarLibro = [];
//let cantidadCompra = parseInt(prompt("cuantos libros deseas comprar?"))

function carritoCompras () {
   
     // let busqueda = prompt("Que producto estas buscando? ").trim().toLowerCase();
        /*let producto = libros.filter((Libro) => Libro.titulo.toLowerCase().includes(busqueda))
        if( producto.length >0) {
            comprarLibro.push(producto)
       
        }else{ 
            console.log("no lo tenemos")
        }*/

//let producto = libros.filter((Libro) => Libro.titulo.toLowerCase().includes(busqueda))
for( i = 0; i<cantidadCompra; i++){
    //let busqueda = prompt("Que producto estas buscando? ").trim().toLowerCase();
   /// let producto = libros.filter((Libro) => Libro.titulo.toLowerCase().includes(busqueda))
    if(producto.length >0){
        comprarLibro.push(producto[i])
       
    }else{
        console.log("producto no disponible")
        
    }

    }     
}
//console.table(comprarLibro)

//carritoCompras();


//total a pagar

// let totalPrecio = comprarLibro.reduce((acumulador, libros) => acumulador+libros.precios, 0);
// console.log("Total a pagar " + totalPrecio);

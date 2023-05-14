// productos disponibles

class Libro { constructor (titulo,editorial,precio,stock,categoria, sku){
    this.titulo = titulo;
    this.editorial = editorial;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
    this.sku = sku;
}
}
const la_ultima_profecia = new Libro("Profecía", "Lita Donoso", 13600, 25, "Historia y Arqueología", "AA183");
const roma_soy_yo = new Libro("Roma", "Santiago Posteguillo", 17500, 55, "Historia y Arqueologia", "AA186");
const una_magia_oscura = new Libro("Magia", "V.E Schwab", 6450, 89, "Ficcion","AB154");
const cuerpos = new Libro ("Cuerpos", "Noemi Casquet", 3200, 12, "Ficción", "AB147");
const malas_mujeres = new Libro("Mujeres", "Maria Hesse", 18160, 45, "Novelas Graficas", "BC485");
const persepolis = new Libro("Persépolis", "Marjane Satrapi", 17060, 740, "Novelas Graficas", "BV151");
const algo_resuena = new Libro ("Profundo", "Canals Sergio", 447, 88, "Autoayuda", "GF481");
const ando_lento = new Libro ("Lento", "May Patricia", 13900, 1, "Autoayuda", "GF112");
const giraversos = new Libro("Giraversos", "Arrau Fernanda", 4810, 15, "Poesía", "DD481");
const lazos_de_sangre = new Libro("Lazos", "Silva Acevedo Manuel", 9520, 33, "Poesía", "DD424");

const libros = [la_ultima_profecia, roma_soy_yo, una_magia_oscura, cuerpos, malas_mujeres, algo_resuena, giraversos, lazos_de_sangre

];

function inicio(){
alert("Bienvenido, cuentamos en que te podemos ayudar?")
let opcionElegida = parseInt(prompt("Elige una opcion:\n 1)Ver productos por rango de precio \n 2) Buscar un libro especifico \n 3)Comprar un libro y saber el monto total a pagar"));
return opcionElegida;
}
//inicio();
// filtrar por precio

function filtrarPorPrecio (){
    let precioConsulta = parseFloat(prompt("De que precio aproximadamente quieres ver los libros disponibles?"))
    const arrayProductosPorPrecio = libros.filter(libros => libros.precio > precioConsulta)
    console.table(arrayProductosPorPrecio)
};
//encontrar por nombre

function encontrarPorTitulo() {
let libroBuscado = prompt("Por casualidad tendras este libro?").toLowerCase()
const buscarLibroEspecifico = libros.find(libros => libros.titulo.toLowerCase().includes(libroBuscado));

console.log(buscarLibroEspecifico)

 };
 



//elegir la opcion a realizar

let opcionElegida = inicio();
switch(opcionElegida){
    case 1:
        filtrarPorPrecio();
        break;
    case 2: encontrarPorTitulo ();
        break;
    default:
        console.log("marque una opcion valida")
}
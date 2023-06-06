// STOCK DE Libros

/*
class Libro { constructor (titulo, imagen,autor, editorial,precio,stock,categoria, id, sku, descripcion){
    this.titulo = titulo;
    this.imagen = imagen;
    this.autor = autor;
    this.editorial = editorial;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
    this.id = id;
    this.sku = sku;
    this.descripcion = descripcion;
}
}
const en_la_sombra = new Libro("En La Sombra" ,"./img/sombra.harry.jpg", "Principe Harry","Plaza & Janes", 13600, 25, "Biografía", "biografia", "AA183",
"Fue una de las imágenes más desgarradoras del siglo XX: Dos niños, dos príncipes, caminando detrás del féretro de su madre, mientras el mundo contemplaba la escena con pesar... y horror. A la vez que se daba sepultura a Diana, princesa de Gales, miles de millones de personas se preguntaban qué debían pensar y sentir esos príncipes y qué rumbo tomarían sus vidas. En el caso de Harry, esta es, por fin, esa historia. Con su franqueza directa y sin concesiones, SPARE: En la sombra es una publicación que marcará un hito. Está llena de lucidez, revelaciones, introspección y sabiduría sobre el eterno poder del amor, sabiduría adquirida a un alto coste.");
const reina_charlotte = new Libro("La reina Charlotte", "./img/reina.charlotte.jpg","Julia Quinn y Shonda Rhimess","Titania", 17480, 125, "Novelas románticas","romanticas", "AA153",
"En 1761, en un soleado día de septiembre, un rey y una reina se conocieron por primera vez. Secasaron en cuestión de horas.La princesa alemana Carlota deMecklemburgo-Strelitz era guapa y terca, y poseía una inteligenciaferoz, unos atributos que no eran precisamente los que la cortebritánica buscaba para la esposa del rey Jorge III. Sin embargo, suferocidad y su independencia eran justo lo que necesitaba, porqueJorge tenía secretos., unos secretos capaces de sacudir los cimientosde la monarquía.Sumergida de lleno en su nuevo papel comomiembro de la familia real, Carlota debe aprender a moverse en lacompleja política de la corte, ");
const dolor_no_es_mio= new Libro("Este dolor no es mío","./img/este.dolor.jpg","Mark Wolynn", "Gaia", 25990, 20, "Autoayuda", "autoayuda", "AA153",
"Depresión, ansiedad, dolores crónicos, fobias, pensamientos obsesivos. La evidencia científica muestra que los traumas pueden ser heredados. Existen pruebas fiables de que muchos problemas crónicos o de largo plazo pueden no tener su origen en nuestras vivencias inmediatas o en desequilibrios químicos de nuestro cerebro, sino en las vidas de nuestros padres, abuelos o bisabuelos");
const muchas_vidas = new Libro("Muchas vidas, muchos maestros", "./img/muchas.vidas.jpg","Brian Weiss", "B de bolsillo", 8500, 205, "autoayuda", "Autoayuda", "AA1443",
"La historia real de un psiquiatra, su joven paciente y la terapia de regresión que cambió sus vidas para siempre. Un punto de encuentro entre ciencia y metafísica. El doctor Brian Weiss, jefe de psiquiatría del hospital Mount Sinai de Miami, relata en éste, su primer libro, una asombrosa experiencia que cambió por completo su propia vida y su visión de la psicoterapia. Una de sus pacientes, Catherine, recordó bajo hipnosis varias de sus vidas pasadas y pudo encontrar en ellas el origen de muchos de los traumas que sufría. Catherine se curó, pero ocurrió algo todavía más importante: logró ponerse en contacto con los Maestros, espíritus superiores que habitan los estados entre dos vidas.");
const roma_soy_yo = new Libro("Roma soy yo","./img/roma.soy.jpg" ,"Santiago Posteguillo","B de bolsillo" , 17500, 55, "Historia", "historia", "AA186",
"Centrada en la juventud de Julio César, Roma soy yo parte de un episodio muy poco conocido: cuando este se dio a conocer al pueblo romano como abogado en un juicio de enorme trascendencia política contra el poderoso y corrupto senador Dolabela. La novela también nos adentra en su infancia y años de formación, así como en su primera victoria militar. El lector se sumergirá en el fragor de las batallas, entrará en la domus de la familia de Julio César y comprenderá los orígenes de un hombre que cambió el curso de la historia");
const una_magia_oscura = new Libro("Una magia más oscura", "./img/una.magia.jpg" , "V.E Schwab", "Destino ", 29130, 89, "Ficción", "ficcion","AB154",
"Kell es uno de los últimos magos viajeros con una extraña habilidad para trasladarse entre universos paralelos conectados por una ciudad mágica. Existe un Londres Gris, sin magia y con un rey loco: George III. Un Londres Rojo, donde se honra la vida y la magia y donde Kell creció junto al heredero de un imperio esplendoroso. Un Londres Blanco, donde la lucha por controlar la magia dejó una ciudad en ruinas. Y mucho tiempo atrás había un Londres Negro. Pero ya nadie habla de eso.");
const cuerpos = new Libro ("Cuerpos", "./img/cuerpos.png" ,"Noemi Casquet","B de bolsillo", 3200, 12, "Ficción", "ficcion","AB147",
"Ruth es una actriz fracasada que atraviesa un momento personal muy difícil. Una noche decide ser otra. Se pone una peluca y se disfraza de un modo muy sexy para, bajo una identidad falsa, salir a ligar. Distintas mujeres, distintos cuerpos, que le permiten olvidar que no sabe quién es ella misma. Así, irá viviendo experiencias sexuales cada vez más intensas y excitantes, siempre de acuerdo con la personalidad de las mujeres que interpreta. Pero todo se complica cuando se da cuenta de que hay un hombre al que siempre se encuentra y que parece haberse dado cuenta de que ella, bajo sus distintos disfraces, siempre es la misma.");
const malas_mujeres = new Libro("Malas mujeres", "./img/malas.mujeres.jpg","Maria Hesse","Lumen", 18160, 45, "Novelas Gráficas", "graficas", "BC485",
"Desde la aparición de los primeros mitos, lo universal ha sido la narración de los hombres, esa visión masculina que dibujó a unos y a otras, nos dijo cómo debíamos ser -puras, dóciles, amorosas- y previno al mundo de las malas mujeres, ya fueran vengativas gorgonas, crueles madrastras, problemáticas Pandoras o Evas incautas que cargaron con la culpa de nuestro destino. En su personalísima versión, María Hesse da una vuelta de tuerca a esas princesas pasivas, brujas perversas, malas madres, femmes fatales, locas pasionales y secundarias perfectas, y, de Madame Bovary a Sarah Connor, de Juana «la Loca» a Yoko Ono, de Helena de Troya a Monica Lewinsky, de Medusa a Zahara o a Nevenka, reivindica la necesidad de encontrar otros referentes, nuevas lecturas de la Historia e inspiración para ser simplemente mujeres en el mundo en que vivimos. «Ahora sabemos que no hay que tener miedo a salirse de esas líneas caprichosas que otros marcaron, y que las que abrieron esas grietas buscando otros horizontes no estaban locas, ni eran perversas ni malos ejemplos para otras. Si acaso fueron mujeres valientes, fuertes, atrevidas, decididas. Rompedoras. Y si las llaman malas mujeres que se lo llamen; las paredes han caído y nosotras ya no estaremos ahí para oírlo».");
const persepolis = new Libro("Persépolis", "./img/persepolis.jpg" , "Marjane Satrapi","Reservoir Books", 17060, 740, "Novelas Gráficas",  "graficas","BV151", 
"Persépolis nos cuenta la revolución islámica iraní vista desde los ojos de una niña que asiste atónita al cambio profundo que experimentan su país y su familia, mientras ella debe aprender a llevar el velo. Intensamente personal y profundamente político, el relato autobiográfico de Marjane Satrapi examina qué significa crecer en un ambiente de guerra y represión política.");
const algo_resuena = new Libro ("Algo resuena en lo profundo", "./img/algo.resuena.png","Canals Sergio","Uqbar Editores", 4470, 88, "Autoayuda", "autoayuda","GF481",
"En su constante búsqueda de felicidad y paz, el hombre, debilitado por el entorno en el que vive, ha perdido el sentido de lo sagrado y lo absoluto que, a su vez, lo fragmenta y despersonaliza. Este libro es una invitación del doctor Sergio Canals L. a reflexionar en torno al sentido que damos a nuestra vida, la capacidad de amar y ser amados, trascender más allá de la muerte, etc. ¿Existe algo más tremendo que el sinsentido?, ¿algo más doloroso que la soledad, el vacío?");
const ando_lento = new Libro ("Ando lento", "./img/ando.lento.jpg","May Patricia", "Urano",13950, 1, "Autoayuda", "autoayuda","GF112", "¿Qué clase de personas queremos ser? ¿A qué nos aferramos cuando no hay salida posible? ¿Cómo es el mundo en el que anhelamos vivir? ¿Cuál es el sentido de nuestra existencia? Preguntas como estas parecen retóricas en tiempos de confusión y prisa, donde la velocidad, las apariencias y la angustia constante que acompañan el vivir, impiden la pausa y la reflexión acerca de nuestras certezas.");
const despantallado = new Libro("Despantallado", "./img/despantallado.jpg","Fabian Rivas" ,"ZIG-ZAG", 9520, 33, "Literatura Infantil", "infantil", "DD424", "Después de sufrir un porrazo intentando lucirse con una nueva y arriesgada pirueta en su skate, Pipe termina con el brazo enyesado, sin poder practicar su deporte favorito durante lo que le parece una eternidad, y para peor, sin nuevos videos para compartir con sus seguidores en redes sociales. Aburrido y frustrado por no poder mantener su popularidad, Pipe deberá encontrar nuevas formas de canalizar su energía y explorar su creatividad, aprendiendo a adaptarse a su nueva situación");

const libros = [en_la_sombra, reina_charlotte ,dolor_no_es_mio, muchas_vidas,  roma_soy_yo, una_magia_oscura, cuerpos, malas_mujeres, persepolis, algo_resuena, ando_lento, despantallado

];*/

const libros= [
    {
        titulo: "En La Sombra",
        imagen: "./img/sombra.harry.jpg",
        autor: "Principe Harry",
        editoria: "Plaza & Janes",
        precio: 13600,
        stock: 25,
        categoria: "Biografía",
        id: "biografia",
        sku: "AA183",
        descripcion: "Fue una de las imágenes más desgarradoras del siglo XX: Dos niños, dos príncipes, caminando detrás del féretro de su madre, mientras el mundo contemplaba la escena con pesar... y horror. A la vez que se daba sepultura a Diana, princesa de Gales, miles de millones de personas se preguntaban qué debían pensar y sentir esos príncipes y qué rumbo tomarían sus vidas. En el caso de Harry, esta es, por fin, esa historia. Con su franqueza directa y sin concesiones, SPARE: En la sombra es una publicación que marcará un hito. Está llena de lucidez, revelaciones, introspección y sabiduría sobre el eterno poder del amor, sabiduría adquirida a un alto coste."
    },
    {
        titulo: "La reina Charlotte",
        imagen: "./img/reina.charlotte.jpg",
        autor: "Julia Quinn y Shonda Rhimess",
        editoria: "Titania",
        precio: 17480,
        stock: 125,
        categoria: "Novelas románticas",
        id: "romanticas",
        sku: "AA153",
        descripcion:"En 1761, en un soleado día de septiembre, un rey y una reina se conocieron por primera vez. Secasaron en cuestión de horas.La princesa alemana Carlota deMecklemburgo-Strelitz era guapa y terca, y poseía una inteligenciaferoz, unos atributos que no eran precisamente los que la cortebritánica buscaba para la esposa del rey Jorge III. Sin embargo, suferocidad y su independencia eran justo lo que necesitaba, porqueJorge tenía secretos., unos secretos capaces de sacudir los cimientosde la monarquía.Sumergida de lleno en su nuevo papel comomiembro de la familia real, Carlota debe aprender a moverse en lacompleja política de la corte, "
    },
    {
        titulo: "Este dolor no es mío",
        imagen: "./img/este.dolor.jpg",
        autor: "Mark Wolynn",
        editoria: "Gaia",
        precio: 2590,
        stock: 20,
        categoria:"Autoayuda" ,
        id: "autoayuda",
        sku: "AA153",
        descripcion:"Depresión, ansiedad, dolores crónicos, fobias, pensamientos obsesivos. La evidencia científica muestra que los traumas pueden ser heredados. Existen pruebas fiables de que muchos problemas crónicos o de largo plazo pueden no tener su origen en nuestras vivencias inmediatas o en desequilibrios químicos de nuestro cerebro, sino en las vidas de nuestros padres, abuelos o bisabuelos"
    },
    {
        titulo: "Muchas vidas, muchos maestros",
        imagen: "./img/muchas.vidas.jpg",
        autor: "Brian Weiss", 
        editoria: "B de bolsillo",
        precio: 8500,
        stock: 205,
        categoria: "Autoayuda",
        id:  "autoayuda",
        sku: "AA1443",
        descripcion:"La historia real de un psiquiatra, su joven paciente y la terapia de regresión que cambió sus vidas para siempre. Un punto de encuentro entre ciencia y metafísica. El doctor Brian Weiss, jefe de psiquiatría del hospital Mount Sinai de Miami, relata en éste, su primer libro, una asombrosa experiencia que cambió por completo su propia vida y su visión de la psicoterapia. Una de sus pacientes, Catherine, recordó bajo hipnosis varias de sus vidas pasadas y pudo encontrar en ellas el origen de muchos de los traumas que sufría. Catherine se curó, pero ocurrió algo todavía más importante: logró ponerse en contacto con los Maestros, espíritus superiores que habitan los estados entre dos vidas."
    },
    {
        titulo:"Roma soy yo" ,
        imagen: "./img/roma.soy.jpg",
        autor: "Santiago Posteguillo",
        editoria: "B de bolsillo",
        precio: 17500,
        stock: 55,
        categoria: "Historia",
        id:"historia" ,
        sku: "AA186",
        descripcion:"Centrada en la juventud de Julio César, Roma soy yo parte de un episodio muy poco conocido: cuando este se dio a conocer al pueblo romano como abogado en un juicio de enorme trascendencia política contra el poderoso y corrupto senador Dolabela. La novela también nos adentra en su infancia y años de formación, así como en su primera victoria militar. El lector se sumergirá en el fragor de las batallas, entrará en la domus de la familia de Julio César y comprenderá los orígenes de un hombre que cambió el curso de la historia"
    },
    {
        titulo: "Una magia más oscura",
        imagen: "./img/una.magia.jpg",
        autor: "V.E Schwab",
        editoria: "Destino",
        precio: 29130,
        stock: 19,
        categoria: "Ficición",
        id: "ficcion",
        sku: "AB154",
        descripcion: "Kell es uno de los últimos magos viajeros con una extraña habilidad para trasladarse entre universos paralelos conectados por una ciudad mágica. Existe un Londres Gris, sin magia y con un rey loco: George III. Un Londres Rojo, donde se honra la vida y la magia y donde Kell creció junto al heredero de un imperio esplendoroso. Un Londres Blanco, donde la lucha por controlar la magia dejó una ciudad en ruinas. Y mucho tiempo atrás había un Londres Negro. Pero ya nadie habla de eso."
    },
    {
        titulo: "Cuerpos",
        imagen: "./img/cuerpos.png",
        autor: "Noemi Casquet",
        editoria: "B de bolsillo",
        precio: 13200,
        stock:12 ,
        categoria: "Ficición",
        id:"ficcion",
        sku: "AB147",
        descripcion:"Ruth es una actriz fracasada que atraviesa un momento personal muy difícil. Una noche decide ser otra. Se pone una peluca y se disfraza de un modo muy sexy para, bajo una identidad falsa, salir a ligar. Distintas mujeres, distintos cuerpos, que le permiten olvidar que no sabe quién es ella misma. Así, irá viviendo experiencias sexuales cada vez más intensas y excitantes, siempre de acuerdo con la personalidad de las mujeres que interpreta. Pero todo se complica cuando se da cuenta de que hay un hombre al que siempre se encuentra y que parece haberse dado cuenta de que ella, bajo sus distintos disfraces, siempre es la misma."
    },
    {
        titulo: "Malas mujeres",
        imagen: "./img/malas.mujeres.jpg",
        autor: "Maria Hesse",
        editoria: "Lumen",
        precio: 18150 ,
        stock: 34,
        categoria: "Novelas Gráficas", 
        id: "graficas", 
        sku:"BC485",
        descripcion:"Desde la aparición de los primeros mitos, lo universal ha sido la narración de los hombres, esa visión masculina que dibujó a unos y a otras, nos dijo cómo debíamos ser -puras, dóciles, amorosas- y previno al mundo de las malas mujeres, ya fueran vengativas gorgonas, crueles madrastras, problemáticas Pandoras o Evas incautas que cargaron con la culpa de nuestro destino. En su personalísima versión, María Hesse da una vuelta de tuerca a esas princesas pasivas, brujas perversas, malas madres, femmes fatales, locas pasionales y secundarias perfectas, y, de Madame Bovary a Sarah Connor, de Juana «la Loca» a Yoko Ono, de Helena de Troya a Monica Lewinsky, de Medusa a Zahara o a Nevenka, reivindica la necesidad de encontrar otros referentes, nuevas lecturas de la Historia e inspiración para ser simplemente mujeres en el mundo en que vivimos. «Ahora sabemos que no hay que tener miedo a salirse de esas líneas caprichosas que otros marcaron, y que las que abrieron esas grietas buscando otros horizontes no estaban locas, ni eran perversas ni malos ejemplos para otras. Si acaso fueron mujeres valientes, fuertes, atrevidas, decididas. Rompedoras. Y si las llaman malas mujeres que se lo llamen; las paredes han caído y nosotras ya no estaremos ahí para oírlo»."
        
    },
    {
        titulo: "Persépolis",
        imagen: "./img/persepolis.jpg",
        autor:"Marjane Satrapi" ,
        editoria: "Reservoir Books",
        precio: 17060 ,
        stock: 740,
        categoria:  "Novelas Gráficas",
        id:  "graficas",
        sku: "BV151",
        descripcion:"Persépolis nos cuenta la revolución islámica iraní vista desde los ojos de una niña que asiste atónita al cambio profundo que experimentan su país y su familia, mientras ella debe aprender a llevar el velo. Intensamente personal y profundamente político, el relato autobiográfico de Marjane Satrapi examina qué significa crecer en un ambiente de guerra y represión política."
    },
    {
        titulo: "Algo resuena en lo profundo",
        imagen:"./img/algo.resuena.png" ,
        autor: "Canals Sergio",
        editoria: "Uqbar Editores",
        precio: 4470 ,
        stock: 88,
        categoria: "Autoayuda",
        id:"autoayuda",
        sku: "GF481",
        descripcion:"En su constante búsqueda de felicidad y paz, el hombre, debilitado por el entorno en el que vive, ha perdido el sentido de lo sagrado y lo absoluto que, a su vez, lo fragmenta y despersonaliza. Este libro es una invitación del doctor Sergio Canals L. a reflexionar en torno al sentido que damos a nuestra vida, la capacidad de amar y ser amados, trascender más allá de la muerte, etc. ¿Existe algo más tremendo que el sinsentido?, ¿algo más doloroso que la soledad, el vacío?"
    },
    {
        titulo: "Ando lento", 
        imagen: "./img/ando.lento.jpg",
        autor: "May Patricia",
        editoria: "Urano",
        precio: 13950,
        stock: 1,
        categoria: "Autoayuda",
        id: "autoayuda",
        sku: "GF112",
        descripcion:"¿Qué clase de personas queremos ser? ¿A qué nos aferramos cuando no hay salida posible? ¿Cómo es el mundo en el que anhelamos vivir? ¿Cuál es el sentido de nuestra existencia? Preguntas como estas parecen retóricas en tiempos de confusión y prisa, donde la velocidad, las apariencias y la angustia constante que acompañan el vivir, impiden la pausa y la reflexión acerca de nuestras certezas."
    },
    {
        titulo: "Despantallado", 
        imagen: "./img/despantallado.jpg",
        autor: "Fabian Rivas",
        editoria: "ZIG-ZAG",
        precio: 9520,
        stock: 33,
        categoria: "Literatura Infantil",
        id:"infantil" ,
        sku: "DD424",
        descripcion:"Después de sufrir un porrazo intentando lucirse con una nueva y arriesgada pirueta en su skate, Pipe termina con el brazo enyesado, sin poder practicar su deporte favorito durante lo que le parece una eternidad, y para peor, sin nuevos videos para compartir con sus seguidores en redes sociales. Aburrido y frustrado por no poder mantener su popularidad, Pipe deberá encontrar nuevas formas de canalizar su energía y explorar su creatividad, aprendiendo a adaptarse a su nueva situación"
    }
];
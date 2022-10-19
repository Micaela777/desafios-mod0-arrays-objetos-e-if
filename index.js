
// DESAFÍOS MOD.0 ARRAYS Y OBJETOS //

//Desafío Uno

/*
Para este primer desafío, vamos a asignarles un par de datos a dos hermanos 
- Declará un objeto hermanaMayor
- Declará un objeto hermanoMenor
   Ej.:
*/
var hermanaMayor = {};
var hermanoMenor = {};
/*
- Dentro de ambos objetos, declará los siguientes atributos:
  - nombre
  - profesion
  - añosDeExperiencia
- A estos asignales como valor el nombre, profesión y años que quieras
   Ej.:
*/
var hermanaMayor = {
   nombre: "Amelia",
   profesion: "Arquitecta",
   añosDeExperiencia: 8,
}

var hermanoMenor = {
   nombre: "Benito",
   profesion: "Piloto",
   añosDeExperiencia: 4,
}
/* 
Mostrá los datos en la terminal
- En primer lugar, imprimí ambos objetos
- Luego, recorrélos a cada uno e imprimí sus atributos por separado
   Ej.:
*/
console.log(hermanaMayor)
console.log(hermanaMayor.nombre);

console.log(hermanoMenor)
console.log(hermanoMenor.nombre);
/* 
Así con los demás atributos
*/



//Desafío Dos

/*
Declará un array listaNumeros con los siguientes elementos:
   Ej.:
*/
var listaNumeros = [35, 60, 5, 102, 11];
/*
Basándote en estos números y recorriendo sus posiciones en el array, imprimílos en la 
terminal de menor a mayor usando un console.log() para cada posición.
   Ej.:
*/
var listaNumeros = [46, 71, 6];
console.log(listaNumeros[2]);
/* 
En este caso, el 6 es el menor de todos y en el array se encuentra en la posición 2,
este sería el primer console.log(), que imprime el menor de los números en la posición
en la que esté. Así con los demás números
   Ej.:
*/
var listaNumeros = [46, 71, 6];
console.log(listaNumeros[2]);
console.log(listaNumeros[0]);
console.log(listaNumeros[1]);
/*

................... Acá iría un ejemplo de cómo se vería en la terminal 

*/



//Desafío Tres

/*
Declará el siguiente array de objetos:
*/
var ventaDeObjetos = [{
   primerObjeto: "celular",
   disponible: true,
},
{
   segundoObjeto: "notebook",
   disponible: true,
},
{
   tercerObjeto: "moto",
   disponible: false,
},
{
   cuartoObjeto: "bicicleta",
   disponible: true,
},
{
   quintoObjeto: "microondas",
   disponible: false,
}];
/* 
Vamos a mostrar estos datos en la terminal, haremos (uno debajo del otro):
- Un console.log() para mostrar el array de objetos completo
   Ej.:
*/
console.log(ventaDeObjetos)
/*
- Un console.log() que represente a los objetos disponibles
- Un console.log() que represente a los objetos no disponibles
- Ambos van a mostrar lo siguiente:
   Ej.:
*/
console.log("Estos objetos están disponibles")
console.log("Estos objetos no están disponibles")
/*
Ahora, basándote en los datos de este array de objetos y recorriéndo cada posición, 
imprimí debajo de sus respectivos console.log() (los dos anteriores mencionados) los 
objetos disponibles y los no disponibles
Para mostrar el nombre de estos en la terminal, elegí el atributo primerObjeto, 
segundoObjeto, etc... que va a ir en el console.log()
   Ej.:
*/
console.log("Estos objetos están disponibles")
console.log(ventaDeObjetos[0].primerObjeto)

console.log("Estos objetos no están disponibles")
console.log(ventaDeObjetos[2].tercerObjeto)


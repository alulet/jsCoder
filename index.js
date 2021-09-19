// Ejercicios Clase 1

// let nombre = prompt("Ingrese aqui su nombre");
// let numero = prompt("Ingrese un numero");
// let texto1 = prompt("Concatenemos esto con lo que viene");
// let texto2 = prompt("A ver que sale?");
// let numero2 = 5;
// let resultado = parseInt(numero) + numero2;

// console.info("Bienvenido " + nombre);
// console.info(`La suma de ${numero} + ${numero2} es =  ${resultado} `);
// console.info(`${texto1} ${texto2}`);

// Ejercicios Clase 2

// let a = prompt("Diga un numero");

// a = parseInt(a);

// if (a > 1000) {
//   console.log(`Su numero es ${a} y es mayor a 1000`);
// } else {
//   console.log(`Su numero es ${a} y es inferior a 1000`);
// }

// let b = prompt("Ingrese cualquier texto");

// if (b === "Hola") {
//   alert("Saludos compañero");
// } else {
//   console.info("Usted no ha saludado");
// }

// let c = prompt("Ingrese un numero del 1 al 50");

// c = parseInt(c);

// if (c >= 10 && c <= 50) {
//   alert("Su numero esta entre 10 y 50");
// } else {
//   console.info("Su numero no cumple los requisitos de la evaluacion");
// }

// Ejercicios Clase 3

// const repetirTextos = (cadena = "", veces = undefined) => {
//   if (!cadena) return console.warn("no ingresaste un texto");
//   if (veces === undefined)
//     return console.warn("No ingresaste numero a repetir del texto");
//   if (veces === 0) return console.error("El numero de veces no puede ser 0");
//   if (Math.sign(veces) === -1)
//     return console.error("El numero de veces no puede ser negativo");

//   for (let i = 1; i <= veces; i++) {
//     console.info(`${cadena},${i}`);
//   }
// };

// repetirTextos("Cadena", 5);

// Ejercicios Clase 4

// Funcion 1

// const contarCaracteres = (cadena = "") => {
//   if (!cadena) {
//     console.warn("No has ingresado ninguna cadena de texto");
//   } else {
//     console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
//   }
// };
// contarCaracteres("Hola");

// Funcion 2
// const capicua = (numero = 0) => {
//   if (!numero) return console.warn("No ingresaste un numero");
//   if (typeof numero !== "number")
//     return console.error(`El valor "${numero} ingresado, NO es un numero`);

//   numero = numero.toString();
//   let alReves = numero.split("").reverse().join("");

//   return numero === alReves
//     ? console.info(
//         `Si es capicua. Numero Original ${numero}, Numero al reves ${alReves}`
//       )
//     : console.info(
//         `No es capicua. Numero Original ${numero}, Numero al reves ${alReves}`
//       );
// };

// capicua(858);

// Funcion 3
// const descuentoProducto = (monto = undefined, descuento = 0) => {
//   if (monto === undefined) return console.warn("No has ingresado el monto");
//   if (typeof monto !== "number")
//     return console.error(`El valor ${monto} ingresado, no es un numero`);
//   if (monto === 0) return console.error("El monto no puede ser 0");
//   if (Math.sign(monto) === -1)
//     return console.error("El monto no puede ser negativo");
//   if (typeof descuento !== "number")
//     return console.error(`El valor ${descuento} ingresado, NO es un numero`);
//   if (Math.sign(descuento) === -1)
//     return console.error(" El descuento no puede ser negativo");

//   return console.info(
//     `${monto} - ${descuento}% = ${monto - (monto * descuento) / 100}`
//   );
// };

// descuentoProducto(5000, 5);

// Funcion nada mas para cumplir la consigna ;p
const avanzar = () => {
  confirm("Seguro quieres avanzar?");
};

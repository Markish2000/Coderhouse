const numero1 = parseInt(prompt("Ingrese el primer número"));
// const numero2 = parseInt(prompt("Ingrese el segundo número"));
// const palabra1 = prompt("Ingrese una palabra.");

// 3. Utilizando un bucle, mostrar la suma y el promedio de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado.

// 4. Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario.
// function mostrarEntreDosNumeros() {
//     for (let i = numero1 + 1; i < numero2; i++) {}
// };

// 5.  Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario.;
// function mostrarNumerosImparesEntreDosNumeros() {
//     for (let i = numero1 + 1; i < numero2; i++) {
//         if (i % 2 == 1) {}
//     }
// }












// const ventanaDeAutos = autos.map((auto) => auto.ventana);
// const puertaDeAutos = autos.map((auto) => auto.puerta);
// const partesDeAutos = [...ventanaDeAutos, ...puertaDeAutos];

// function tieneTechoBlanco(array) {
//     let result = false;
//     array.map((auto) => {
//         if (auto.techo === "Blanco") {
//             result = true;
//         }
//     });
//     console.log(result)
// };
// tieneTechoBlanco(
//     [{
//             techo: "Negro",
//             puerta: "Blanco",
//             ventana: "Transparente",
//         },
//         {
//             techo: "Verde",
//             puerta: "Rojo",
//             ventana: "Oscuro"
//         },{
//             techo:"Blanco"
//         }
//     ]);


// let array = ["Azul", "Rojo", "Verde"];
// let array1 = ["Violeta", "Rosa", "Gris", "Marrón"]

// const arrayTotal = [...array, ...array1]

// function tieneColor(color) {
//     return array.includes(color);
// };

// function sacarColor(color) {
//     if (tieneColor(color)) {
//         array = array.filter((item) => item !== color);
//     }
// };
// sacarColor("Violeta");

// const colores = {
//     ...arrayTotal
// };
// console.log(colores);
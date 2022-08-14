// const numero1 = parseInt(prompt("Ingrese el primer número"));
// const numero2 = parseInt(prompt("Ingrese el segundo número"));
const palabra1 = prompt("Ingrese una palabra.");

// 3. Utilizando un bucle, mostrar la suma y el promedio de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado.



// 4. Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario.
function mostrarEntreDosNumeros(){
    for (let i = numero1 + 1; i < numero2; i++){
    }
};


// 5.  Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario.;
function mostrarNumerosImparesEntreDosNumeros(){
    for (let i = numero1 + 1; i < numero2; i++){
        if (i % 2 == 1){
        }
    }
}

// 6. Realizar un programa que le pida al usuario cadenas de texto hasta que ingrese “Salir”. Una vez que sale, mostrarle en un alert los textos ingresados separados por una coma (,).
function mostrarCadenaDeTexto(){
    const array = [];
    if(palabra1 !== "Salir"){
        array.push(palabra1);
    } else {
        alert("array")
    };
};
mostrarCadenaDeTexto()

// 7. Realizar un programa donde se le pida al usuario ingresar un número positivo y luego mostrar en pantalla el conteo hacia atrás hasta llegar a 0. NOTA: Tener en cuenta validar que es un número positivo el que ingresó.
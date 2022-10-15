//Crea una 3 variables: vidas , partidasGanadas y numAleatorio
// A la variable vidas dale el valor de 3
// A la varible partidasGanadas dale el valor de 1
let vidas = 3;
let partidasGanadas = 1;
let numAleatorio;



//Muestra en la consola la variable vidas
//Muestra en la consola la variable partidasGanadas
console.log(vidas);
console.log(partidasGanadas);


//Genera un numero aleatorio con el metodo Math.random() y guardalo en la  variable numAleatorio
numAleatorio = Math.random();


//Crea una variable llamda numEntero
let numEntero;

//Utiliza el metodo Math.floor(), dentro de los parentesis de Math.floor multiplica la variable numAleatorio por 50 y guardalo en la variable numEntero
numEntero = Math.floor( numAleatorio * 50);

//Muestra en la consola la variable numAleatorio
console.log(numEntero);
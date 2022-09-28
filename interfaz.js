console.log(`Buenas`)

// Variables 
let inputNum1 = document.getElementById('num1') // obtener número 1 de usuario
let inputNum2 = document.getElementById('num2') // obtener número 2 de usuario
let inputResultado = document.getElementById('resultado') // obtener elemento del input 3



// Multiplicador
let botonMultiplicador = document.getElementById('multiplica') // Obtener el elemento
botonMultiplicador.addEventListener('click', multiplicador) // Llamar a la función multiplicador
function multiplicador(){
    inputResultado.value = inputNum1.value * inputNum2.value // Mostrar el resultado en el input 3
};

// Sumador
let botomSuma = document.getElementById('sum')
botomSuma.addEventListener('click', sumador)
function sumador(){
    inputResultado.value = parseInt(inputNum1.value) + parseInt(inputNum2.value)
};

// Restador
let botonResta = document.getElementById('res')

let resta = () => {
    inputResultado.value = inputNum1.value - inputNum2.value
};
botonResta.addEventListener('click', resta);


// Divisor
let botonDivision = document.getElementById('divi')
botonDivision.addEventListener('click', ()=>{
    inputResultado.value = inputNum1.value / inputNum2.value
});
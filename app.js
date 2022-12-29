// ///DECLARACION DE VARIABLES

// let numerito  ///declaracion de una variable

// ///asignacion
// numerito = 5

// ///declaracion e inicializacion

// let nombre = "Melina" ///inicializar una variable

// ////nombres para las variables
// /* - no pueden anteponerse numeros
//    - no pueden anteponerse caracteres especiales (solo guion bajo)
//    - tienen que ser coherentes con el valor que van a almacenar (funcion que van a cumplir)
//    - no puede contener espacios
//    */

// /* TIPOS DE DATOS
//   numericos / number --> INT (enteros) y FLOAT (flotantes)
//   string / cadenas de caracteres
// */

// let numerito1 = 2
// let cadena = "hola como estas"
// let cadena2 = '2'


// cadena = "yo estoy bien"


// /* CONSTANTES 
//  - no pueden alterar su valor una vez asignado
//  - la declaracion del nombre de la constante debe ser en mayuscula
// */
// const PI = 3.14 /// declaracion e inicializacion

// ///PI = 2.17 ESTO NO SE PUEDE

// /* OPERACIONES CON VARIABLES
// */

// /* tipo NUMBER */
// /* operaciones aritmeticas
//   / dividir
//   - + restar sumar
//   * multiplicar
//   % resto de una division
// */
// let numero1
// let numero2
// let resultado

// numero1 = 2
// numero2 = 3

// resultado = numero1 + numero2 ////5

// console.log("El resultado de la suma es: " + resultado)

// resultado = numero1 - numero2 ////-1

// console.log("El resultado de la resta es: " + resultado)

// resultado = numero2 / numero1 //// 3/2

// console.log("El resultado de la division es :" + resultado)

// resultado = numero1 * numero2 //// 6

// resultado = numero1 % 2 /// 0
// console.log(resultado)

// /* tipo STRING */

// /* concatenacion + */

// let texto1 = "hola"
// let texto2 = "chau"
// let resultadoTexto

// resultadoTexto = texto1 + texto2 //// "holachau"

// let unNumero = 3

// resultadoTexto = texto1 + unNumero //// "hola3"
// console.log("El texto es: " + resultadoTexto)
// resultadoTexto = unNumero + texto2 //// "3chau"

// resultadoTexto = texto1 + " y " + texto2 ////"hola y chau"


// /* INTERACCION CON EL USUARIO */

// ///PROMPT
// ///es una funcion que le pide a un usuario que ingrese un valor a traves de una ventana de dialogo
// ///PROMPT siempre nos trae un STRING
// ////camelCase para los nombres de funciones, variables, constantes, arrays... etc

// /* let textoPrompt 

// textoPrompt = prompt("Ingrese su nombre y apellido")

// console.log(textoPrompt)
//  */

// let unValor
// let otroValor
// let resultadoOp

// unValor = prompt("Ingrese un numero")
// otroValor = prompt("Ingrese otro numero")

// ///float -> flotante -> decimal
// ///Int -> entero -> (integer)

// ///voy a realizar una conversion de string a numerico (entero)
// unValor = parseFloat(unValor) ///parseo la variable unValor (string) a flotante (numerico)
// otroValor = parseFloat(otroValor)

// resultadoOp = unValor + otroValor

// ///console.log(resultadoOp)


// ///tipo NaN -> "Not a Number" (no es un numero ) quiso hacer alguna operacion con NUMERO y no era un numero
// /// quiso parsear un TEXTO ("hola como estas") a un numero y no pudo por lo tanto, el parseInt devolvio NaN
// /// y se arrastro a la operacion de suma con otroValor (NaN + otroValor = NaN)


// /* ALERT
//  muestra de un valor por la ventana de dialogo
//   */

//  alert("El resultado de la operacion es: " + resultadoOp)
//  alert("HOLA COMO ESTAS!")

let Peso
let Dolar = 355
let Euro = 382
let Real = 33.25

alert("Bienvenido a la q-eva. Ahora con 10% menos de estafas")

function Inicio() {
  let MenuPrincipal
  do {
    MenuPrincipal = parseInt(prompt("Elija una opcion: \n 1- Cambiar divisas \n 2- Consultar tipo de cambio \n 3- Salir"))
    switch (MenuPrincipal) {
      case 1:
        alert("Lamentablemente aun no podemos estafarte con esto. Intente nuevamente mas tarde")
        break
      case 2: MenuTipoCambio()
        break
      case 3:
        alert("Cositorto te va a extrañar, volve pronto")
        break
      default:
        alert("Opcion incorrecta. Intente nuevamente")
    }
  } while (MenuPrincipal != 3)
}

function MenuTipoCambio() {
  let TipoCambio
  do {
    TipoCambio = parseInt(prompt("Elija una opcion: \n 1- Peso a dolar \n 2- Peso a Euro \n 3- Peso a Real \n 4- Volver"))
    switch (TipoCambio) {
      case 1: Peso = parseInt(prompt("1 USD = 355 ARS \n Ingrese la cantidad de pesos a convertir"))
        Conversor(Peso, Dolar)
        alert("La cantidad de pesos ingresados " + Math.round(valor))
        break
      case 2: Peso = parseInt(prompt("1 EU = 382 ARS \n Ingrese la cantidad de pesos a convertir"))
        Conversor(Peso, Euro)
        alert("La cantidad de pesos ingresados " + Math.round(valor))
        break
      case 3: Peso = parseInt(prompt("1 R$ = 33.25 ARS \n Ingrese la cantidad de pesos a convertir"))
        Conversor(Peso, Real)
        alert("La cantidad de pesos ingresados " + Math.round(valor))
        break
      case 4: Inicio()
        break
      default:
        alert("Opcion incorrecta - Intente nuevamente")
    }
  } while (TipoCambio != 4)
}

function Conversor(Peso, divisa) {
  valor = Peso / divisa
  return valor
}

Inicio()
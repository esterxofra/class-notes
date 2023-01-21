// String methods 1

// Dada la string que tenéis a continuación, haced los console.log() 
// correspondientes para conseguir los siguientes outputs:

let stringToLog = '    JavaScript is fun! ';

console.log(stringToLog.length); // 23

console.log(stringToLog.trim().length); // 18 DUDAS we want ...// 'JavaScript is fun!'

console.log(stringToLog.split(" "), 5);// DUDAS... ['java', 'cript i', ' fun!']

console.log(stringToLog.toUpperCase()); // 'JAVASCRIPT IS FUN!'

console.log(stringToLog.charAt(18)); // 'f'

console.log(stringToLog.indexOf("avaScript")); // 5

// 15

console.log(stringToLog.replace("JavaScript", "CSS")); // 'CSS is fun!'



// -----------------------------------------------------------------------------

// String Methods 2

// Dada la string stringToChange, modificadla de tal manera que los console.log() 
// devuelvan los outputs comentados.

const original = 'Hello world!';
let stringToChange = 'Hello world!';

console.log(stringToChange.endsWith('o')); //false
console.log(stringToChange.endsWith('!'));// true

console.log(stringToChange.charAt(3)); //l
console.log(stringToChange.charAt(8)); // 'r'

console.log(stringToChange.includes('hello')); //false
console.log(stringToChange.includes('Hello')); // true

console.log(stringToChange.lastIndexOf('o')); //7
console.log(stringToChange.lastIndexOf('o',5)); // 4

console.log(stringToChange.indexOf('w')); //6
console.log(stringToChange.indexOf('a'));// -1

// ____

const original = 'Hello world!';
let stringToChange = 'Hello world!';
stringToChange = stringToChange.slice(0,5);
console.log(stringToChange.endsWith('o')); // true

// ____

const original = 'Hello world!';
let stringToChange = 'Hello world!';
stringToChange = stringToChange.

console.log(stringToChange.charAt(3)); // 'r'

// ____
console.log(stringToChange.includes('hello'));  // true
// ____
console.log(stringToChange.lastIndexOf('o'));  // 4
// ____
console.log(stringToChange.indexOf('w')); // -1


// -----------------------------------------------------------------------------

// Number methods 1

// En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día 
// un usuario. Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. 
// ¿Cómo mostrarías esa cifra correctamente para el usuario?

console.log((3100 / 30).toFixed(0));


// -----------------------------------------------------------------------------

// Number methods 2

// En una página de diseño quieren crear una paleta de colores, 
// para ello quieren coger un elemento representado de forma hexadecimal y 
// sumarle 336655. Si se pasa del valor 255 (en decimal) de la paleta de colores 
// empezará desde 00. Haz un ejemplo con el color #0000FF sabiendo 
// que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. 
// R = 00, G=00, B=ff.

let colorR = 0;
let colorG = 0;
let colorB = 255;
// HEX FF in decimal is 255

colorR += 33;
colorG += 66;
colorB += 55;

// Si se pasa del valor 255 (en decimal) de la paleta de colores 
// empezará desde 00. Como estoy ya en 255 al sumarle 1 ya me estoy pasando
// entonces quiero empezar desde 0. también podríamos hacer un condicioional con IF
colorB -= 255;

console.log(colorR, colorG, colorB); // 33 66 55

// Lo pasamos a hexadecimal de tipo string porque después quiero empalmarlos como una cadena de texto:
colorR = colorR.toString(16);
colorG = colorG.toString(16);
colorB = colorB.toString(16);

// .toString(16) --> lo convierte a hexadecimal
// .toString(2) --> lo convierte a binario
// .toString(36) --> lo convierte a #xlu1j

// despues de la letra z no hay otra letra que pueda coger por eso el número max 36

console.log(colorR, colorG, colorB); // 21 42 37

// cómo devuelvo el color?

let newColor = "#" + colorR + colorG + colorB;

console.log(newColor); #214237
// Este sería el color que estabamos buscando

console.log(255 === 0xff); true
// porque es el mismo número escrito de dos formas distintas
const revinter = require('revinter');

let expression = `se (e-mail >= 18) então 
mostrar("maior"); 
senão 
mostrar("menor");`;
let pattern = "se (${condição}) então \n${verdadeiro}; \nsenão \n${falso};";

console.log( revinter(expression, pattern) );
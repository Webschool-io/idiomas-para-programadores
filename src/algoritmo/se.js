const revinter = require('revinter')

let expression = `se (idade >= 18) então 
  mostrar("maior"); 
senão 
  mostrar("menor");`

let pattern = "se (${condição}) então \n${verdadeiro}; \nsenão \n${falso};"

console.log('\n\nExpressão: ' + expression)
console.log('\n\nSeparado: ', revinter(expression, pattern) )

// const 
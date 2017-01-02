const revinter = require('revinter');

// {pronomeInterrogativo} {verbo} {pronome} {substantivo}?
// Onde está minha maconha?
// Where is my weed?

let ptBR = { pronomeInterrogativo: 'Onde',
  verbo: 'está',
  pronome: 'minha',
  substantivo: 'maconha' }
let en = { pronomeInterrogativo: 'Where',
  verbo: 'is',
  pronome: 'my',
  substantivo: 'weed' }


let idiomas = {
  ptBR, en
}

let expression = `Onde(1) está(2) minha(3) maconha(4)?(5)`
let pattern = "${pronomeInterrogativo}(1) ${verbo}(2) ${pronome}(3) ${substantivo}(4)${pontuacao}(5)"
let interrogativa = revinter(expression, pattern)

console.log( revinter(expression, pattern) );
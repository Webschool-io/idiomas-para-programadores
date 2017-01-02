const chai = require('chai')
const expect = chai.expect
const revinter = require('revinter')

// {pronomeInterrogativo} {verbo} {pronome} {substantivo}?
// Onde está minha maconha?
// Where is my weed?
// Wo ist meine marihuana?

let ptBR = { pronomeInterrogativo: 'Onde',
  verbo: 'está',
  pronome: 'minha',
  substantivo: 'maconha' }
let en = { pronomeInterrogativo: 'Where',
  verbo: 'is',
  pronome: 'my',
  substantivo: 'weed' }
let de = { pronomeInterrogativo: 'Wo',
  verbo: 'ist',
  pronome: 'meine',
  substantivo: 'marihuana' }


let idiomas = {
  ptBR, en
}

let expression = `Onde(1) está(2) minha(3) maconha(4)?(5)`
let pattern = "${pronomeInterrogativo}(1) ${verbo}(2) ${pronome}(3) ${substantivo}(4)${pontuacao}(5)"
let interrogativa = revinter(expression, pattern)
let phrase = expression.split(/\([0-9]\)/).join(' ')

const pronouns = {
    ptBR: {
      interrogativos: ['Onde', 'Quando']
    },
    en: {
      questions: ['Where', 'When']
    }
}

const verbs = {
    ptBR: {
      presente: {
        estar: ['está', 'estamos']
      }
    },
    en: {
      present: {
        be: ['is', 'are']
      }
    }
}

const lang = 'ptBR'
const pronoun = 'interrogativos'
const time = 'presente'
const verb = 'estar'

describe(`Testando oração interrogativa no Presente: 
    ${phrase}\n`,  () => {

  const pontuacao = interrogativa.pontuacao
  const pronomeInterrogativo = interrogativa.pronomeInterrogativo
  const verbo = interrogativa.verbo

  it('deve finalizar com ?\n\t Testando: ' + pontuacao, () => {
    expect(pontuacao).to.equal('?')
  })
  it('deve iniciar com um pronome interrogativo\n\t Testando: ' + pronomeInterrogativo, () => {
    expect(pronomeInterrogativo).to.be.oneOf(pronouns[lang][pronoun])
  })
  it('verbo deve existir\n\t Testando: ' + verbo, () => {
    expect(verbo).to.be.oneOf(verbs[lang][time][verb])
  })
  it(`verbo deve vir após o pronome interrogativo
      Testando: ${pronomeInterrogativo} ${verbo}`, () => {
    expect(pronomeInterrogativo+' '+verbo)
      .to.equal(pronouns[lang][pronoun][0]+' '+verbs[lang][time][verb][0])
  })
})
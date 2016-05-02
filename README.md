# Idiomas Para Programadores

Como aprender um idioma como um programador.

Eu sempre vejo a galera começando a aprender o vocabulário quando inicia os estudos em um novo idioma, porém isso para mim é muito ilógico como um programador.

> Ueh por quê?

Porque traduzir 1 palavra para outro idioma qualquer tradutor faz, agora traduzir todas as frases semanticamente corretas, ahhhh isso é outros 500...

**Vou te explicar da ótica de um programador.**

Quando você inicia o estudo de uma linguagem de programação, imagine que você só sabe Português por hora, o que você deve aprender por primeiro?

Caso você seja um programador real (LOL) com certeza você deve ter respondido: Algoritmo e Lógica.

Correto?

**Ótimo! E porquê isso?**

Porque antes de aprendermos qualquer linguagem de programação precisamos aprender como elas funcionam sem precisar aprender nenhuma.

**Mas como assim?**

Isso acontece porque Algoritmo e Lógica são as bases para se programar qualquer coisa.

**Então se elas são tão importantes assim, o que elas ensinam?**

Basicamente, Algoritmos te ensina como criar um passo-a-passo, em Português mesmo, para resolver algum problema e a Lógica te ensina a pensar, te ensina a ponderar mais de 1 premissa.

**Hein!??**

Vou lhe dar um exemplo **ULTRA SIMPLES**:

Para eu ir ao cinema precisam existir 2 condições:

- ter dinheiro
- ter tempo livre

Nesse caso se as duas precisam existir para que eu possa ir ao cinema podemos escrever dessa forma:

```
(ir ao cinema) = ter dinheiro E ter tempo livre
```

Então trocando as premissas por valores teremos:

```
(ir ao cinema) = TRUE E TRUE
```

Beleza, então sabemos que eu preciso que essas duas premissas sejam verdadeiras para que a expressão `ir ao cinema` seja verdadeira.

Mas o que acontece se qualquer uma delas for falsa?

```
(ir ao cinema) = ter dinheiro(FALSE) E ter tempo livre(TRUE)
```

Se tenho tempo livre mas não tenho dinheiro para ir ao cinema, qual será o resultado dessa expressão?

**LOGICAMENTE** será falsa, correto?

E se eu trocar esse `E` por um `OU`???

```
(ir ao cinema) = ter dinheiro OU ter tempo livre
```

Se tenho tempo livre ou tenho dinheiro para ir ao cinema, qual será o resultado da expressão?

```
(ir ao cinema) = ter dinheiro(FALSE) OU ter tempo livre(TRUE)
```

**LOGICAMENTE** será verdadeira.

Agora eu lhe pergunto:

> Conhecendo apenas esses 2 exemplos você consegue inferir qual a diferença do E para o OU?

Aposto que você deve ter percebido que na expressão com `E` eu preciso que **todas as premissas sejam verdadeiras** para que a expressão também seja.

Diferentemente no `OU` havendo **apenas uma premissa verdadeira** toda a expressão também será verdadeira.

Agora vou lhe dar um exemplo com código:

```js
var idade = 19;
var sexo = 'M';
// && = E
if(idade >= 18 && sexo === 'M') {
  alert('Homem maior de idade');
}
```

No `if`(se) testamos se a idade é maior ou igual a 18, `idade >= 18`, E se o sexo é masculino, `sexo === 'M'`.

Então imagine que você não conhece lógica e fez assim:

```js
var idade = 19;
var sexo = 'M';
// || = OU
if(idade >= 18 || sexo === 'M') {
  alert('Homem maior de idade');
}
```

Você acha que essa lógica dará o mesmo resultado que eu queria no exemplo com `E`?

Então! A lógica te faz criar expressões onde você pode analisar o valor de cada premissa que faz parte da expressão e após a analise do valor de todas você irá analisá-las em conjunto, por exemplo:


```js
var idade = 19;
var sexo = 'M';
// || = OU
if(idade >= 18 && (sexo === 'M' || sexo === 'F')) {
  alert('Pessoa maior de idade');
}
```

Nesse caso testarmos o valor de `idade >= 18` com `(sexo === 'M' || sexo === 'F')`, isso é apenas um exemplo bem simples de teste lógico.

Imagine que temos apenas:

- AND
- OR
- NOT

Para se trabalhar com essas premissas, porém em cada linguagem de programação a forma de escrever isso pode ser diferente.

Tudo bem, dei apenas uma breve introdução sobre [Álgebra Booleana](https://pt.wikipedia.org/wiki/%C3%81lgebra_booliana) e com certeza você deve ter notado que testamos apenas 2 valores:

- TRUE
- FALSE

Ou seja, por hora temos apenas 3 operadores lógicos e apenas 2 valores possíveis de serem testados.

Agora só falta o que?

> Algoritmo!

Aí sim chegamos na disciplina que te ensina a **resolver problemas** escrevendo o passo-a-passo para isso.

Vamos utilizar o exemplo de ir ao cinema, imagine então que aquela expressão é verdadeira e você vai ao cinema, esse pode ser seu algoritmo:

```
1. Tomar banho
2. Arrumar-se
3. Pegar carteira
4. Chamar o táxi
5. Pegar o táxi para o cinema
6. Comprar o ingresso
7. Entrar na sala.
```

Bem simples não?

Pois então isso é um Algortimo, agora eu lhe pergunto:

> Você precisou de algo mais do que apenas saber ler e escrever?
> Não!

**É por isso que digo que elas devem ser ensinadas ANTES da matemática! Pois você precisa de Algoritmo para resolver qualquer cálculo, mas não precisa de Matemática para resolver qualquer Algortimo.**

Mas tudo bem esse não é o foco desse artigo.

Vamos migrar esse conhecimento para o mundo real, onde a Lógica pode ser a sintaxe e o Algoritmo a semântica do Português.

> Sintaxe é a parte da gramática que estuda a disposição das palavras na frase e a das frases no discurso, bem como a relação lógica das frases entre si.

*fonte: [http://www.soportugues.com.br/secoes/sint/](http://www.soportugues.com.br/secoes/sint/)*


> Semântica estuda o significado e a interpretação do significado de uma palavra, de um signo, de uma frase ou de uma expressão em um determinado contexto.

*fonte: [http://www.soportugues.com.br/secoes/sint/](http://www.soportugues.com.br/secoes/sint/)*

*Tudo bem que as 2 parecem muito mais com a Lógica do que com Algoritmo, mas isso é para efeito de demonstração.*

Agora pense comigo:

> Nós programadores aprendemos as estruturas e regras da programação sem necessariamente utilizar uma linguagem de programação específica.

> Para que possamos aprender e usar qualquer linguagem de programação que aparecer, independente de qual seja.

Isso me levou a pensar em uma forma diferente de aprender novos idiomas.

**Como?**

Como vimos anteriormente, é mais interessante aprendermos as regras estruturais antes de aprender o vocabulário.

E isso pode ser provado te perguntando:

> É mais fácil aprender palavras novas de um idioma ou suas regras de formação de frases?

**Claramente é mais fácil aprender palavras novas.**

Então por que eu acho isso errado?

Novamente vou lhe fazer outra pergunta:

> Quantas formas existem para se escrever uma frase imperativa?

Poucas correto? E agora...

> Quantas palavras você pode colocar em uma frase imperativa?

Conseguiu perceber?

Pode ser muito mais difícil começar aprendendo as estruturas das frases, porém você consegue reutilizar esse conhecimento **MUITO** mais, precisando apenas do que?

> Das palavras.

Então imagine comigo que em vez de você começar aprendendo o vocabulário, você comece aprendendo como estruturar os diferentes tipos de frases, como:

- afirmativa
- interrogativa
- imperativa

Para efeito de demonstração vamos analisar a estrutura de uma frase interrogativa:

```
Onde está minha maconha?
```

Podemos separá-la assim:

```
{Pronome interrogativo} {verbo} {pronome} {substantivo}?
```

E em inglês ela fica:

```
Where is my weed?
````

A qual utiliza a mesma estrutura anterior, porém se analisarmos uma frase que possui um adjetivo as coisas já mudam:

```
Seus olhos verdes são lindos.
```

Estrutura:

```
{Pronome} {substantivo} {adjetivo} {verbo} {adjetivo}.
```

Em inglês:

```
Your green eyes are beautiful.
```

Estrutura:

```
{Pronome} {adjetivo} {substantivo} {verbo} {adjetivo}.
```

Logo se nós aprendermos a estrutura da mesma frase, no nosso idioma e no estudado, ficará muito mais fácil colocar as palavras, quando aprender, nos lugares corretos.

Agora imagine que você ainda não conhece muitas palavras do idioma, mas conhece muito bem como criar frases corretamente.

Não fica muito mais fácil de você aprender as palavras em cima do contexto no qual você está inserido?

Pelo menos para nós programadores, **ou pelo menos para mim**, essa seria a forma mais lógica de aprender um idioma pois é dessa forma que aprendemos outras linguagens de programação.

**Se alguém se animar a gente toca esse conceito louco, pois já tenho várias ideias para facilitar essa metodologia. <3**

*Continuação*

Antes de criamos essa metodologia precisamos definir certos padrões que existem na maioria dos idiomas, como:

- tipos de frase
- tipos de palavras

**Para essa continuação preciso da ajuda de alguém de Letras!**

## Tipos de frase

Vamos listar as 3 mais básicas:

- afirmativa
- interrogativa
- imperativa


## Tipos de palavras

Alguns tipos de palavras:

- substantivo
- pronome
- preposição
- artigo
- verbo
- conjunção
- advérbio
- adjetivo

## Estrutura Frase Afirmativa

## Estrutura Frase Negativa

## Estrutura Frase Interrogativa

## Estrutura Frase Imperativa

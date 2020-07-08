# Prática: Slimes e meteoros

_OBS: Este documento é uma adaptação do enunciado escrito e publicado no Moodle pelo professor [Flávio Coutinho](https://github.com/fegemo)_

Pré-requisitos:

1. Um navegador
2. Um editor de texto (sugiro [VS Code](https://code.visualstudio.com/) com a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))

Objetivos:

1. Aprofundar na programação JavaScript
2. Conhecer o elemento HTML canvas e como podemos desenhar nele com JavaScript

## Atividade

Nesta atividade você deve criar um cenário e personagens de um futuro jogo em que você controla um slime e precisa fugir de meteoros (?). Se você quiser, pode ser um meteoro fugindo de slimes também. Ou outra coisa - use sua criatividade. Na atividade seguinte, vamos colocar essa turminha pra mexer e deixar mais próximo de um jogo.

## Exercício 1: Básico da página

Crie uma paginazinha simples que contenha um canvas, com suas dimensões definidas. Opcionalmente, coloque uma singela bordinha pra ficar fácil ver onde começa e onde termina.

## Exercício 2: Desenhando

Você deve arrumar uma forma de representar visualmente:

1. O jogador (ex, slime)
2. Os inimigos (ex, meteoros)
3. Tiro (ex, míssil)
4. Cenário (ex, a fenda do bikini)

Você pode usar tanto imagens (ctx.drawImage) quanto as figuras geométricas (ctx.beginPath, ctx.fill etc.). Contudo, não pode ser tudo imagem ou tudo geometria - tem que ter pelo menos uma das coisas feitas com cada "técnica".

## Exercício 3: Personagem segue mouse

Faça o personagem principal seguir a posição do mouse.

## Desafio 1: Animação com spritesheet

Crie uma animação usando a técnica de spritesheets. Você deve seguir esta [explicação explorável sobre animação com spritesheets](https://fegemo.github.io/spritesheet-animation) (LINK AINDA INDISPONÍVEL) para poder usar essa técnica para, por exemplo, o personagem principal.

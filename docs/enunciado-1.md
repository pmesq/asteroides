# Atividade: meteoros, tiros e colisão

_OBS: Este documento é uma adaptação do enunciado escrito e publicado no Moodle pelo professor [Flávio Coutinho](https://github.com/fegemo)_

Nesta atividade você deve dar continuidade [àquela dos slimes](enunciado-0.md) e implementar novas funcionalidades no seu jogo.

## Exercício 0: explicação explorável sobre animações com spritesheets

O primeiro passo da atividade é brincar com o conceito de animações com _spritesheets_. Para isso, você deve ler e interagir com uma explicação explorável sobre esse tema carinhosamente feita pelo professor para vocês: [Explicação Explorável sobre Animações com Spritesheets](https://fegemo.github.io/spritesheet-animation).

## Exercício 1: meteoros se movimentando

Faça com que os inimigos em seu jogo se movimentem e os "recicle" quando saírem da tela.

## Exercício 2: colisão entre inimigo e jogador

Escolha uma forma de detecção de colisão (ex, por círculos ou por retângulos) e faça a verificação de colisão dos inimigos com o personagem do jogador. Se houver colisão, "recicle" o inimigo e subtraia uma vida do jogador.

## Exercício 3: tiros

Permita ao jogador atirar ao apertar um botão ou ao clicar. E verifique a colisão dos tiros com os inimigos. Não se esqueça de esvaziar a lista de tiros pra que ela não fique acumulando tiros que nem existem mais porque saíram da tela.

## Desafio 1: contabilize pontos

A cada inimigo destruído, o jogador acumula pontos. Desenhe na tela a quantidade de pontos usando `ctx.fillText(texto, x, y)`.

## Desafio 2: barra de vida

Faça uma barrinha de vida indicando quanto de HP o jogador ainda possui.

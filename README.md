# Transform and Conquer - Projeto e Análise de Algoritmos

![image](https://user-images.githubusercontent.com/83835393/171540760-42181cb2-0cc5-4cf6-8da5-b96232ac1dac.png)

Universidade Federal do Tocantins - Ciência da Computação

Pedro Thomas Barros de Oliveira, Murilo Alves Melo & Pablo Henrique Silva


## 1. Introdução

Transform and Conquer é uma técnica cuja ideia principal é transferir o problema para algumas versões mais fáceis ou semelhantes usando algum procedimento e depois resolver essas versões mais fáceis ou mais simples e combinar essas versões para obter a solução da real.

#### Introdução do BitTorrent
O objetivo desse trabalho é realizar a implementação e comparação de desempenho da técnica divisão e conquista. O programa utilizado foi o Internet Download Manager.

O ambiente onde foram desenvolvidos os testes possui as seguintes configurações: 
- Oi Internet na Fibra - Banda Larga 200MBps
- Banda: 5GHz
- Adaptador de rede: Intel(R) Dual Band Wireless-AC 3165

#### Especificações do BitTorrent

A avaliação é feita considerando o tempo de execução do download nas seguintes condições:

- Download por link direto e download pelo IMD(Internet Download Manager) 
- Os arquivos foram armazenados tem uma nuvem do Google Drive
- O tamanho dos arquivos foram: 571Mb, 1GB, 2GB, 3GB e 12GB


#### Resultados

![Captura de tela 2022-06-29 211815](https://user-images.githubusercontent.com/83835393/176569400-b08c3afb-c8f9-45f8-8a71-e13416729bd2.png)

#### Implementação de algoritmos

A implementação é baseada em 2 códigos sendo um em C e outro em Javascript.

- HORSPOOL + Transform and Conquer

A idéia básica do algoritmo BMH é caminhar na comparação do texto com o padrão, o algoritmo obtém informação sobre o texto que está sendo pesquisado. uma vez que ocorra uma falha numa comparação em  linha  possa passar para um ponto mais à frente no texto.

São executados 2 testes nesse algoritmo que buscam pela palavra "Schofield" em uma lista composta por mais de 44mil linhas, porém em um teste é executada a busca por força bruta e no outro utilizando Horspool e mergesort.

![image](https://user-images.githubusercontent.com/91572824/176574365-f25475d2-981a-42f1-8413-81209dc33354.png)

Teste 1 (Força bruta): 

Foram encontradas 3 ocorrencias da palavra

Ocorreram 3342327 trocas

O algoritmo levou 13 milisegundos para ser executado

![image](https://user-images.githubusercontent.com/91572824/176575260-9f7267a8-1db7-46d1-bb0e-6f9b2377e1af.png)

Teste 2 (HORSPOOL + Transform and Conquer): 

Foram encontradas 3 ocorrencias da palavra

Ocorreram 457399 trocas

O algoritmo levou 23 milisegundos para ser executado

Conclusão: O algoritmo colocado em teste teve um desempenho pior em tempo se comparado com o algoritmo de força bruta, porém o algoritmo de força bruta efetuou quase dez vezes mais trocas do que o de HORSPOOL + Transform and Conquer, o que dependendo do caso poderia gerar uma exaustão maior na máquina que o executa.

- PONTOS PROXIMOS

consiste na demonstração de um canvas 2D com pontos onde são usados os algoritmos de Merge Sort & Closest Pair of Points utilizando a aproximação de Dividir e Conquistar para melhor eficiência.


![image](https://user-images.githubusercontent.com/91572824/176576727-88507895-1429-488f-b031-055f71f0621c.png)


![image](https://user-images.githubusercontent.com/91572824/176576796-41654120-4145-4b7f-a8d2-3758473eafcd.png)


![image](https://user-images.githubusercontent.com/91572824/176576900-ceb5fa5f-8854-4dee-b8db-a7ea8a400848.png)

## 2. Objetivo
O objetivo do projeto é analisar a estratégia Transform and Conquer verificando o quao e efetiva e mostrando alguns casos de uso do dia a dia.

#### Objetivo do BitTorrent
Como exemplo, vamos citar um programa que muitos conhecem, o BitTorrent, desenvolvido em 2001, uma forma que permitia baixar as partes dos arquivos de varias outras pessoas ao mesmo tempo, resultando então na velocidade do download.

## 3. Conclusão
 Portando conclui-se que o Transform and conquer é uma boa estratégia, Tendo seus pontos fortes e fracos pois utiliza o merge sort como base sendo assim com base nos algoritmos apresentados Tranform and conquer e importante para varias tarefas do dia a dia tendo seu lugar na Implementação de algoritmos!

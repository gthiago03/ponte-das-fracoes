# 🌉 Ponte das Frações

> **Jogo educativo digital que integra o ensino da Matemática (Adição de Frações) aos princípios da Computação na Educação Básica.**

🎮 **[CLIQUE AQUI PARA JOGAR A VERSSÃO FINAL](https://gthiago03.github.io/ponte-das-fracoes/)**

---

## 📋 Sobre o Projeto

O **Ponte das Frações** é um jogo educativo interativo em estética *16-bits* desenvolvido para transformar a aprendizagem abstrata da matemática em um desafio prático e envolvente.

O jogador assume o papel de um **Príncipe** em uma jornada para resgatar a **Princesa** no topo da montanha. Ao longo do caminho, há **10 pontes destruídas** sobre abismos. Para reconstruir cada ponte e avançar, o estudante deve selecionar e somar blocos de frações até atingir exatamente o tamanho do vão do abismo (a fração-alvo).

---

## 🎯 Conteúdo Acadêmico e Público-Alvo

* **Público-Alvo:** Estudantes do Ensino Fundamental (5º ao 7º ano).


* **Matemática (Unidade Temática: Números):**
* Somas de frações com **denominadores iguais** (Fases 1 a 6).


* Somas de frações com **denominadores diferentes** via Mínimo Múltiplo Comum (MMC) e frações equivalentes (Fases 7 a 10).





---

## 💻 Mapeamento de Habilidades — BNCC Computação

O jogo **Ponte das Frações** foi estruturado para desenvolver as habilidades do eixo **Pensamento Computacional** nos estudantes do **Ensino Fundamental (5º ao 7º ano)**, conforme a norma da **BNCC Computação (Anexo ao Parecer CNE/CEB nº 2/2022)**:

| BNCC Computação | Descrição | Aplicação no Jogo |
| :--- | :--- | :--- |
| **(EF15CO02)** | Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções. | O estudante analisa e executa a sequência de passos necessária para selecionar os blocos de fração e atender às seleções condicionais do abismo. |
| **(EF15CO04)** | Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções. | O desafio de cobrir o abismo é decomposto em partes menores (analisar a fração-alvo, escolher blocos fracionários menores e somá-los para compor a solução total). |
| **(EF69CO02)** | Elaborar algoritmos que envolvam instruções sequenciais, de repetição e de seleção usando uma linguagem de programação. | O estudante interage com o algoritmo do jogo, testando seleções e sequências condicionais de adição de frações a cada rodada. |
| **(EF69CO06)** | Comparar diferentes casos particulares (instâncias) de um mesmo problema, identificando as semelhanças e diferenças entre eles, e criar um algoritmo para resolver todos, fazendo uso de variáveis (parâmetros) para permitir o tratamento de todos os casos de forma genérica. | O estudante compara fases com denominadores iguais (fases 1 a 6) e diferentes (fases 7 a 10), identificando semelhanças e diferenças para aplicar a estratégia de cálculo adequada. |

---

## 🧠 Pilares do Pensamento Computacional

* **Decomposição:** Divisão da missão principal em 10 subproblemas sequenciais e decomposição do cálculo da fração em etapas de seleção.


* **Reconhecimento de Padrões:** Identificação da regra da adição de numeradores quando os denominadores são idênticos vs. conversão para denominadores comuns.


* **Abstração:** Foco nos valores fracionários essenciais e no comprimento numérico do vão, ignorando detalhes estéticos da paisagem.


* **Algoritmos e Depuração:** Formatação do algoritmo numérico para testar a ponte; execução do processo de *debugging* em caso de erro no tamanho acumulado.



---

## 🎮 Mecânicas do Jogo

1. **Progressão de Níveis:** 10 fases ordenadas em um mapa contínuo com bandeiras numeradas rumo ao topo.


2. **Abismo e Fração-Alvo:** Cada fase gera aleatoriamente um valor fracionário que representa o vão do penhasco.


3. **Barra da Ponte Dinâmica:** A barra visual cresce e reduz proporcionalmente ao valor acumulado da soma dos blocos.


4. **Sistema de Vidas e Pontuação:**
* **3 Vidas Inicialmente (❤️ ❤️ ❤️)**.


* **Acerto (+10 pontos):** O Príncipe atravessa o abismo até a bandeira e avança de fase.


* **Erro ao Testar (-10 pontos e -1 Vida):** Ponte fica mais curta ou mais longa que a fração-alvo.


* **Limpar Seleção (-2 pontos):** Reinicia os blocos selecionados na rodada.





---

## 🛠️ Tecnologias Utilizadas

* **Linguagens:** HTML5, CSS3, JavaScript (ES6+).
* **Hospedagem:** GitHub Pages.
* **Estética:** Visual Pixel Art 16-bits.

---

## 👤 Autor e Créditos

* **Desenvolvedor:** José Thiago Gomes da Silva


* **Curso:** Licenciatura em Computação — UAEADTec / UFRPE


* **Disciplina:** Pensamento Computacional

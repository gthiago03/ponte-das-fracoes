# 🌉 Ponte das Frações

> **Jogo educativo digital que integra o ensino da Matemática (Adição de Frações) aos princípios da Computação na Educação Básica.**

🎮 **[CLIQUE AQUI PARA JOGAR A VERSSÃO FINAL](https://www.google.com/search?q=https://SEU_USUARIO.github.io/ponte-das-fracoes/)** *(substitua pelo seu link do GitHub Pages)*

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

O jogo foi planejado e codificado alinhado à norma da **BNCC Computação** (Complemento à BNCC - Resolução CNE/CEB nº 2/2022), abordando o eixo do **Pensamento Computacional**:

| Código BNCC Computação | Descrição da Habilidade | Aplicação Prática no Jogo |
| --- | --- | --- |
| **(EF05CO01)** | Criar e testar algoritmos para solucionar problemas passo a passo.

 | O jogador precisa criar uma sequência ordenada de seleção de blocos fracionários para reconstruir o vão da ponte e testar sua hipótese.

 |
| **(EF06CO01)** | Decompor problemas complexos em partes menores e identificar padrões.

 | O objetivo geral (salvar a princesa) é decomposto em 10 fases. O jogador identifica o padrão de manter denominadores iguais ou calcular o MMC.

 |
| **(EF06CO02)** | Testar e depurar (*debugging*) soluções, identificando erros e promovendo correções.

 | Se a ponte construída for maior ou menor que o alvo, a validação falha (erro). O jogador deve analisar a diferença, depurar a lógica e selecionar uma nova combinação.

 |
| **(EF07CO01)** | Utilizar lógica, variáveis e estruturas condicionais na simulação de algoritmos e jogos.

 | Manipulação das variáveis de estado do jogo (`Tamanho_Ponte`, `VaoDoAbismo`, `Vidas`, `Pontuação`) através de estruturas condicionais (`se/senão`).

 |

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

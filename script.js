// VARIÁVEIS DE ESTADO GLOBAL
let fase = 1;
let vidas = 3;
let pontos = 0;
let ultimoDenominador = 0;

// SELEÇÃO DE PERSONAGEM
let personagemEscolhido = 'principe'; // 'principe' ou 'princesa'

// TUTORIAL DIDÁTICO EXPANDIDO COM PASSO A PASSO DO MMC E EXEMPLOS
let passoTutorial = 0;
let falasTutorial = [
  "Olá! Preciso da sua ajuda para construir 10 pontes sobre os abismos e resgatar a Princesa!",
  "COMO FUNCIONA O JOGO: Observe a fração Alvo do Abismo e escolha os blocos de fração que, ao serem somados, preenchem o vão exatamente no tamanho correto.",
  "DENOMINADORES IGUAIS (Fases 1 a 6): Como as partes têm o mesmo tamanho, mantemos o número de baixo (denominador) e somamos apenas os de cima (numeradores)! Exemplo: 1/5 + 2/5 = 3/5.",
  "PASSO 1 - DENOMINADORES DIFERENTES (Fases 7 a 10): Primeiro, encontramos o MMC (Mínimo Múltiplo Comum) dos denominadores para achar a base igual! Exemplo: para somar 1/3 e 1/4, o MMC entre 3 e 4 é 12.",
  "PASSO 2 - FRAÇÕES EQUIVALENTES: Transformamos cada fração! Divida o MMC pelo número de baixo e multiplique pelo de cima. Na fração 1/3: (12 ÷ 3) × 1 = 4 → vira 4/12. Na fração 1/4: (12 ÷ 4) × 1 = 3 → vira 3/12.",
  "PASSO 3 - SOMA FINAL: Com os denominadores iguais a 12, somamos apenas os números de cima: 4/12 + 3/12 = 7/12!",
  "Tenha um bom jogo e divirta-se somando frações!"
];

let alvoNum = 0;
let alvoDen = 0;
let somaNum = 0;
let somaDen = 0;
let blocosAtuais = [];
let animandoPrincipe = false;

// SELEÇÃO DE PERSONAGEM
function selecionarPersonagem(tipo) {
  tocarSom('clique');
  personagemEscolhido = tipo;

  const resgatadoTexto = personagemEscolhido === 'principe' ? 'a Princesa' : 'o Príncipe';
  falasTutorial[0] = `Olá! Preciso da sua ajuda para construir 10 pontes sobre os abismos e resgatar ${resgatadoTexto}!`;

  const avatarTuto = document.getElementById('avatar-principe-tuto');
  if (avatarTuto) avatarTuto.src = `assets/imagens/${personagemEscolhido}.png`;

  const imgJogador = document.getElementById('img-principe');
  if (imgJogador) imgJogador.src = `assets/imagens/${personagemEscolhido}.png`;

  irParaTela('tela-tutorial');
}

// SOM SEGURO
function tocarSom(tipo) {
  try {
    const el = document.getElementById(`som-${tipo}`);
    if (el) {
      el.currentTime = 0;
      const p = el.play();
      if (p !== undefined) p.catch(() => {});
    }
  } catch (e) {}
}

function atualizarBGM(idSomAtivo) {
  try {
    const bgmGameplay = document.getElementById('som_gameplay');
    const bgmVitoria = document.getElementById('som_vitoria');

    if (idSomAtivo === 'som_gameplay') {
      if (bgmVitoria) { bgmVitoria.pause(); bgmVitoria.currentTime = 0; }
      if (bgmGameplay) {
        bgmGameplay.loop = true;
        if (bgmGameplay.paused) {
          bgmGameplay.currentTime = 0;
          bgmGameplay.play().catch(() => {});
        }
      }
    } else if (idSomAtivo === 'som_vitoria') {
      if (bgmGameplay) { bgmGameplay.pause(); bgmGameplay.currentTime = 0; }
      if (bgmVitoria) {
        bgmVitoria.loop = false;
        if (bgmVitoria.paused) {
          bgmVitoria.currentTime = 0;
          bgmVitoria.play().catch(() => {});
        }
      }
    }
  } catch (e) {}
}

// BANNER DE NOTIFICAÇÃO
let timerMensagem;
function mostrarMensagemJogo(texto, tipo = 'alerta', duracao = 3000) {
  const msgEl = document.getElementById('mensagem-jogo');
  if (!msgEl) return;
  msgEl.innerText = texto;
  msgEl.className = `mensagem-oculta ${tipo}`;

  clearTimeout(timerMensagem);
  void msgEl.offsetWidth;
  msgEl.className = `${tipo}`;

  timerMensagem = setTimeout(() => {
    msgEl.className = `mensagem-oculta ${tipo}`;
  }, duracao);
}

// NAVEGAÇÃO DE TELAS
function irParaTela(idTela) {
  tocarSom('clique');

  const todasTelas = document.querySelectorAll('.tela');
  for (let i = 0; i < todasTelas.length; i++) {
    todasTelas[i].classList.remove('ativa');
  }

  const overlayOver = document.getElementById('overlay-gameover');
  if (overlayOver) overlayOver.className = 'modal-oculto';

  const telaAlvo = document.getElementById(idTela);
  if (telaAlvo) {
    telaAlvo.classList.add('ativa');
  }

  if (idTela === 'tela-menu' || idTela === 'tela-personagem' || idTela === 'tela-tutorial') {
    atualizarBGM('som_gameplay');
  } else if (idTela === 'tela-vitoria') {
    atualizarBGM('som_vitoria');
  }

  if (idTela === 'tela-tutorial') {
    passoTutorial = 0;
    atualizarTextoTutorial();
  }
}

// TUTORIAL: AVANÇAR E VOLTAR AS FALAS
function avancarTutorial(event) {
  if (event && event.stopPropagation) event.stopPropagation();

  if (passoTutorial < falasTutorial.length - 1) {
    passoTutorial++;
    atualizarTextoTutorial();
    tocarSom('clique');
  }
}

function voltarTutorial(event) {
  if (event && event.stopPropagation) event.stopPropagation();

  if (passoTutorial > 0) {
    passoTutorial--;
    atualizarTextoTutorial();
    tocarSom('clique');
  }
}

function atualizarTextoTutorial() {
  const txt = document.getElementById('texto-tutorial');
  const ind = document.getElementById('indicador-passo-tuto');
  const btnAnt = document.getElementById('btn-tuto-anterior');
  const btnProx = document.getElementById('btn-tuto-proximo');

  if (txt) txt.innerText = falasTutorial[passoTutorial];
  if (ind) ind.innerText = `${passoTutorial + 1}/${falasTutorial.length}`;

  if (btnAnt) btnAnt.style.visibility = (passoTutorial === 0) ? 'hidden' : 'visible';
  if (btnProx) btnProx.style.visibility = (passoTutorial === falasTutorial.length - 1) ? 'hidden' : 'visible';
}

// INICIAR GAMEPLAY
function iniciarJogo(event) {
  if (event && event.stopPropagation) event.stopPropagation();
  fase = 1;
  vidas = 3;
  pontos = 0;
  
  const overlayOver = document.getElementById('overlay-gameover');
  if (overlayOver) overlayOver.className = 'modal-oculto';

  irParaTela('tela-gameplay');
  carregarFase();
}

function reiniciarParaMenu() {
  tocarSom('clique');
  const overlayOver = document.getElementById('overlay-gameover');
  if (overlayOver) overlayOver.className = 'modal-oculto';
  irParaTela('tela-menu');
}

// AUXILIARES MATEMÁTICOS
function mdc(a, b) {
  return b === 0 ? a : mdc(b, a % b);
}

function mmc(a, b) {
  if (a === 0 || b === 0) return 0;
  return (a * b) / mdc(a, b);
}

function mmc3(a, b, c) {
  return mmc(mmc(a, b), c);
}

function somarDuasFracoes(f1, f2) {
  let num = (f1.num * f2.den) + (f2.num * f1.den);
  let den = f1.den * f2.den;
  let div = mdc(num, den);
  return { num: num / div, den: den / div };
}

function embaralharArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// CARREGAR FASE
function carregarFase() {
  animandoPrincipe = false;
  somaNum = 0;
  somaDen = 0;
  atualizarBarraPonteVisual();
  atualizarHUD();

  const imgPrincipe = document.getElementById('img-principe');
  if (imgPrincipe) {
    imgPrincipe.src = `assets/imagens/${personagemEscolhido}.png`;
    imgPrincipe.style.transform = 'translateX(0px)';
  }

  const imgAlvoDireito = document.getElementById('img-alvo-direito');
  const telaGameplay = document.getElementById('tela-gameplay');

  if (imgAlvoDireito) {
    if (fase < 10) {
      imgAlvoDireito.src = 'assets/imagens/bandeira.png';
      imgAlvoDireito.alt = 'Bandeira';
      imgAlvoDireito.className = 'elemento-bandeira';
    } else {
      const imgResgatado = personagemEscolhido === 'principe' ? 'princesa.png' : 'principe.png';
      imgAlvoDireito.src = `assets/imagens/${imgResgatado}`;
      imgAlvoDireito.alt = personagemEscolhido === 'principe' ? 'Princesa' : 'Príncipe';
      imgAlvoDireito.className = 'elemento-princesa';
    }
  }

  if (fase <= 6) {
    if (telaGameplay) telaGameplay.className = 'tela ativa fase-iguais';
    atualizarBGM('som_gameplay');
    gerarRodadaDenominadoresIguais();
  } else {
    if (telaGameplay) telaGameplay.className = 'tela ativa fase-diferentes';
    atualizarBGM('som_gameplay');
    gerarRodadaDenominadoresDiferentes();
  }

  const valAlvo = document.getElementById('valor-alvo');
  if (valAlvo) valAlvo.innerText = `${alvoNum}/${alvoDen}`;
  renderizarBlocos();
}

// FASES 1 A 6: DENOMINADORES IGUAIS (3 A 19)
function gerarRodadaDenominadoresIguais() {
  let den = Math.floor(Math.random() * 17) + 3;
  if (den === ultimoDenominador) {
    den = (den % 17) + 3;
  }
  ultimoDenominador = den;
  alvoDen = den;

  let conjuntoNumeradores = new Set();
  while (conjuntoNumeradores.size < 5) {
    let nSort = Math.floor(Math.random() * (den + 3)) + 1;
    conjuntoNumeradores.add(nSort);
  }

  let numeradores5 = Array.from(conjuntoNumeradores);
  embaralharArray(numeradores5);

  alvoNum = numeradores5[0] + numeradores5[1] + numeradores5[2];

  for (let i = 0; i < 5; i++) {
    if (numeradores5[i] === alvoNum) {
      numeradores5[i] = alvoNum + 1;
    }
  }

  embaralharArray(numeradores5);
  blocosAtuais = numeradores5.map(n => ({ num: n, den: alvoDen }));
}

// FASES 7 A 10: DENOMINADORES DIFERENTES (FORMA NÃO IRREDUTÍVEL VIA MMC)
function gerarRodadaDenominadoresDiferentes() {
  const poolFraçoesValidas = [
    { num: 1, den: 2 }, { num: 1, den: 3 }, { num: 2, den: 3 },
    { num: 1, den: 4 }, { num: 3, den: 4 }, { num: 1, den: 5 },
    { num: 2, den: 5 }, { num: 3, den: 5 }, { num: 4, den: 5 },
    { num: 1, den: 6 }, { num: 5, den: 6 }, { num: 1, den: 8 },
    { num: 3, den: 8 }, { num: 5, den: 8 }, { num: 1, den: 10 },
    { num: 3, den: 10 }, { num: 7, den: 10 }
  ];

  embaralharArray(poolFraçoesValidas);

  let selecao5 = [];
  let chavesUnicas = new Set();

  for (let f of poolFraçoesValidas) {
    let chave = `${f.num}/${f.den}`;
    if (!chavesUnicas.has(chave)) {
      chavesUnicas.add(chave);
      selecao5.push(f);
    }
    if (selecao5.length === 5) break;
  }

  let f1 = selecao5[0];
  let f2 = selecao5[1];
  let f3 = selecao5[2];

  let denComum = mmc3(f1.den, f2.den, f3.den);
  let numComum = (f1.num * (denComum / f1.den)) + (f2.num * (denComum / f2.den)) + (f3.num * (denComum / f3.den));

  alvoNum = numComum;
  alvoDen = denComum;

  for (let i = 0; i < 5; i++) {
    if ((selecao5[i].num * alvoDen) === (alvoNum * selecao5[i].den)) {
      selecao5[i] = { num: 1, den: 7 };
    }
  }

  embaralharArray(selecao5);
  blocosAtuais = selecao5;
}

// RENDERIZAÇÃO DOS 5 BLOCOS
function renderizarBlocos() {
  const grade = document.getElementById('grade-blocos');
  if (!grade) return;
  grade.innerHTML = '';

  blocosAtuais.forEach((bloco) => {
    const btn = document.createElement('button');
    btn.className = 'bloco-fracao';
    btn.innerText = `${bloco.num}/${bloco.den}`;
    btn.dataset.clicado = 'false';

    btn.onclick = () => selecionarBloco(btn, bloco.num, bloco.den);
    grade.appendChild(btn);
  });
}

// SELEÇÃO E ATUALIZAÇÃO DA BARRA DA PONTE
function selecionarBloco(btn, num, den) {
  if (btn.dataset.clicado === 'true' || animandoPrincipe) return;

  tocarSom('clique');
  btn.dataset.clicado = 'true';
  btn.classList.add('selecionado');

  if (somaNum === 0) {
    somaNum = num;
    somaDen = den;
  } else {
    let s = somarDuasFracoes({ num: somaNum, den: somaDen }, { num: num, den: den });
    somaNum = s.num;
    somaDen = s.den;
  }

  atualizarBarraPonteVisual();
}

// ATUALIZAÇÃO DA BARRA DA PONTE
function atualizarBarraPonteVisual() {
  const barraPreenchimento = document.getElementById('barra-ponte-preenchimento');
  if (!barraPreenchimento) return;

  if (somaNum === 0) {
    barraPreenchimento.style.width = '0%';
    return;
  }

  const valSoma = somaNum / somaDen;
  const valAlvo = alvoNum / alvoDen;
  
  const percentual = (valSoma / valAlvo) * 100;
  barraPreenchimento.style.width = `${percentual}%`;
}

// LIMPAR SELEÇÃO (-2 PONTOS)
function limparSelecao() {
  if (animandoPrincipe) return;

  tocarSom('clique');
  pontos -= 2;
  atualizarHUD();

  somaNum = 0;
  somaDen = 0;
  atualizarBarraPonteVisual();

  const botoes = document.querySelectorAll('.bloco-fracao');
  botoes.forEach(btn => {
    btn.dataset.clicado = 'false';
    btn.classList.remove('selecionado');
  });
}

// TESTAR PONTE
function testarPonte() {
  if (animandoPrincipe) return;

  if (somaNum === 0) {
    mostrarMensagemJogo("Selecione os blocos de fração para construir a ponte!", "alerta");
    return;
  }

  const acertou = (somaNum * alvoDen) === (alvoNum * somaDen);

  if (acertou) {
    animandoPrincipe = true;
    tocarSom('vitoria');
    pontos += 10;
    atualizarHUD();
    mostrarMensagemJogo("Ponte concluída com sucesso! Avançando...", "sucesso");

    const imgPrincipe = document.getElementById('img-principe');
    if (imgPrincipe) imgPrincipe.style.transform = 'translateX(520px)';

    setTimeout(() => {
      if (fase < 10) {
        if (imgPrincipe) imgPrincipe.style.transform = 'translateX(0px)';
        setTimeout(() => {
          fase++;
          carregarFase();
        }, 800);
      } else {
        setTimeout(() => {
          const pFinal = document.getElementById('pontuacao-final');
          if (pFinal) pFinal.innerText = `Pontuação Final: ${pontos} PTS`;

          const txtVit = document.getElementById('txt-vitoria-resumo');
          if (txtVit) {
            const nomeHeroi = personagemEscolhido === 'principe' ? 'O Príncipe' : 'A Princesa';
            const nomeResgatado = personagemEscolhido === 'principe' ? 'a Princesa' : 'o Príncipe';
            txtVit.innerText = `${nomeHeroi} atravessou todas as 10 pontes e salvou ${nomeResgatado}!`;
          }

          irParaTela('tela-vitoria');
        }, 1000);
      }
    }, 1400);

  } else {
    tocarSom('erro');
    vidas--;
    pontos -= 10;
    atualizarHUD();

    if (vidas <= 0) {
      mostrarMensagemJogo("Suas vidas acabaram!", "erro", 2000);
      const txtGameOver = document.getElementById('txt-gameover');
      const nomeHeroi = personagemEscolhido === 'principe' ? 'O Príncipe' : 'A Princesa';
      if (txtGameOver) txtGameOver.innerHTML = `Você perdeu todas as vidas! ${nomeHeroi} não conseguiu atravessar o abismo.<br><br>`;

      setTimeout(() => {
        const overlayOver = document.getElementById('overlay-gameover');
        if (overlayOver) overlayOver.className = '';
      }, 1000);
    } else {
      if ((somaNum * alvoDen) < (alvoNum * somaDen)) {
        mostrarMensagemJogo("Ops! A ponte ficou curta demais (-10 PTS)! Limpando...", "erro");
      } else {
        mostrarMensagemJogo("Ops! A ponte ficou longa demais (-10 PTS)! Limpando...", "erro");
      }
      
      somaNum = 0;
      somaDen = 0;
      atualizarBarraPonteVisual();
      const botoes = document.querySelectorAll('.bloco-fracao');
      botoes.forEach(btn => {
        btn.dataset.clicado = 'false';
        btn.classList.remove('selecionado');
      });
    }
  }
}

// ATUALIZAÇÃO DO HUD
function atualizarHUD() {
  const txtFase = document.getElementById('txt-fase');
  const txtVidas = document.getElementById('txt-vidas');
  const txtPontos = document.getElementById('txt-pontos');

  if (txtFase) txtFase.innerText = `Fase: ${fase}/10`;
  if (txtVidas) txtVidas.innerText = '❤️ '.repeat(vidas);
  if (txtPontos) txtPontos.innerText = `Pontos: ${pontos}`;
}

// REDIMENSIONAMENTO E CENTRALIZAÇÃO AUTOMÁTICA
function ajustarEscalaJogo() {
  const larguraDispositivo = window.innerWidth;
  const alturaDispositivo = window.innerHeight;

  const escala = Math.min((larguraDispositivo * 0.95) / 800, (alturaDispositivo * 0.95) / 600);

  const telas = document.querySelectorAll('.tela');
  telas.forEach(tela => {
    tela.style.transform = `translate(-50%, -50%) scale(${escala})`;
  });
}

window.addEventListener('resize', ajustarEscalaJogo);
window.addEventListener('orientationchange', ajustarEscalaJogo);
window.addEventListener('DOMContentLoaded', ajustarEscalaJogo);
ajustarEscalaJogo();
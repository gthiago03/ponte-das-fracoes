// VARIÁVEIS DE ESTADO DO JOGO
let fase = 1;
let vidas = 3;
let pontos = 0;

let alvoNum = 0;
let alvoDen = 0;
let somaNum = 0;
let somaDen = 0;

let blocosValores = [];

// TROCA DE TELAS
function irParaTela(idTela) {
  tocarSom('som-clique');
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(idTela).classList.add('ativa');
}

function iniciarJogo() {
  fase = 1;
  vidas = 3;
  pontos = 0;
  irParaTela('tela3');
  carregarFase();
}

// LÓGICA DE GERAÇÃO DAS FASES (1 A 5 vs 6 A 10)
function carregarFase() {
  somaNum = 0;
  atualizarHUD();

  const tela3 = document.getElementById('tela3');

  if (fase <= 5) {
    // FASES 1 A 5: Denominadores Iguais
    tela3.className = 'tela ativa fase-iguais';
    alvoDen = Math.floor(Math.random() * 5) + 2; // ex: 2 a 6
    alvoNum = Math.floor(Math.random() * (alvoDen - 1)) + 1;
    somaDen = alvoDen;
    gerarBlocosIguais();
  } else {
    // FASES 6 A 10: Denominadores Diferentes
    tela3.className = 'tela ativa fase-diferentes';
    alvoDen = 8;
    alvoNum = 5;
    gerarBlocosDiferentes();
  }

  document.getElementById('valor-alvo').innerText = `${alvoNum}/${alvoDen}`;
}

function gerarBlocosIguais() {
  const grade = document.getElementById('grade-blocos');
  grade.innerHTML = '';
  blocosValores = [];

  for (let i = 1; i <= 5; i++) {
    let num = i;
    let btn = document.createElement('button');
    btn.className = 'bloco-fracao';
    btn.innerText = `${num}/${alvoDen}`;
    btn.onclick = () => selecionarBloco(btn, num, alvoDen);
    grade.appendChild(btn);
  }
}

function selecionarBloco(btn, num, den) {
  if (btn.classList.contains('selecionado')) return; // Trava para clique único
  tocarSom('som-clique');
  btn.classList.add('selecionado');
  somaNum += num;
  document.getElementById('valor-soma').innerText = `${somaNum}/${alvoDen}`;
}

function limparSelecao() {
  tocarSom('som-clique');
  somaNum = 0;
  document.getElementById('valor-soma').innerText = `0`;
  document.querySelectorAll('.bloco-fracao').forEach(b => b.classList.remove('selecionado'));
}

function testarPonte() {
  // Validação por Multiplicação Cruzada
  if ((somaNum * alvoDen) === (alvoNum * somaDen) && somaNum > 0) {
    tocarSom('som-vitoria');
    pontos += 10;
    fase++;
    
    if (fase > 10) {
      document.getElementById('pontuacao-final').innerText = `Pontuação Final: ${pontos} PTS`;
      irParaTela('tela4');
    } else {
      carregarFase();
    }
  } else {
    tocarSom('som-erro');
    vidas--;
    if (vidas <= 0) {
      alert("Fim de Jogo! Tentando novamente...");
      iniciarJogo();
    } else {
      limparSelecao();
      atualizarHUD();
    }
  }
}

function atualizarHUD() {
  document.getElementById('txt-fase').innerText = `Fase: ${fase}/10`;
  document.getElementById('txt-vidas').innerText = '❤️ '.repeat(vidas);
  document.getElementById('txt-pontos').innerText = `Pontos: ${pontos}`;
}

function tocarSom(idAudio) {
  const audio = document.getElementById(idAudio);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
}
const frases = [
  "Você ilumina minha vida com seu sorriso 💖",
  "Você me faz mais feliz a cada dia da minha vida 🥰",
  "Você plantou amor no meu coração e rega todo dia com seu sorriso 💘",
  "Você é meu porto seguro ❤️",
  "Você é a melhor parte do meu dia 💓",
  "Você é o amor da minha vida, minha princesa! ✨",
  "Você é tudo que eu sempre sonhei 😍",
  "Você é a minha maior felicidade 💫",
  "Cada momento ao seu lado é um pedacinho do paraíso 😇",
  "Você é a ambientalista mais gatinha que existe ❤️‍🔥",
  "Com você, a vida é uma melodia perfeita e cheia de amor 🎶",
  "Você é pra mim o que o amarelo foi pra Van gogh 🌸",
  "Você é o motivo do meu sorriso 🌹",
  "Te observar em silêncio já é felicidade pra mim.",
  "Você tem o dom de transformar dias comuns em dias inesquecíveis."
];

function mostrarFrase() {
  const fraseEl = document.getElementById("frase");
  const index = Math.floor(Math.random() * frases.length);
  fraseEl.textContent = frases[index];
}

function startApp() {
  const audio = document.getElementById("musica");
  audio.play();
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("app").style.display = "block";
}

setInterval(() => {
  const coracao = document.createElement("div");
  coracao.className = "coração";
  coracao.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 4000);
}, 500);
const fotos = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg",
  "foto7.jpg",
  "foto8.jpg",
  "foto9.jpg"
];

let fotoAtual = -1;

function trocarFoto() {
  let novaFoto;
  do {
    novaFoto = Math.floor(Math.random() * fotos.length);
  } while (novaFoto === fotoAtual);

  fotoAtual = novaFoto;
  document.getElementById("slide").src = fotos[fotoAtual];
}

setInterval(trocarFoto, 3000); // troca a cada 3 segundos

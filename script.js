'use strict'
// Selecionar os elementos originais
const oitoA = document.getElementById("oitoA");
const oitoB = document.getElementById("oitoB");
const noveA = document.getElementById("noveA");
const noveB = document.getElementById("noveB");

// Função para adicionar a animação de aumento e diminuição aos elementos
const addAnimation = (element) => {
    element.addEventListener("click", () => {
      titulo.innerHTML = ""; // Limpar o conteúdo anterior
      element.style.animation = "increaseSize 0.3s ease-in-out";
      setTimeout(() => {
        element.style.animation = "none";
      }, 300);
    });
  };
  
  // Aplicar animação aos botões criados
  addAnimation(oitoA);
  addAnimation(oitoB);
  addAnimation(noveA);
  addAnimation(noveB);
  
  // Função para exibir informações diferentes com base no botão clicado
  const showInfo = (element, imageSrc, countryName, infoText) => {
    element.addEventListener("click", () => {
      titulo.innerHTML = `
        <img src="${imageSrc}" alt="${countryName}">
        <h3>${countryName}</h3>
      `;
      info.innerHTML = infoText;
    });
  };


  const infoEspanha =  "Nome oficial: Reino de Espanha\nGentílico: espanhol\nExtensão territorial: 504,030 quilômetros quadrados\nLocalização: Europa Ocidental\nCapital: Madri\nClima: mediterrânico\nGoverno: monarquia constitucional parlamentarista\nIdioma: espanhol\nReligiões: 58% (cristianismo), 37% (ateísmo), 5% (outras)\nPopulação: 47,350,000 habitantes\nDensidade demográfica: 90 habitantes/quilômetro quadrado"
  const infoAustralia = "Nome oficial: Comunidade da Austrália\nGentílico: australiano(a)\nExtensão territorial: 7.741.200 km2\nLocalização: Oceania\nCapital: Camberra\nClima: Predominantemente árido tropical. Por regiões, divide-se em tropical (norte e nordeste), subtropical (sudeste) e mediterrâneo (sul).\nGoverno: monarquia constitucional"
  const infoJapao = "Capital: Tóquio\nPopulação: 126 730 000 de habitantes\nRegime de Governo: monarquia parlamentarista\nMonarca: Imperador Akhito\nPrimeiro-ministro: Shinzō Abe\nMoeda: iene\nReligião: xintoísmo, budismo\nIdioma: japonês\né a terceira economia mundial."
  const infoSouthAfrica = "Nome oficial: República da África do Sul\nGentílico: sul-africano\nExtensão territorial: 1.221.037 km²\nLocalização: África Meridional\nCapitais:\nPretória: capital administrativa\nCidade do Cabo: capital legislativa\nBloemfontein: capital judiciária.\nClima: semiárido e subtropical\nGoverno: república parlamentarista"

  showInfo(oitoA, "./image/australia.png", "Austrália", infoAustralia);
  showInfo(oitoB, "./image/japan.png", "Japão", infoJapao);
  showInfo(noveA, "./image/southAfrica.png", "África do Sul", infoSouthAfrica);
  showInfo(noveB, "./image/spain.png", "Espanha", infoEspanha);
  
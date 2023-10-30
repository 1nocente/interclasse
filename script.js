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


  const infoEspanha =  "Nome oficial: Reino de Espanha  <br>  Gentílico: espanhol  <br>  Extensão territorial: 504,030 quilômetros quadrados  <br>  Localização: Europa Ocidental  <br>  Capital: Madri  <br>  Clima: mediterrânico  <br>  Governo: monarquia constitucional parlamentarista  <br>  Idioma: espanhol  <br>  Religiões: 58% (cristianismo), 37% (ateísmo), 5% (outras)  <br>  População: 47,350,000 habitantes  <br>  Densidade demográfica: 90 habitantes/quilômetro quadrado"
  const infoAustralia = "Nome oficial: Comunidade da Austrália  <br>  Gentílico: australiano(a)  <br>  Extensão territorial: 7.741.200 km2  <br>  Localização: Oceania  <br>  Capital: Camberra  <br>  Clima: Predominantemente árido tropical. Por regiões, divide-se em tropical (norte e nordeste), subtropical (sudeste) e mediterrâneo (sul).  <br>  Governo: monarquia constitucional"
  const infoJapao = "Capital: Tóquio   <br>   População: 126 730 000 de habitantes   <br>   Regime de Governo: monarquia parlamentarista   <br>   Monarca: Imperador Akhito   <br>   Primeiro-ministro: Shinzō Abe   <br>   Moeda: iene   <br>   Religião: xintoísmo, budismo   <br>   Idioma: japonês  <br>  é a terceira economia mundial."
  const infoSouthAfrica = "Nome oficial: República da África do Sul  <br>  Gentílico: sul-africano  <br>  Extensão territorial: 1.221.037 km²  <br>  Localização: África Meridional  <br>  Capitais:  <br>  Pretória: capital administrativa  <br>  Cidade do Cabo: capital legislativa  <br>  Bloemfontein: capital judiciária.  <br>  Clima: semiárido e subtropical  <br>  Governo: república parlamentarista"

  showInfo(oitoA, "./image/australia.png", "Austrália", infoAustralia);
  showInfo(oitoB, "./image/japan.png", "Japão", infoJapao);
  showInfo(noveA, "./image/southAfrica.png", "África do Sul", infoSouthAfrica);
  showInfo(noveB, "./image/spain.png", "Espanha", infoEspanha);
  

  //slider

  const modalidadesDiv = document.getElementById('modalidades')
  const modalidades = document.querySelectorAll('.modalidade')
  const button = document.getElementById('slide')
  let cont = 0

  console.log(modalidades)

  // const slideNext = () =>{

  //   cont++

  //   if(cont > 2){
  //     cont = 0
  //   }

  //   modalidades[cont].style.transform = "translateX(-" + cont + "00%)" 

  // }

  const slideNext = () =>{

    // cont++

    // if(cont > 2){
    //   cont = 0

    cont++
    if(cont>2)
    cont = 0

    modalidades.forEach((modalidade) =>{
      modalidade.style.transform = "translateX(-"+cont+""+cont+"0%)" 
    })

  }

  button.addEventListener('click', slideNext)
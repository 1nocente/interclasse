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
    if(cont>6)
    cont = 0

    modalidades.forEach((modalidade) =>{
      modalidade.style.transform = "translateX(-"+cont+""+cont+"0%)" 
    })

  }

  button.addEventListener('click', slideNext)

  const regrasDiv = document.getElementById("regras");
const slideButton = document.getElementById("slide");

// Array de textos para as diferentes imagens
const textos = [
  "Jogo de equipes de 6 jogadores<br>Objetivo é marcar pontos fazendo a bola tocar o chão adversário<br>Saque inicia o jogo, passando a rede<br>Equipe tem até 3 toques para passar a bola ao campo adversário<br>Bloqueio é permitido na defesa<br>Rodízio obrigatório dos jogadores<br>vencendo com vantagem de 2 pontos<br>",
  "Jogo de equipes de 5 jofadores<br>Objetivo é marcar gols no time adversário e evitar que eles marquem gols<br>Inicia com um saque no centro da quadra<br>Cada equipe tem 5 jogadores, incluindo um goleiro<br>Faltas resultam em lances livres ou tiros diretos<br>Partida dividida em dois tempos de 20 minutos<br>Vence quem marcar mais gols no tempo regulamentar<br>",
  "2 jogadores<br>Marcar pontos tocando a mesa no campo adversário<br>Saque tocando ambos lados da mesa<br>Ponto quando o oponente não devolve corretamente<br>Bola acima da mesa e abaixo da cintura<br>Vitória com vantagem de 2 pontos.",
  "Jogo de equipe com frisbee<br>Pontuação ao pegar o frisbee na end zone adversária<br>Começa com um lançamento (pull)<br>Passe entre jogadores até a end zone adversária<br>Ponto marcado ao pegar o frisbee na end zone<br>Troca de posse após interceptação ou queda do frisbee<br>Sem contato físico permitido<br>Pontuação normalmente até 15 ou 17 pontos<br>",
  "Equipes de corredores passam um bastão<br>Objetivo é completar a corrida no menor tempo<br>Cada corredor percorre uma parte da distância total<br>Passagem do bastão em zonas específicas (geralmente 20 metros)<br>Velocidade nas trocas é crucial<br>Comum em provas de pista e campo<br>Diferentes distâncias e número de corredores<br>",
  "Lançamento de uma esfera de peso<br>Objetivo é lançar a esfera o mais longe possível<br>Área de lançamento é um círculo<br>Lançador não pode sair do círculo<br>Peso da esfera varia por categoria<br>Vence quem lançar a maior distância<br>Comum em competições de atletismo<br>",
  "Jogo de tabuleiro estratégico<br>Objetivo é dar xeque-mate ao rei adversário<br>Cada jogador tem 16 peças com movimentos específicos<br>Rei é a peça central e crucial<br>Partidas podem terminar em xeque-mate, empate ou empate por acordo<br>Jogadas estratégicas e táticas são fundamentais<br>Xadrez é um esporte mental e de estratégia."
  // Adicione textos para todas as imagens que você tem.
];

// Variável para rastrear o índice atual do texto
let currentIndex = 0;

// Função para atualizar o texto
function updateTexto() {
  regrasDiv.innerHTML = textos[currentIndex];
}

// Função para avançar para o próximo texto
function nextTexto() {
  currentIndex++;
  if (currentIndex >= textos.length) {
    currentIndex = 0; // Volte ao início se estiver no final.
  }
  updateTexto();
}

// Adicionar um ouvinte de evento ao botão "slide" para avançar o texto
slideButton.addEventListener("click", nextTexto);

// Chamar a função inicialmente para exibir o primeiro texto
updateTexto();
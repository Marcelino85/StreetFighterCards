var carta1 = {
  nome: "Guile",
imagem:"https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2016/04/k2_items_src_0a4409fd7de9904a5f786d566e19e14d-950x534.jpg",
  atributos: {
    ataque: 70,
    defesa: 80,
    magia: 60
  }
};

var carta2 = {
  nome: "Zangief",
  imagem:"https://www.einerd.com.br/wp-content/uploads/2015/10/Zangief.jpg",
  atributos: {
    ataque: 90,
    defesa: 75,
    magia: 60
  }
};

var carta3 = {
  nome: "Dhalsim",
imagem:"http://3.bp.blogspot.com/_Z5fFL16rQgw/TRpJlVMBysI/AAAAAAAAA0I/rB28ykhK470/s1600/dhalsim.jpg", 
  atributos: {
    ataque: 85,
    defesa: 80,
    magia: 90
  }
};

var carta4 = {
  nome: "Ryu",
imagem:"https://i.gifer.com/41v.gif",
  atributos: {
    ataque: 80,
    defesa: 85,
    magia: 95
  }
};

var carta5 = {
  nome: "Chun-Li",
imagem:"http://pm1.narvii.com/8089/15f103b1e9fbaa8c7804f4f0603b8e6f3e45764dr1-736-552v2_uhq.jpg",
  atributos: {
    ataque: 50,
    defesa: 60,
    magia: 85
  }
};

var carta6 = {
  nome: "Blanka",
imagem:"https://i.pinimg.com/originals/98/b4/b5/98b4b568251c0fb43ef3c47e16320d51.jpg",
  atributos: {
    ataque: 77,
    defesa: 81,
    magia: 89
  }
};

var carta7 = {
  nome: "Ken",
imagem:"https://i.pinimg.com/originals/ad/be/7b/adbe7bb500de49ef6adfc9bf742326d3.jpg",
  atributos: {
    ataque: 85,
    defesa: 81,
    magia: 90
  }
};

var carta8 = {
  nome: "M. Bison",
imagem:"https://assets.reedpopcdn.com/-1455400083503.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1455400083503.jpg",
  atributos: {
    ataque: 95,
    defesa: 81,
    magia: 90
  }
};

var carta9 = {
  nome: "Akuma",
imagem:"https://www.fightersgeneration.com/nf8/char6/akuma-ashura-senku-teppen-art.jpg",
  atributos: {
    ataque: 96,
    defesa: 80,
    magia: 90
  }
};

var carta10 = {
  nome: "Cammy",
imagem:"https://pa1.narvii.com/6474/29eff60f94fbabac378a99d7fea6272ea893feab_hq.gif",
  atributos: {
    ataque: 46,
    defesa: 70,
    magia: 81
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
 exibirCartaJogador();
 }

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado")
 

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) { 
  htmlresultado = "<p class='resultado-final'>Parabéns você Venceu!</p>" 
  }
  
  else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
  htmlresultado = "<p class='resultado-final'>Que pena você Perdeu.</p>" }
  
  else{
   htmlresultado = "<p class='resultado-final'>Vocês Empataram tente novamente.</p>" 
  }
  divResultado.innerHTML = htmlresultado;
  document.getElementById('btnJogar').disabled = true //esta função desabilita o botão.
  exibirCartaMaquina ()
  }


function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  //Tambem pode se usar o seguinte codigo: divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"//
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type= 'radio'  name= 'atributo' value= '"  +  atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>" ;
    
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>" 
  
}

function  exibirCartaMaquina () {
  
   var divCartaMaquina = document.getElementById("carta-maquina")
  
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type= 'text'  name= 'atributo' value= '"  +  atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"; //ao tirar o BR da teg </p> normaliza o erro na carta da Maquina//
    
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>" 
  

  
}
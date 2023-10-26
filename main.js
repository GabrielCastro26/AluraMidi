function tocaSomPom(){
  document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
document.querySelector('#som_tecla_clap').play();
}

function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
for(let contador=0; contador <listaDeTeclas.length; contador++) {
  const tecla= listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio =`#som_${instrumento}`;
  tecla.onclick =function () {
  tocaSom(idAudio);
};
  console.log(instrumento);
}

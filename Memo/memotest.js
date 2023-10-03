let turn = 0;
let ficha1=' ';
let ficha2=' ';
let primeradadavuelta=null;
let segundadadavuelta=null;
let aciertos = 0;
let moves = 0;
let contador = 0;
let intervalo;
let clickaudio =new Audio('./Audio/click.wav');
let loseaudio =new Audio('./Audio/lose.wav');
let winaudio =new Audio('./Audio/win.wav');


function actualizarContador() {
    const elementoContador = document.getElementById("contador");
    elementoContador.textContent = contador;
    contador++;
}
function iniciarContador() {
    intervalo = setInterval(actualizarContador, 1000); 
}
function detenerContador() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    }
}
window.addEventListener("load", iniciarContador);

let mostraraciertos = document.getElementById('aciertos');
console.log(aciertos);
let num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
num=num.sort(()=>{return Math.random()-0.5})
console.log(num);

function destapar(id){

  turn++;
  console.log(turn);
    switch(turn){
      case 1:
        ficha1 = document.getElementById(id);
        primeradadavuelta =num[id];
        ficha1.innerHTML =`<img src="./Iconos/${primeradadavuelta}.png" alt="">`;  
        ficha1.disabled = true;
        clickaudio.play();
      break;
      case 2:
        ficha2 = document.getElementById(id);
        segundadadavuelta=num[id];
        ficha2.innerHTML = `<img src="./Iconos/${segundadadavuelta}.png" alt="">`;
        ficha2.disabled=true;
        moves++;
        clickaudio.play();
      break;
      }
    if(primeradadavuelta==segundadadavuelta){
      aciertos++;
      //mostraraciertos.innerHTML=`aciertos: ${aciertos}`;
      console.log(aciertos);
      winaudio.play();
    }
    if(aciertos==16){
      mostraraciertos.innerHTML=`aciertos: ${aciertos}Felicitaciones has ganado`;
    }
    if(turn == 2){
      turn=0;
      if(primeradadavuelta != segundadadavuelta){
        setTimeout(()=>{
          ficha1.innerHTML=' ';
          ficha2.innerHTML=' ';
          ficha1.disabled = false;
          ficha2.disabled = false;
          loseaudio.play();    
        },200);
      }
    }
}

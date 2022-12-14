const PIEDRA = "piedras";
const PAPEL = "papel";
const TIJERA = "tijeras";

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");

const resultTxt = document.getElementById("star-tex");

const userImg = document.getElementById("user-img");
const pcImg = document.getElementById("pc-img");

piedraBtn.addEventListener("click",()=>{
    jugar(PIEDRA);
});
papelBtn.addEventListener("click",()=>{
    jugar(PAPEL);
});
tijeraBtn.addEventListener("click",()=>{
    jugar(TIJERA);
});

function calcPc(){

    const number = Math.floor(Math.random()*3);

    if(number == 0){
        return PIEDRA;
    }else if(number == 1){
        return PAPEL;
    }else if(number == 2){
        return TIJERA;
    }
}

function jugar(usuario){

    const pc = calcPc();
    const result = combate(usuario, pc);
    userImg.src = "img/"+usuario+".png";
    pcImg.src = "img/"+pc+".png";
}

function combate(usuario,pc){
    
    if(usuario == pc){
        resultTxt.innerHTML = "Empate";
    }else if(usuario == PIEDRA && pc == TIJERA){
        resultTxt.innerHTML = "Ganaste";
    }else if(usuario == PAPEL && pc == PIEDRA){
        resultTxt.innerHTML = "Ganaste";
    }else if(usuario == TIJERA && pc == PAPEL){
        resultTxt.innerHTML = "Ganaste";
    }else {
        resultTxt.innerHTML = " Perdiste!";
    }
    
}































/*
//Funciones del programa

function eleccion(jugada){
    let resultado = ""
    if (jugada == 1)  {
        resultado = "Piedra 🪨"
    }else if (jugada == 2) {
        resultado = " Papel 🧻"
    }else if (jugada == 3) {
        resultado = "Tijera ✂️"
    }else{
        resultado = " ⛔⛔⛔"
    }
    return resultado
}

//Declaracion de Variables
let jugador = 0
let pc = 0 
let triunfos = 0
let perdidas = 0


while(triunfos < 3  && perdidas <3){
    //eleccion del jugador
    pc = Math.floor(3 * Math.random() + 1 )
    jugador = prompt(  " Elige entre 1.piedra, 2.papel o 3.tijera")

    //Alertas

    alert("pc elige " + eleccion(pc))

    alert("Jugador elige " + eleccion(jugador))

    //combate
    if (jugador == pc) {
        alert("Empate.")
        triunfos = triunfos +1
    }else if(jugador == 1 && pc == 3){
        alert("Ganaste")
        triunfos = triunfos +1
    }else if(jugador == 3 && pc == 2){
        alert("Ganaste")
        triunfos = triunfos +1
    }else if(jugador == 2 && pc == 1){
        alert("Ganaste")
        triunfos = triunfos +1
    }else{
        alert("Perdiste")
        perdidas = perdidas +1
    }

}

alert ("Ganaste " + triunfos + "Veces. Perdiste " + perdidas + "veces.")
*/

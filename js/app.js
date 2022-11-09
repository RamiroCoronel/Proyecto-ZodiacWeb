let btnVerMas = document.getElementById(`btnVerMas`);
btnVerMas.addEventListener(`click` , verMas);

let btnEnviar = document.getElementById(`btnEnviar`)
btnEnviar.addEventListener(`click`, enviarFecha);

let fechaIngresada = document.getElementById

parrafoNuevo.innerHTML =`Representado por el toro y regido por las tendencias de Venus, es el segundo de la rueda zodiacal y primero del elemento Tierra. Pertenecen al signo de Tauro quienes nacieron entre el 21 de abril y el 21 de mayo.`

function enviarFecha(){}

function cambiarTitulo(){
    let titulo = document.querySelector(`h2`);
    titulo.innerHTML = `ARIES. Del 21/03 al 20/04`
    titulo.className = `display-5 tituloSigno text-light`

}

function verMas(){
   
    let articulePadre = document.getElementById(`Signos`);
    if(btnVerMas.innerHTML === `Ver Mas`){
    let parrafoNuevo = document.createElement(`p`)
    parrafoNuevo.innerHTML = `Aries está representado por el carnero. Es un signo del elemento Fuego asociado a la primera carta astrológica, el primero signo del zodíaco. Su regente es el planeta Marte. Forman parte del signo de Aries las personas nacidas entre el 21 de marzo y el 20 de abril.`
    parrafoNuevo.className = `lead, text-light`
    articulePadre.appendChild(parrafoNuevo)
    btnVerMas.innerHTML = `Ver menos`;
    btnVerMas.className = `btn btn-outline-primary`;

    }else{
       
        articulePadre.removeChild(articulePadre.children[1])
        btnVerMas.innerHTML = "Ver Mas";
        btnVerMas.className = "btn btn-outline-primary";

    }



}
function describir(){
let articulePadre = document.getElementById(`Signos`);
if(btnVerMas.innerHTML === `Ver Mas`){
    let parrafoNuevo = document.createElement(`p`)
}
}
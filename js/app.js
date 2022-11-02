
function cambiarTitulo(){
    console.log(`cambiar titulo`);
    let titulo = document.querySelector(`h2`);
    console.log(titulo);
    titulo.innerHTML = `ARIES. Del 21/03 al 20/04`
    titulo.className = `display-5 tituloSigno text-light`
}
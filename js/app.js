

let btnVerMas = document.getElementById(`btnVerMas`)
btnVerMas.addEventListener(`click` , verMas)

function verMas(){
    let section = document.getElementById(`Signos`)

    if(btnVerMas.innerHTML === `Ver mas ⬇`){
        let parrafoNuevo = document.createElement(`p`);
        parrafoNuevo.innerHTML = `Aries está representado por el carnero. Es un signo del elemento Fuego asociado a la primera carta astrológica, el primero signo del zodíaco. Su regente es el planeta Marte. Forman parte del signo de Aries las personas nacidas entre el 21 de marzo y el 20 de abril.`;
        parrafoNuevo.className = `lead`;
        section.insertBefore(parrafoNuevo,btnVerMas);
        btnVerMas.innerHTML = `Ocultar ⬆`;
        btnVerMas.className = `btn btn-primary`;
    }else{
        section.removeChild(section.children[4]);
        btnVerMas.innerHTML = `Ver mas ⬇`;
        btnVerMas.className = `btn btn-primary`;
    }
    }
    
let btnVerMasTauro = document.getElementById(`btnVerMasTauro`)
btnVerMasTauro.addEventListener(`click` , VerMasTauro)

function VerMasTauro(){
    let section = document.getElementById(`SignosTauro`)

    if(btnVerMasTauro.innerHTML === `Ver mas ⬇`){
        let parrafoNuevo = document.createElement(`p`);
        parrafoNuevo.innerHTML = `Representado por el toro y regido por las tendencias de Venus, es el segundo de la rueda zodiacal y primero del elemento Tierra. Pertenecen al signo de Tauro quienes nacieron entre el 21 de abril y el 21 de mayo.`;
        parrafoNuevo.className = `lead`;
        section.insertBefore(parrafoNuevo,btnVerMasTauro);
        btnVerMasTauro.innerHTML = `Ocultar ⬆`;
        btnVerMasTauro.className = `btn btn-primary`;
    }else{
        section.removeChild(section.children[4]);
        btnVerMasTauro.innerHTML = `Ver mas ⬇`;
        btnVerMasTauro.className = `btn btn-primary`;
    }
    }

let btnVerMasGeminis = document.getElementById(`btnVerMasGeminis`)
btnVerMasGeminis.addEventListener(`click` , VerMasGeminis)

function VerMasGeminis(){
     let section = document.getElementById(`SignosGeminis`)
    
     if(btnVerMasGeminis.innerHTML === `Ver mas ⬇`){
        let parrafoNuevo = document.createElement(`p`);
        parrafoNuevo.innerHTML = `El Aire es el elemento que corresponde a este signo, el tercero del zodíaco. Representados simbólicamente por los gemelos y regido por el planeta Mercurio. Pertenecen al signo de Géminis quienes nacieron entre el 22 de mayo y el 21 de junio.`;
        parrafoNuevo.className = `lead`;
        section.insertBefore(parrafoNuevo,btnVerMasGeminis);
        btnVerMasGeminis.innerHTML = `Ocultar ⬆`;
        btnVerMasGeminis.className = `btn btn-primary`;
    }else{
        section.removeChild(section.children[4]);
        btnVerMasGeminis.innerHTML = `Ver mas ⬇`;
        btnVerMasGeminis.className = `btn btn-primary`;
        }
        }

let btnVerMasCancer = document.getElementById(`btnVerMasCancer`)
btnVerMasCancer.addEventListener(`click` , VerMasCancer)
        
function VerMasCancer(){
        let section = document.getElementById(`SignosCancer`)
            
        if(btnVerMasCancer.innerHTML === `Ver mas ⬇`){
        let parrafoNuevo = document.createElement(`p`);
        parrafoNuevo.innerHTML = `Su símbolo representa un cangrejo, su elemento es el Agua y su regente es la Luna. Pertenecen al signo de Cáncer, el cuarto del zodíaco, los nacidos entre el 22 de junio y el 23 de julio.`;
        parrafoNuevo.className = `lead`;
        section.insertBefore(parrafoNuevo,btnVerMasCancer);
        btnVerMasCancer.innerHTML = `Ocultar ⬆`;
        btnVerMasCancer.className = `btn btn-primary `;
        }else{
        section.removeChild(section.children[4]);
        btnVerMasCancer.innerHTML = `Ver mas ⬇`;
        btnVerMasCancer.className = `btn btn-primary`;
        }
        }        

let btnVerMasLeo = document.getElementById(`btnVerMasLeo`)
btnVerMasLeo.addEventListener(`click` , VerMasLeo)
                
 function VerMasLeo(){
        let section = document.getElementById(`SignosLeo`)
        if(btnVerMasLeo.innerHTML === `Ver mas ⬇`){
        let parrafoNuevo = document.createElement(`p`);
        parrafoNuevo.innerHTML = `El regente de este potente signo de Fuego es el Sol. Su símbolo es el león y pertenecen al signo de Leo quienes nacieron entre el 24 de julio y el 23 de agosto.`;
        parrafoNuevo.className = `lead`;
        section.insertBefore(parrafoNuevo,btnVerMasLeo);
        btnVerMasLeo.innerHTML = `Ocultar ⬆`;
        btnVerMasLeo.className = `btn btn-primary`;
        }else{
        section.removeChild(section.children[4]);
        btnVerMasLeo.innerHTML = `Ver mas ⬇`;
        btnVerMasLeo.className = `btn btn-primary`;
        }
        }          
       
let btnVerMasVirgo = document.getElementById(`btnVerMasVirgo`);
btnVerMasVirgo.addEventListener(`click` , VerMasVirgo);
                        
function VerMasVirgo(){
        let section = document.getElementById(`SignosVirgo`)
        if(btnVerMasVirgo.innerHTML === `Ver mas ⬇`){
        let parrafoNuevo = document.createElement(`p`);
        parrafoNuevo.innerHTML = `Regido por Venus –la diosa griega Afrodita- el séptimo signo del zodíaco está representado por la figura de la balanza. Pertenece al elemento Aire. Forman parte del signo de Libra los nacidos entre el 24 de septiembre y el 23 de octubre.`;
        parrafoNuevo.className = `lead`;
        section.insertBefore(parrafoNuevo,btnVerMasVirgo);
        btnVerMasVirgo.innerHTML = `Ocultar ⬆`;
        btnVerMasVirgo.className = `btn btn-primary`;
        }else{
        section.removeChild(section.children[4]);
        btnVerMasVirgo.innerHTML = `Ver mas ⬇`;
        btnVerMasVirgo.className = `btn btn-primary`;
        }
        }        
        
        let btnVerMasLibra = document.getElementById(`btnVerMasLibra`);
btnVerMasLibra.addEventListener(`click` , VerMasLibra);
                        
function VerMasLibra(){
        let section = document.getElementById(`SignosLibra`)
        if(btnVerMasLibra.innerHTML === `Ver mas ⬇`){
        let parrafoNuevo = document.createElement(`p`);
        parrafoNuevo.innerHTML = `Regido por Venus –la diosa griega Afrodita- el séptimo signo del zodíaco está representado por la figura de la balanza. Pertenece al elemento Aire. Forman parte del signo de Libra los nacidos entre el 24 de septiembre y el 23 de octubre.`;
        parrafoNuevo.className = `lead`;
        section.insertBefore(parrafoNuevo,btnVerMasLibra);
        btnVerMasLibra.innerHTML = `Ocultar ⬆`;
        btnVerMasLibra.className = `btn btn-primary`;
        }else{
        section.removeChild(section.children[4]);
        btnVerMasLibra.innerHTML = `Ver mas ⬇`;
        btnVerMasLibra.className = `btn btn-primary`;
        }
        }             
        
let btnVerMasEscorpio = document.getElementById(`btnVerMasEscorpio`);
btnVerMasEscorpio.addEventListener(`click` , VerMasEscopio);
                              
function VerMasEscopio(){
            let section = document.getElementById(`SignosEscorpio`)
            if(btnVerMasEscorpio.innerHTML === `Ver mas ⬇`){
            let parrafoNuevo = document.createElement(`p`);
            parrafoNuevo.innerHTML = `Como su propio nombre lo indica, el símbolo de este signo es el escorpión. Se identifica con el elemento Agua y está regido por Marte y Plutón. Pertenecen al signo de Escorpio los nacidos entre el 24 de octubre y 22 de noviembre.`;
            parrafoNuevo.className = `lead`;
            section.insertBefore(parrafoNuevo,btnVerMasEscorpio);
            btnVerMasEscorpio.innerHTML = `Ocultar ⬆`;
            btnVerMasEscorpio.className = `btn btn-primary`;
            }else{
            section.removeChild(section.children[4]);
            btnVerMasEscorpio.innerHTML = `Ver mas ⬇`;
            btnVerMasEscorpio.className = `btn btn-primary`;
            }
            }          
     
let btnVerMasSagitario = document.getElementById(`btnVerMasSagitario`);
btnVerMasSagitario.addEventListener(`click` , VerMasSagitario);
                              
function VerMasSagitario(){
            let section = document.getElementById(`SignosSagitario`)
            if(btnVerMasSagitario.innerHTML === `Ver mas ⬇`){
            let parrafoNuevo = document.createElement(`p`);
            parrafoNuevo.innerHTML = `Junto con Aries y Leo, el signo de Sagitario pertenece al elemento Fuego. Está regido por el planeta Júpiter y representado por la flecha de arquero. Nuclea a los que nacieron entre el 23 de noviembre y 22 de diciembre.`;
            parrafoNuevo.className = `lead`;
            section.insertBefore(parrafoNuevo,btnVerMasSagitario);
            btnVerMasSagitario.innerHTML = `Ocultar ⬆`;
            btnVerMasSagitario.className = `btn btn-primary`;
            }else{
            section.removeChild(section.children[4]);
            btnVerMasSagitario.innerHTML = `Ver mas ⬇`;
            btnVerMasSagitario.className = `btn btn-primary`;
            }
            }          
            
let btnVerMasCapricornio = document.getElementById(`btnVerMasCapricornio`);
btnVerMasCapricornio.addEventListener(`click` , VerMasCapricornio);
            
            function VerMasCapricornio(){
                let section = document.getElementById(`SignosCapricornio`)
                if(btnVerMasCapricornio.innerHTML === `Ver mas ⬇`){
                let parrafoNuevo = document.createElement(`p`);
                parrafoNuevo.innerHTML = `El décimo signo del zodíaco está representado por la cabra. Su elemento es la Tierra y el planeta que lo rige es Saturno. Pertenecen al signo de Capricornio las personas nacidas entre el 23 de diciembre y el 20 de enero.`;
                parrafoNuevo.className = `lead`;
                section.insertBefore(parrafoNuevo,btnVerMasCapricornio);
                btnVerMasCapricornio.innerHTML = `Ocultar ⬆`;
                btnVerMasCapricornio.className = `btn btn-primary`;
                }else{
                section.removeChild(section.children[4]);
                btnVerMasCapricornio.innerHTML = `Ver mas ⬇`;
                btnVerMasCapricornio.className = `btn btn-primary`;
                }
                }              
                
let btnVerMasAcuario = document.getElementById(`btnVerMasAcuario`);
btnVerMasAcuario.addEventListener(`click` , VerMasAcuario);
            
            function VerMasAcuario(){
                let section = document.getElementById(`SignosAcuario`)
                if(btnVerMasAcuario.innerHTML === `Ver mas ⬇`){
                let parrafoNuevo = document.createElement(`p`);
                parrafoNuevo.innerHTML = `Este signo representado por el portador de agua se relaciona con el elemento Aire. Está gobernado por el planeta Urano y también tiene influencias de Saturno. Pertenecen al signo de Acuario aquellas personas que nacieron entre el 21 de enero y el 19 de febrero.`;
                parrafoNuevo.className = `lead`;
                section.insertBefore(parrafoNuevo,btnVerMasAcuario);
                btnVerMasAcuario.innerHTML = `Ocultar ⬆`;
                btnVerMasAcuario.className = `btn btn-primary`;
                }else{
                section.removeChild(section.children[4]);
                btnVerMasAcuario.innerHTML = `Ver mas ⬇`;
                btnVerMasAcuario.className = `btn btn-primary`;
                }
                }   
     
let btnVerMasPiscis = document.getElementById(`btnVerMasPiscis`);
btnVerMasPiscis.addEventListener(`click` , VerMasPiscis);
            
            function VerMasPiscis(){
                let section = document.getElementById(`SignosPiscis`)
                if(btnVerMasPiscis.innerHTML === `Ver mas ⬇`){
                let parrafoNuevo = document.createElement(`p`);
                parrafoNuevo.innerHTML = `Dos peces nadando en sentido opuesto representan al último signo del zodíaco. Regido por el planeta Neptuno, al igual que Cáncer y Escorpio pertenece al elemento Agua. Son del signo de Piscis los nacidos entre el 20 de febrero y el 20 de marzo.`;
                parrafoNuevo.className = `lead`;
                section.insertBefore(parrafoNuevo,btnVerMasPiscis);
                btnVerMasPiscis.innerHTML = `Ocultar ⬆`;
                btnVerMasPiscis.className = `btn btn-primary`;
                }else{
                section.removeChild(section.children[4]);
                btnVerMasPiscis.innerHTML = `Ver mas ⬇`;
                btnVerMasPiscis.className = `btn btn-primary`;
                }
                }  
 
    
    
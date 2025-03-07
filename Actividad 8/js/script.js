function mensajeSwitch() {  
    let respuesta= parseInt(document.getElementById("hora").value);
    switch (respuesta) {
        case 22:
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        
    document.getElementById("mensaje").innerHTML= "buenas noches";
    break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    document.getElementById("mensaje").innerHTML= "buenos dias";
    break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    document.getElementById("mensaje").innerHTML= "buenas noches";
    break;
  }
}

function mensajeIf(){
    let hora;
    hora =parseInt(document.getElementById("hora").value, 10);
    if (hora > 5 && hora< 11) {
        document.getElementById("mensaje").innerHTML = "buenos dias"
    }
    if (hora > 12 && hora< 21) {
        document.getElementById("mensaje").innerHTML = "buenas tardes"
    }
    if (hora > 21 && hora< 25) {
        document.getElementById("mensaje").innerHTML = "buenas noches"
    }
    if (hora > 24) {
        document.getElementById("mensaje").innerHTML = "la hora que has puesto no existe, no es valida"
    }

}






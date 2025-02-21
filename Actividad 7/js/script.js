function comprobar() {  
    let numero;
    numero = parseFloat(document.getElementById("nota").value);
    if (numero < 5) {
        document.getElementById("mensaje").innerHTML = ("estas suspenso")
    }
    else {
        document.getElementById("mensaje").innerHTML = ("estas aprobado")
    }
    if (numero > 10 || numero < 0) {
        document.getElementById("mensaje").innerHTML = ("la nota que has puesto no es correcta")
    }
}






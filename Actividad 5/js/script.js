function calcular() {  
    let numero1;
    let numero2;
    numero1 = parseInt (document.getElementById("numero1").value);
    numero2 = parseInt (document.getElementById("numero2").value);
    document.getElementById("mensaje").innerHTML = ("el primer numero es:"+ numero1 +"<br>el segundo numero es:" + numero2 + "<br>la suma es:" + (numero1+numero2) + "<br>la resta es:" + (numero1-numero2)+ "<br>la multiplicacion es:" + (numero1*numero2)+ "<br>la division es:" + (numero1/numero2) + "<br>el resto es:" + (numero1%numero2) +"");
}






function calculadoraEsfuerzo(){
    var a = document.getElementById("n1");
    var b = document.getElementById("n2");
    var c = document.getElementById("N1");
    var d = document.getElementById("N2");
    
    var vocabulario = parseInt(a.value) +parseInt(b.value)
    var Longitud = parseInt(c.value) + parseInt(d.value)
    var Volumen = Longitud * Math.log2(vocabulario);
    var Dificultad = (a.value/2)*(d.value/b.value);
    n3.value=Dificultad*Volumen
    
}
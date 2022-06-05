function maximoComunDivisor(){
    var x = document.getElementById("n1");
    var y = document.getElementById("n2");
    var n1=x.value
    var n2=y.value
    let temporal;
    while (n2 != 0) {
        temporal = n2;
        n2 = n1 % n2;
        n1 = temporal;
    }
    return n1;
};

function minimoComunMultiplo(){
    var x = document.getElementById("n1");
    var y = document.getElementById("n2");
    var z = document.getElementById("n3");
    z.value = (x.value * y.value) / maximoComunDivisor();
    x.value=null;
    y.value=null;
};
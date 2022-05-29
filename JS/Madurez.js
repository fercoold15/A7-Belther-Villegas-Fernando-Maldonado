function calculadoraIMS(){
    var a = document.getElementById("MT");
    var b = document.getElementById("FM");
    var c = document.getElementById("FA");
    var d = document.getElementById("FE");
    var MT=a.value;
    var FM=b.value;
    var FA=c.value;
    var FE=d.value;
    n3.value=(MT-(FA+FM+FE))/MT;
    a.value=null;
    b.value=null;
    c.value=null;
    d.value=null;
}
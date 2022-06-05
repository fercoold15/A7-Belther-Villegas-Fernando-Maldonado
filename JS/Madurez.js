function calculadoraIMS(){
    var a = document.getElementById("MT");
    var b = document.getElementById("FM");
    var c = document.getElementById("FA");
    var d = document.getElementById("FE");
    
    var MT=parseInt(a.value);
    var FM=parseInt(b.value);
    var FA=parseInt(c.value);
    var FE=parseInt(d.value);
    

    n3.value=(MT-(FM+FA+FE))/MT;
    a.value=null;
    b.value=null;
    c.value=null;
    d.value=null;
}
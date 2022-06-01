function convertidor() {
    var str = document.getElementById("cadena");
    console.log(str.value);
    html.value = String(str.value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/á/g, '&#225;').replace(/é/g, '&#233;').replace(/í/g, '&#237;').replace(/ó/g, '&#243;').replace(/ú/g, '&#250;').replace(/“/g,'&quot;');
}
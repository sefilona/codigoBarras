
function submitForm() {

    var inputVal = document.getElementById("fname").value;
    var cadenaSinEspacios = inputVal.trim();
    var cadenaLimpia = cadenaSinEspacios.replace(/\s+/g, '');
    var grupos = cadenaLimpia.match(/.{1,9}/g);

    for (let i = 0; i < grupos.length; i++) {
        inputVal = grupos[i];

        var nuevaImagen = document.createElement('img');
        nuevaImagen.setAttribute("id","miImagen")
        nuevaImagen.setAttribute("data-value", inputVal);
        nuevaImagen.setAttribute("data-text", inputVal);
        nuevaImagen.style.width = '80%';

        var divImagen = document.getElementById('imagen');
        divImagen.appendChild(nuevaImagen);
        JsBarcode("#miImagen").init();
    }

}
function limpiar() {
    location.reload();
}





    







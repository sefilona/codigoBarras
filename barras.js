

function submitForm() {
    var inputVal = document.getElementById("fname").value;
    var imagen = document.getElementById("miImagen");
    imagen.setAttribute("data-value", inputVal);
    imagen.setAttribute("data-text", inputVal);

    JsBarcode(".codigo").init();

}



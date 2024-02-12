

function submitForm() {
    var inputVal = document.getElementById("fname").value;
    var cadenaSinEspacios = inputVal.trim();
    console.log(cadenaSinEspacios);

    var cadenaLimpia = cadenaSinEspacios.replace(/\s+/g, '');
    console.log(cadenaLimpia);

    const grupos = cadenaLimpia.match(/.{1,9}/g);

    console.log(grupos);

    for (let i = 0; i < grupos.length; i++) {
        inputVal = grupos[i];
        console.log(inputVal)

        const nuevaImagen = document.createElement('img');
        nuevaImagen.setAttribute("id","miImagen")
        nuevaImagen.setAttribute("data-value", inputVal);
        nuevaImagen.setAttribute("data-text", inputVal);
        document.body.appendChild(nuevaImagen);
        JsBarcode("#miImagen").init();

}
}


    







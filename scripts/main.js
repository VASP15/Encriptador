function encriptar() {
    let escritura__texto = document.getElementById("escritura__texto").value;
    let no__mensaje = document.getElementById("no__mensaje");
    let ingresar__mensaje = document.getElementById("ingresar__mensaje");
    let no_found = document.getElementById("no_found");
    let resultado__texto = document.getElementById("resultado__texto");
    let boton__copiar = document.querySelector(".boton__copiar");

    let textoCifrado = escritura__texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (escritura__texto.length != 0) {
        resultado__texto.value = textoCifrado;
        no__mensaje.style.display = "none";
        ingresar__mensaje.style.display = "none";
        no_found.style.display = "none";
        resultado__texto.style.display = "block"; 
        boton__copiar.style.display = "block"; 
    }
}

function desencriptar() {
    let escritura__texto = document.getElementById("escritura__texto").value;
    let no__mensaje = document.getElementById("no__mensaje");
    let ingresar__mensaje = document.getElementById("ingresar__mensaje");
    let no_found = document.getElementById("no_found");
    let resultado__texto = document.getElementById("resultado__texto");

    let textoDesencriptado = escritura__texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (escritura__texto.length != 0) {
        resultado__texto.value = textoDesencriptado;
        no__mensaje.style.display = "none";
        ingresar__mensaje.style.display = "none";
        no_found.style.display = "none";
        resultado__texto.style.display = "block";
        boton__copiar.style.display = "block"; 
    }
}

function copiar() {
    if (resultado__texto.value.length != 0) {
        navigator.clipboard.writeText(resultado__texto.value)
            .then(() => {
                let popup = document.getElementById("popup");
                popup.classList.add("show");

                setTimeout(() => {
                    popup.classList.remove("show");
                }, 1000);
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    }
}
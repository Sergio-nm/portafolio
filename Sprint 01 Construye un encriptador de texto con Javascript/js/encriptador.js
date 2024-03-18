const modal = document.getElementById("miModal");

 

function btncifrar(){
    if (!verificarInput()) {
        return 0;
    }
    
    cifrar("cifrar");
}
function btndescifrar() {
    if (!verificarInput()) {
        return 0;
    }
     cifrar("descifrar");
}

function Limpiar() {
    document.getElementById("miModal").style.display ="block";
    document.getElementById("aviso").textContent ="Aviso";
    document.getElementById("mensaje").textContent ="Reiniciando Campos del Codificador.";
    document.getElementById("txtCodificado").value ="";
    document.getElementById("txtEncriptar").value ="";
}

function cifrar(opcion){
    var texto=document.getElementById("txtEncriptar").value;
    var resultado="";
    if (opcion === "cifrar") {
        for (var i = 0; i < texto.length; i++) {
            if (texto[i] === "e") {
                resultado += "enter";
            } else if (texto[i] === "i") {
                resultado += "imes";
            } else if (texto[i] === "a") {
                resultado += "ai";
            } else if (texto[i] === "o") {
                resultado += "ober";
            } else if (texto[i] === "u") {
                resultado += "ufat";
            } else {
                resultado += texto[i];
            }
        }
    } else if (opcion === "descifrar") {
        var i = 0;
        while (i < texto.length) {
            if (texto[i] === "e") {
                resultado += "e";
                i += 5;
            } else if (texto[i] === "i") {
                resultado += "i";
                i += 4;
            } else if (texto[i] === "a") {
                resultado += "a";
                i += 2;
            } else if (texto[i] === "o") {
                resultado += "o";
                i += 4;
            } else if (texto[i] === "u") {
                resultado += "u";
                i += 4;
            } else {
                resultado += texto[i];
                i++;
            }
        }
    }
    document.getElementById("txtCodificado").value = resultado;
            }


function copiarTextoYLimpiar() {
    var texto = document.getElementById("txtCodificado").value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            document.getElementById("miModal").style.display ="block";
            document.getElementById("aviso").textContent ="Aviso";
            document.getElementById("mensaje").textContent ="Se ha copiado el texto correctamente";
        })
        .catch(err => {
            console.error('Error al copiar texto: ', err);
        });
}

function verificarInput() {
    var entrada = document.getElementById("txtEncriptar").value;
    var regex = /^[a-z]+$/;
    if (entrada=="") {
        document.getElementById("miModal").style.display ="block";
        document.getElementById("aviso").textContent ="Error";
        document.getElementById("mensaje").textContent ="El input no contiene ningún texto.";
        return false;
    }else
    if (!regex.test(entrada) ) {
        document.getElementById("miModal").style.display ="block";
        document.getElementById("aviso").textContent ="Error";
        document.getElementById("mensaje").textContent ="El input contiene caracteres especiales, letras mayúsculas o minúsculas con acentos porfavor corrigelo.";
        return false;
    } else  {
        return true;
    }
  }

  function cerrarModal() {
    document.getElementById("miModal").style.display ="none";
  }

  
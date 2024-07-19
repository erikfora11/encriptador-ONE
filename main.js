
var encriptado = false; 
var mayusculas = false;

function encriptar(){
    
    let ErrMensaje = document.querySelector("#error");
    let entrada = document.querySelector("#entrada").value;
    // usamos expresiones regulares para encontrar mayusculas
    if((/[A-Z,Á-Ú,á-ú]/gm).test(entrada)){
       mayusculas = true;
       ErrMensaje.style.color = "red";
       ErrMensaje.innerHTML = "no se ha podido encriptar tu mensaje: Caracteres invalidos";
       
    }else{
        ErrMensaje.innerHTML = '';
        mayusculas = false;
        
    }

    if (!mayusculas){

      entrada = entrada.replace(/[a]/gm, 'ai')
      .replace(/[e]/gm, "enter")
      .replace(/[u]/gm, 'ufat')
      .replace(/[o]/gm, 'ober')
      .replace(/[i]/gm, "imes");

      encriptado = true;
      document.querySelector("#salida").innerHTML = `<p id = "copiar">${entrada}</p> \n <button onclick = "copiar()">copiar</button>`;
    }
}

function desencriptar(){
    let entrada = document.querySelector("#entrada").value;
    //La funcion desencriptar hace uso de una expresion regular, para desencriptar el mensaje /*parametro*/ 
       
      entrada = entrada.replace(/imes/gm, 'i')
      .replace(/ai/gm, 'a').replace(/enter/gm, 'e')
      .replace(/ober/gm, 'o').replace(/ufat/gm, 'u');

      encriptado = false;

      document.querySelector("#salida").innerHTML = `<p id="copiar">${entrada}</p>  <button onclick = "copiar()">copiar</button>`;
}

//usando clipboard api copiamos el texto retornando una promesa
async function copiar(){
    var contenido = document.querySelector("#copiar").innerText;
    console.log(contenido);
    try{
      await navigator.clipboard.writeText(contenido);
    }catch(err){
       console.error(err); 
    }
    
    console.log(navigator.clipboard.readText());
}
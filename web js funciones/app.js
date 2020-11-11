function saludar() {
    alert("Hola clase");
}

saludar();

function saludopersonalizado(nombre) {
    let mensaje="Hola ";
    alert(mensaje+nombre);
}

//saludopersonalizado("Pepe");
//saludopersonalizado("Isabel");
//saludopersonalizado("Martin");
//let nombre = "Javier";
//saludopersonalizado(nombre)

//function cambiarparrafo(contenido) {
//    let elemento = document.getElementById("parrafo");
//    elemento.innerHTML = contenido
//}

function cambiarelemento(idelemento, contelemento) {
    let elemento = document.getElementById(idelemento);
    elemento.innerHTML = contelemento;
}

//cambiarparrafo("parrafo cambiado");

document.getElementById("inputid").value = "hola"

cambiarelemento("parrafo","Hola caracola");
cambiarelemento("parrafo2","Hola mundo");
cambiarelemento("parrafo3","adiós mundo");
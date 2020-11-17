

function anyadirtarea() {
    //tomo el valor de input
    let etarea = document.getElementById("tarea")
    //compruebo si tiene texto
    if (etarea.value != "") {
    //si tiene texto, añado el elemento en la lista
        anyadirelemento(etarea.value);
    //Después de añadir, borro el elemento input
        etarea.value = "";
    }
    //Si no tiene texto no hago nada
}
//añadir el elemento a la lista
//cogera un parámetro y lo añadira a la lista listatareas
function anyadirelemento(textotarea) {
    //cogo el elemento de la lista
    let listatareas = document.getElementById("listatareas")
    //le añado un elemento de lista con el texto del elemento textotarea
    listatareas.innerHTML+="<li>"+textotarea+"</li>";
}



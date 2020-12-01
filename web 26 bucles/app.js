//capturar la lista del html
let lista = document.getElementById("lista");
//iniciar la variable de iteración
let i = 0;
//empezar el bucle, desde 0 hasta <length
while (i < lista.children.length) {
    //acceder al contenido del elemento children[]
    let hijo = lista.children[i]
    //añadirle un punto (concatenar con +)
    hijo.innerHTML = hijo.innerHTML + ".";
    //finalizar el bucle
    i++
}

for (let i = 0; i < lista.children.length; i++) {
    lista.children[i].innerHTML += ".";
}

for (let i = 0; i < lista.children.length; i++) {
    if (i == 1 || i == 3) {
        lista.children[i].style.color="red";
    }
}

let artistas = ["amaral", "estopa", "el canto del loco", "c tangana", "rosalia", "vetusta morla", "tatchenko", "pecker", "mago de oz", "la polla records"];

//rellenad la tabla "tabla" del html siguiendo el siguiente patrón:
//+---+----------------------+
//| 1 | Amaral               |
//---------------------------|
//| 2 | Estopa               |
//---------------------------|
//| 3 | El canto del loco    |

//iteramos por array artistas con un for
//para cada valor de i
    //creamos un tr
    //creamos un td y le ponemos de contenido i+1
    //creamos otro td y le ponemos de contenido el artista que toque
    //añadimos los dos td's al elemento tr que hemos creado
    //añadimos el elemento tr a la tabla
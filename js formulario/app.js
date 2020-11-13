function saludar() {


    let elinput;

    elinput = document.getElementById("idinput");
    if (elinput.value != "") {
        alert("Hola " + elinput.value);

        elinput.value = "";
    }

}
// valide le ToDo quand on press entre
var entrer = document.getElementById("ToDo");
entrer.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnEntre").click();
    }
});

//récupérer le ToDo de l'utilisateur et l'ajouter à la TodoListe
function addToDo(){
    var toDo = document.createElement("li");
    toDo.textContent = document.getElementById("ToDo").value;
    
    let newInput = document.createElement('button');
    newInput.textContent = "suprimer";
    newInput.addEventListener('click', () => toDo.remove());
    toDo.appendChild(newInput);

    document.getElementById("liste").appendChild(toDo);
}


//récupérer le ToDo de l'utilisateur d'ajouter un to do à la TodoListe
function addToDo(){
    b = document.getElementById("liste");
    var toDo = document.getElementById("ToDo").value;
    let newLi = document.createElement('li');
    newLi.textContent = toDo;
    b.append(newLi);
}


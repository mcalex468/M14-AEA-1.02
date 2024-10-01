function añadirTarea() {
    // obtener el valor del input
    var tareaInput = document.getElementById('tareaNova');
    var tarea = tareaInput.value;

    // crear y añadir el nuevo elemento de lista
    var li = document.createElement('li');
    li.textContent = tarea;
    document.getElementById('llistaTasques').appendChild(li);

       // Crear el botón de eliminación
       var deleteButton = document.createElement('button');
       deleteButton.textContent = ' Eliminar';
       deleteButton.className = 'delete-btn';
       deleteButton.onclick = function() {
           eliminarTarea(li); // funcion eliminar
       };

       // boton a la lista
       li.appendChild(deleteButton);

       // funcion eliminar 
       function eliminarTarea(tarea) {
    
        tarea.remove();
    }
}


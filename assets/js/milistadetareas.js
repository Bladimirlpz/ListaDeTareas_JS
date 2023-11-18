
let tareaNueva = document.querySelector("#tareaNueva");
let botonAgregar = document.querySelector("#agregarTarea");
let listaId = document.querySelector("#id")
let listaDeTareas = document.querySelector("#listaTarea");
let listaCheck = document.querySelector("#check");
let listaEliminarTarea = document.querySelector("#eliminarTarea");
let cuentaTareas = document.querySelector("#contador-tareas");
const tareas = [{ id : 1, descripcionTarea: "Pasear al peroo", realizada: false},
                { id : 2, descripcionTarea: "Pasear al gato", realizada: false},
                { id : 3, descripcionTarea: "Terminar tarea", realizada: false}];

    //Tareas iniciales

    let listadoId="";
    let listadoTareas = "";
    let listadoCheck = "";
    let listadoBorrar = "";
    for (let tarea of tareas){
    if (tareas.length >= 1){
        cuentaTareas.innerHTML= `Tienes ${tareas.length} tareas`; 
    }  
    listadoId+= `<p>${tarea.id}</p>`;
    listadoTareas+= `<p>${tarea.descripcionTarea}</p>`;
    listadoCheck+= `<input  type="checkbox" class="check" value="${tarea.id}"></input><br>`;
    listadoBorrar+= `<p onclick="eliminarTarea(${tarea.id})"><i class="fa-solid fa-x fa-sm" style="color: #ff090f;"></i></p>`;      
    }
    listaId.innerHTML = listadoId;
    listaDeTareas.innerHTML = listadoTareas;
    listaCheck.innerHTML = listadoCheck;
    listaEliminarTarea.innerHTML = listadoBorrar;
    renderTareas()            

    // Evento para boton de agregar tareas
    botonAgregar.addEventListener("click", () => {
    if (tareaNueva.value){
    let tarea = tareaNueva.value;
    tareas.push({ id :  tareas[tareas.length-1].id+1, descripcionTarea: tarea, realizada: false});
    tareaNueva.value = "";
    }
    else {
        alert ("Debe ingresar una tarea");
    } 
    renderTareas();
    })

    // Funcion para renderizar las tareas que agregamos
    
    function renderTareas (){
    // Contador de tareas Pendientes
    if (tareas.length > 0){
        cuentaTareas.innerHTML= `<p>Tienes ${tareas.length} tareas</p>`; 
    }else {
        cuentaTareas.innerHTML= `<p>No tienes tareas</p>`;    
    }
    let listadoId="";
    let listadoTareas = "";
    let listadoCheck = "";
    let listadoBorrar = "";
    for (let tarea of tareas){
    listadoId+= `<p>${tarea.id}</p>`;
    listadoTareas+= `<p>${tarea.descripcionTarea}</p>`;
    listadoCheck+= `<input  type="checkbox" class="check" value="${tarea.id}"></input><br>`;
    listadoBorrar+= `<p onclick="eliminarTarea(${tarea.id})"><i class="fa-solid fa-x fa-sm" style="color: #ff090f;"></i></p>`;      
    }
    listaId.innerHTML = listadoId;
    listaDeTareas.innerHTML = listadoTareas;
    listaCheck.innerHTML = listadoCheck;
    listaEliminarTarea.innerHTML = listadoBorrar;
    }

    // Funcion para eliminar tareas
    function eliminarTarea (id){
    let index = tareas.findIndex ((ele)=> ele.id === id);
    tareas.splice(index,1);
    renderTareas ();
    }

    // Funcion para tareas realizadas

    let checkboxes = document.querySelectorAll(".check");
    for (let checkbox of checkboxes){
    checkbox.addEventListener("click", function(){
    if (checkbox.checked == true){    
        let idchk = Number (checkbox.value);
        let tareaEncontrada = tareas.find( tarea => tarea.id === idchk);
        tareaEncontrada.realizada = true;
    } else if (checkbox.checked == false) {
        let idchk = Number (checkbox.value);
        let tareaEncontrada = tareas.find( tarea => tarea.id === idchk);
        tareaEncontrada.realizada = false;
    }
    //contador de tareas realizadas
    let tareaRealizada = document.querySelector("#tareas-realizadas");
    let contadorRealizadas = tareas.filter ((contador) => contador.realizada === true);
        if (contadorRealizadas.length >= 1 ){
    tareaRealizada.innerHTML = `<p>Tienes ${contadorRealizadas.length} tareas realizadas</p>`;
    }   else if (contadorRealizadas.length === 0) {
    tareaRealizada.innerHTML = `<p>No tienes tareas realizadas</p>`;
    }})}


    
    
    



         
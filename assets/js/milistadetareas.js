
let tareaNueva = document.querySelector("#tareaNueva");
let botonAgregar = document.querySelector("#agregarTarea");
let listaId = document.querySelector("#id")
let listaDeTareas = document.querySelector("#listaTarea");
let listaCheck = document.querySelector("#check");
let listaEliminarTarea = document.querySelector("#eliminarTarea");
let cuentaTareas = document.querySelector("#contador-tareas");
const tareas = [];

// Evento para boton de agregar tareas
botonAgregar.addEventListener("click", () => {
    if (tareaNueva.value){
    let tarea = tareaNueva.value;
    tareas.push({ id : tareas.length + 1, descripcionTarea: tarea, realizada: false});
    tareaNueva.value = "";
    console.log(tareas)
    renderTareas();
}
    else {
        alert ("Debe ingresar una tarea")
    }
    
})

/* let btnInput = document.querySelector("input");
btnInput.addEventListener ("check", ()=>{
    let tareaEncontrada = btnInput.value;
    tareaEncontrada= ;
    renderTareas();
} ) */

// Funcion para que al hacer check se marque como realizada
let tareaEncontrada = tareas.find( tarea => tarea.realizada === realizada)
    tareaEncontrada.realizada = true;
function tareaRealizada (realizada){
    
}

// Funcion para eliminar tareas
function eliminarTarea (id){
    let index = tareas.findIndex ((ele)=> ele.id == id);
    tareas.splice(index,1);
    renderTareas ();
}

// Funcion para renderizar las tareas que agregamos
function renderTareas (){
    let listadoId="";
    let listadoTareas = "";
    let listadoCheck = "";
    let listadoBorrar = "";
    for (let tarea of tareas){
    listadoId+= `<p>${tarea.id}</p>`;
    listadoTareas+= `<p>${tarea.descripcionTarea}</p>`;
    listadoCheck+= `<input type="checkbox" value="${tarea.realizada}">`;
    listadoBorrar+= `<p onclick="eliminarTarea(${tarea.id})"><i class="fa-solid fa-x fa-sm" style="color: #ff090f;"></i></p>`;      
    }
    listaId.innerHTML = listadoId;
    listaDeTareas.innerHTML = listadoTareas;
    listaCheck.innerHTML = listadoCheck;
    listaEliminarTarea.innerHTML = listadoBorrar;

// Contador de tareas agregadas
    if (tareas.length >= 1){
        cuentaTareas.innerHTML= `Tienes ${tareas.length} tareas pendientes`; 
    }else {
        cuentaTareas.innerHTML= `No tienes tareas pendientes`;    
    }  
}




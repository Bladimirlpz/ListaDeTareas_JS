
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

// Evento para boton de agregar tareas
//tareas[tareas.length-1].id-1
botonAgregar.addEventListener("click", () => {
    if (tareaNueva.value){
    let tarea = tareaNueva.value;
    tareas.push({ id :  tareas[tareas.length-1].id+1, descripcionTarea: tarea, realizada: false});
    tareaNueva.value = "";
}
    else {
        alert ("Debe ingresar una tarea")
    } 
    renderTareas();
})

// Funcion para eliminar tareas
function eliminarTarea (id){
    let index = tareas.findIndex ((ele)=> ele.id === id);
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
    listadoCheck+= `<input onchange="" type="checkbox" class="check"><br>`;
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

//Tareas iniciales

let listadoId="";
    let listadoTareas = "";
    let listadoCheck = "";
    let listadoBorrar = "";
for (let tarea of tareas){
    listadoId+= `<p>${tarea.id}</p>`;
    listadoTareas+= `<p>${tarea.descripcionTarea}</p>`;
    listadoCheck+= `<input onchange="" type="checkbox" class="check"><br>`;
    listadoBorrar+= `<p onclick="eliminarTarea(${tarea.id})"><i class="fa-solid fa-x fa-sm" style="color: #ff090f;"></i></p>`;      
    }
    listaId.innerHTML = listadoId;
    listaDeTareas.innerHTML = listadoTareas;
    listaCheck.innerHTML = listadoCheck;
    listaEliminarTarea.innerHTML = listadoBorrar;
    if (tareas.length >= 1){
        cuentaTareas.innerHTML= `Tienes ${tareas.length} tareas pendientes`; 
    }else {
        cuentaTareas.innerHTML= `No tienes tareas pendientes`;    
    }



// Funcion para marcas tareas realizadas con checkbox

/* let btncheck = document.querySelectorAll(".check");
        btncheck.forEach((e) =>{
            if (e.checked === true)
            console.log(e)
        })
console.log(btncheck) */
console.log(tareas)
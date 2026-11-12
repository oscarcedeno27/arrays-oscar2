let listaNombres = []; // Crear un arreglo vacío

let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre");
let lista = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre=inputNombre.value.trim().toUpperCase();

    if(nombre===""){
        alert("ingrese el Nombre");
        inputNombre.style.backgroundColor="red";
    }
    else if(listaNombres.includes(nombre)){
        alert("El nombre ya se encuentra registrado")
    }
    else{
        
        inputNombre.style.backgroundColor="#08080d";
        listaNombres.push(nombre);
        inputNombre.value="";
        inputNombre.focus();
        mostrarNombre();
    }

});

function mostrarNombre(){
    lista.innertext="";
    for(let i=0; i<listaNombres.length; i++){
        lista.innerHTML+=`<li>${listaNombres[i]}</li>`
    }

    cantidad.innerText=`Total nombres: ${listaNombres.length}`;
}
let listaProductos = [];

let formulario = document.getElementById("formulario");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

formulario.addEventListener("submit", agregarProducto);

function agregarProducto(){
    event.preventDefault();

    let productoAgregado = producto.value;
    let precioAgregado = parseFloat(precio.value);
    let cantidadAgregada = parseInt(cantidad.value);

    // validar campor producto, precio y cantidad

    listaProductos.push({
        nombre : productoAgregado,
        precio : precioAgregado,
        cantidad : cantidadAgregada
    });

    formulario.reset();

    mostrar();
}

function mostrar(){
    let totalNuevo = 0
    tabla.innerText = "";

    for (let i = 0; i < listaProductos.length; i++) {
        totalNuevo += listaProductos[i].precio*listaProductos[i].cantidad
        tabla.innerHTML += `<tr>
                <td>${listaProductos[i].nombre}</td>
                <td>${listaProductos[i].precio}</td>
                <td>${listaProductos[i].cantidad}</td>
                <td>${listaProductos[i].precio*listaProductos[i].cantidad}</td>
            </tr>`
    }

    total.innerText = `total: ${totalNuevo}`;
}
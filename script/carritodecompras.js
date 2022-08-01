const agregar_al_carrito = document.querySelectorAll('#boton_carrito_de_compras');
agregar_al_carrito.forEach((boton_agregar_al_carrito) => {
    boton_agregar_al_carrito.addEventListener('click', agregar_al_carro_con_click);
})

const contenedor_de_carrito = document.querySelector('.contenedor_de_carrito');

const productos = [];

function mostrarGuardado() {
    const guardarLocalStore = localStorage.getItem("Productos");
    const mostrarLocalStorage = JSON.parse(guardarLocalStore);

    if (mostrarLocalStorage !== null) {
        mostrarLocalStorage.forEach((producto) => {
            agregar_todo_al_carrito(producto.nombre, producto.precio, producto.imagen)
        });
    }
}

mostrarGuardado();

function agregar_al_carro_con_click(event) {
    const boton_idenf_carrito = event.target;
    const producto = boton_idenf_carrito.closest('.card');

    const producto_nombre = producto.querySelector('.card-title').textContent;
    const producto_precio = producto.querySelector('.carritodecompras__button-submit').textContent;
    const producto_imagen = producto.querySelector('.card-img-top').src;

    agregar_todo_al_carrito(producto_nombre, producto_precio, producto_imagen);
}

function agregar_todo_al_carrito(producto_nombre, producto_precio, producto_imagen) {
    const div_carrito = document.createElement('div');
    const carrito_html = ` 
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${producto_imagen} class="shopping-cart-image">
                <h6 class="black shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${producto_nombre}
                </h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="black item-price mb-0 shoppingCartItemPrice">${producto_precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="black shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    div_carrito.innerHTML = carrito_html;
    contenedor_de_carrito.append(div_carrito);

    const guardarProductos = {
        nombre: producto_nombre,
        imagen: producto_imagen,
        precio: producto_precio
    }

    productos.push(guardarProductos);

    localStorage.setItem("Productos", JSON.stringify(productos));
}


//** Librería */

const completar_compra = document.getElementById(boton_comprar);

boton_comprar.addEventListener('click', () => {

    swal({
            title: "¿Estás seguro?",
            text: "Se realizará la compra de todos los productos seleccionados.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal({
                    title: "¡Listo!",
                    text: "La compra ha sido finalizada ¡Muchas gracias!",
                    icon: "success",
                });
                localStorage.clear();
            } else {
                swal("No has completado la compra. ¡Sigue comprando!", {
                    icon: "warning"
                });
            }
        });
})








//* API Pokemon */
const mostrarPokemon = document.getElementById('#mostrarPokemon');
let mostrarNombre = "";

async function getBerry() {
    const response = await fetch('https://pokeapi.co/api/v2/berry-flavor/spicy')
    const berry = await response.json();
    return berry
    // .then((response) => response.json())
    // .then((data) => {
    //     const li = document.createElement('li')
    //     li.innerHTML = `
    // <h4>${data.berries[0].berry.name}</h4>
    // `
    //     mostrarPokemon.append(li)
    // });
}
const llamarBerry = getBerry().then((response) => {
    console.log(response)
});
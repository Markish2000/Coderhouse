const productos = [];
const contenedor_de_carrito = document.querySelector('.contenedor_de_carrito');
const agregar_al_carrito = document.querySelectorAll('#boton_carrito_de_compras');
agregar_al_carrito.forEach((boton_agregar_al_carrito) => {
    boton_agregar_al_carrito.addEventListener('click', agregar_al_carro_con_click);
})

//**↓↓Hacer función↓↓*/

let total = 0;
const totalP = document.querySelector('.div__total');
const parrafo = document.createElement('div');
const mostrarP = `<p id="total" class="ml-4 mb-0 shoppingCartTotal black">${total} US$</p>`;
parrafo.innerHTML = mostrarP;
totalP.append(parrafo);

//**↑↑Hacer función↑↑*/

//**Esta función multiplica el precio por la cantidad de productos que hay y muestra el total de todos los productos. */
function sumarTotal(precio, cantidad) {
    total += precio * cantidad;
}

//**Esta función obtiene lo guardado en la variable "Productos" y luego le pregunta al localstore si hay algo guardado, en el caso de es que es diferente a null (Que hay algo) me muestra la función "agregar_al_carrito_automatico". */
function mostrarGuardado() {
    const guardarLocalStore = localStorage.getItem("productos");
    const mostrarLocalStorage = JSON.parse(guardarLocalStore);

    if (mostrarLocalStorage !== null) {
        mostrarLocalStorage.forEach((producto) => {
            agregar_al_carrito_automatico(producto.nombre, producto.precio, producto.imagen, producto.cantidad)
        });
    }
}
mostrarGuardado();

//** */
function agregar_al_carrito_automatico(producto_nombre, producto_precio, producto_imagen, producto_cantidad) {
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
                    value="${producto_cantidad}">
                <button id="${producto_nombre}" class="btn btn-danger buttonDelete" type="button" onclick=deleteAProduct(this)>X</button>
            </div>
        </div>
    </div>`;
    div_carrito.innerHTML = carrito_html;
    contenedor_de_carrito.append(div_carrito);


    //**↓↓Hacer función↓↓*/

    const guardarProductos = {
        cantidad: producto_cantidad,
        nombre: producto_nombre,
        imagen: producto_imagen,
        precio: producto_precio
    }

    //**↑↑Hacer función↑↑*/


    productos.push(guardarProductos);
    sumarTotal(producto_precio, producto_cantidad);
    const totalABorrar = document.getElementById('total');
    totalABorrar.remove();
    const pNuevo = `<p id="total" class="ml-4 mb-0 shoppingCartTotal black">${total} US$</p>`;
    parrafo.innerHTML = pNuevo;
    totalP.append(parrafo);
}

//** */
function sumarTotal(precio, cantidad) {
    total += precio * cantidad;
}

//** */
function agregar_al_carro_con_click(event) {
    const boton_idenf_carrito = event.target;
    const producto = boton_idenf_carrito.closest('.card');
    const producto_nombre = producto.querySelector('.card-title').textContent;
    const producto_precio = producto.querySelector('.carritodecompras__button-submit').textContent;
    const producto_imagen = producto.querySelector('.card-img-top').src;

    agregar_todo_al_carrito(producto_nombre, producto_precio, producto_imagen);
}

//** */
function agregar_todo_al_carrito(producto_nombre, producto_precio, producto_imagen) {
    let num = 1;
    const guardarLocalStore = localStorage.getItem("productos");
    const mostrarLocalStorage = JSON.parse(guardarLocalStore);
    let productoRepetido = null;
    const guardarProductos = {
        cantidad: num,
        nombre: producto_nombre,
        imagen: producto_imagen,
        precio: producto_precio
    }

    if (mostrarLocalStorage !== null) {
        mostrarLocalStorage.forEach((producto) => {
            if (producto.nombre == producto_nombre) {
                guardarProductos.cantidad = producto.cantidad + 1;
                productoRepetido = producto;
            }
        })
    }

    //**↓↓Hacer función↓↓*/
    if (productoRepetido !== null) {
        const arrayDeleteProduct = mostrarLocalStorage.filter((producto) => producto.nombre !== productoRepetido.nombre);
        arrayDeleteProduct.push(guardarProductos);
        localStorage.setItem("productos", JSON.stringify(arrayDeleteProduct));
        const completar_compra = document.getElementById(producto_nombre);
        completar_compra.remove();
        agregar_al_carrito_automatico(producto_nombre, producto_precio, producto_imagen, guardarProductos.cantidad);
        location.reload();
    } //**↑↑Hacer función↑↑*/
    else {
        const div_carrito = document.createElement('div');
        const carrito_html = ` 
        <div id="${producto_nombre}" class="row shoppingCartItem">
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
                        value="${num}">
                    <button id="${producto_nombre}" class="btn btn-danger buttonDelete" type="button" onclick=deleteAProduct(this)>X</button>
                </div>
            </div>
        </div>`;
        div_carrito.innerHTML = carrito_html;
        contenedor_de_carrito.append(div_carrito);
        productos.push(guardarProductos);
        localStorage.setItem("productos", JSON.stringify(productos));
    }
};

//** */
function deleteAProduct(nombreDelProducto) {
    const guardarLocalStore = localStorage.getItem("productos");
    const carrito = JSON.parse(guardarLocalStore);
    if (carrito !== null) {
        const productoABorrar = traeProducto(nombreDelProducto.id, carrito);
        if (productoABorrar.cantidad > 1) {
            const arrayDeleteProduct = carrito.filter((producto) => producto.nombre !== nombreDelProducto.id);
            productoABorrar.cantidad = productoABorrar.cantidad - 1;
            arrayDeleteProduct.push(productoABorrar);
            localStorage.setItem("productos", JSON.stringify(arrayDeleteProduct));
            const completar_compra = document.getElementById(nombreDelProducto.id);
            completar_compra.remove();
            agregar_al_carrito_automatico(productoABorrar.nombre, productoABorrar.precio, productoABorrar.imagen, productoABorrar.cantidad);
            location.reload();
        } else {
            const arrayDeleteProduct = carrito.filter((producto) => nombreDelProducto.id !== producto.nombre);
            localStorage.setItem("productos", JSON.stringify(arrayDeleteProduct));
            location.reload();
        }
    };
}

//* */
function traeProducto(nombreDelProducto, carrito) {
    const product = [];
    carrito.forEach((producto) => {
        if (producto.nombre == nombreDelProducto) {
            product.push(producto);
        }
    })
    return product[0];
}
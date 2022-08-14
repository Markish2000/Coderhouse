//** DECLARACIÓN DE VARIABLES */

let total = 0;
const productos = [];
const parrafo = document.createElement('div');
const totalP = document.querySelector('.div__total');
const contenedor_de_carrito = document.querySelector('.contenedor_de_carrito');
const agregar_al_carrito = document.querySelectorAll('#boton_carrito_de_compras');
agregar_al_carrito.forEach((boton_agregar_al_carrito) => {
    boton_agregar_al_carrito.addEventListener('click', agregar_al_carro_con_click);
});


//**FUNCIONALIDAD DE ACTUALIZAR PRECIO */
function actualizarPrecioTotal(numero) {
    parrafo.innerHTML = `<p id="total" class="ml-4 mb-0 shoppingCartTotal black">${numero} US$</p>`;
    totalP.append(parrafo);
};
actualizarPrecioTotal(0);

function addTotal(precio, cantidad) {
    total += precio * cantidad;
};


//**FUNCIONALIDAD DE AGREGAR */

// Esta función trae del localStorage los productos que el usuario guardó anteriormente, si es que tiene productos guardados, iteramos producto por producto agregándolo al carrito.
function showSavedInLocalStorage() {
    const saveLocalStore = localStorage.getItem("productos");
    const showLocalStorage = JSON.parse(saveLocalStore);
    if (showLocalStorage !== null) {
        showLocalStorage.forEach((producto) => {
            agregar_al_carrito_automatico(producto.name, producto.price, producto.image, producto.amount)
        });
    };
};
showSavedInLocalStorage();

function createProductData(producto_cantidad, producto_nombre, producto_imagen, producto_precio) {
    return {
        amount: producto_cantidad,
        name: producto_nombre,
        image: producto_imagen,
        price: producto_precio
    };
};

//Esta función crea la etiqueta div, a su vez crea etiquetas de HTML para introducir en el nuevo div, lo mete en el nuevo div y lo muestra en el div del HTML con el id="contenedor_de_carrito".
function createNewDivForShoppingCart(producto_nombre, producto_precio, producto_imagen, producto_cantidad) {
    const divForShoppingCart = document.createElement('div');
    const htmlForShoppingCart = ` 
        <div class="row shoppingCartItem">
            <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src=${producto_imagen} class="shopping-cart-image">
                    <h6 class="black shopping-cart-item-title shoppingCartItemTitle ml-3 mb-0">${producto_nombre}</h6>
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
    divForShoppingCart.innerHTML = htmlForShoppingCart;
    contenedor_de_carrito.append(divForShoppingCart);
};

// En esta función llamamos a la función de mostrar el producto mediante HTML, declaramos una variable con la función de los objetos, pusheamos todo al array, llamamos a la función de sumar y hacemos que se vaya actualizando el precio.
function agregar_al_carrito_automatico(producto_nombre, producto_precio, producto_imagen, producto_cantidad) {
    createNewDivForShoppingCart(producto_nombre, producto_precio, producto_imagen, producto_cantidad);
    const product = createProductData(producto_cantidad, producto_nombre, producto_imagen, producto_precio);
    productos.push(product);
    addTotal(producto_precio, producto_cantidad);
    const pNuevo = `<p id="total" class="ml-4 mb-0 shoppingCartTotal black">${total} US$</p>`;
    parrafo.innerHTML = pNuevo;
    totalP.append(parrafo);
};

function agregar_al_carro_con_click(event) {
    const boton_idenf_carrito = event.target;
    console.log("Hola")
    const producto = boton_idenf_carrito.closest('.card');
    const producto_nombre = producto.querySelector('.card-title').textContent;
    const producto_precio = producto.querySelector('.carritodecompras__button-submit').textContent;
    const producto_imagen = producto.querySelector('.card-img-top').src;
    agregar_todo_al_carrito(producto_nombre, producto_precio, producto_imagen);
};

function agregar_todo_al_carrito(producto_nombre, producto_precio, producto_imagen) {
    let num = 1;
    const guardarLocalStore = localStorage.getItem("productos");
    const mostrarLocalStorage = JSON.parse(guardarLocalStore);
    let productoRepetido = null;
    const product = createProductData(num, producto_nombre, producto_imagen, producto_precio);

    if (mostrarLocalStorage !== null) {
        mostrarLocalStorage.forEach((producto) => {
            if (producto.name === producto_nombre) {
                product.amount = producto.amount + 1;
                productoRepetido = producto;
            };
        });
    };

    if (productoRepetido !== null) {
        const arrayDeleteProduct = mostrarLocalStorage.filter((producto) => producto.name !== productoRepetido.name);
        arrayDeleteProduct.push(product);
        localStorage.setItem("productos", JSON.stringify(arrayDeleteProduct));
        const completar_compra = document.getElementById(producto_nombre);
        completar_compra.remove();
        agregar_al_carrito_automatico(producto_nombre, producto_precio, producto_imagen, product.amount);
        location.reload();
    } else {
        createNewDivForShoppingCart(producto_nombre, producto_precio, producto_imagen, product.amount);
        productos.push(product);
        localStorage.setItem("productos", JSON.stringify(productos));
        location.reload();
    };
};


//** FUNCIONALIDAD DE BORRAR */

function traeProducto(nombreDelProducto, carrito) {
    const product = [];
    carrito.forEach((producto) => {
        if (producto.name === nombreDelProducto) {
            product.push(producto);
        };
    });
    return product[0];
};

function deleteAProduct(nombreDelProducto) {
    const guardarLocalStore = localStorage.getItem("productos");
    console.log(guardarLocalStore);
    const carrito = JSON.parse(guardarLocalStore);
    if (carrito !== null) {
        const productoABorrar = traeProducto(nombreDelProducto.id, carrito);
        if (productoABorrar.amount > 1) {
            const arrayDeleteProduct = carrito.filter((producto) => producto.name !== nombreDelProducto.id);
            productoABorrar.amount = productoABorrar.amount - 1;
            arrayDeleteProduct.push(productoABorrar);
            localStorage.setItem("productos", JSON.stringify(arrayDeleteProduct));
            const completar_compra = document.getElementById(nombreDelProducto.id);
            completar_compra.remove();
            agregar_al_carrito_automatico(productoABorrar.name, productoABorrar.price, productoABorrar.image, productoABorrar.amount);
            location.reload();
        } else {
            const arrayDeleteProduct = carrito.filter((producto) => nombreDelProducto.id !== producto.name);
            localStorage.setItem("productos", JSON.stringify(arrayDeleteProduct));
            location.reload();
        };
    };
};
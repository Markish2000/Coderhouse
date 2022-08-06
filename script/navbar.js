let side_menu = document.getElementById("menu_side");
let btn_open = document.getElementById("btn_open");
let gremio_open = document.getElementById("gremio_open");
let cuenta_open = document.getElementById("cuenta_open");
let extra_open = document.getElementById("extra_open");
let body = document.getElementById("body");

//**Evento para abrir el navbar a través de la función "open_close_menu" */
document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("extra_open").addEventListener("click", open_close_menu);
document.getElementById("gremio_open").addEventListener("click", open_close_menu);
document.getElementById("cuenta_open").addEventListener("click", open_close_menu);

//**Función con evento de abrir y cerrar el navbar. */
function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

//**Función para que cuando la página es menor a 768px ocultará el navbar al recargar la página. */
function ocultarNavAlRecargar() {
    if (window.innerWidth < 768) {
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
}
ocultarNavAlRecargar();
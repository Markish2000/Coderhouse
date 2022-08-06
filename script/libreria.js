const completar_compra = document.getElementById(boton_comprar);

//**Cartel de alerta al botón comprar. */
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
});
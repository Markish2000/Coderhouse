//**Consumición de API en el producto en la sección "¡OFERTA!" */
const pedirFetch = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/berry-flavor/spicy')
    const data = await resp.json()
    const mostrarPokemon = document.querySelector('#mostrarPokemon');
    const li = document.createElement('li')
    li.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="../images/carritodecompras/rowap.webp" class="card-img-top"
        alt="Figura de acción de Diablilla">
    <div class="card-body">
        <h5><b class="card-title">${data.berries[0].berry.name}</b></h5>
        <p><b class="card-text">Potencia: ${data.berries[0].potency}</b></p>
        <button type="submit" id="boton_carrito_de_compras" class="carritodecompras__button-submit">US$
            30.00</button>
    </div>
</div>`
    mostrarPokemon.append(li)
}
pedirFetch()
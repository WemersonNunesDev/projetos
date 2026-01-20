const valor = document.querySelector('.valor');

const buttons = document.querySelectorAll('#controles button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const action = event.target.dataset.action;

        if (action === 'aumentar') {
            valor.textContent = parseInt(valor.textContent) + 1;
        }
        if (action === 'diminuir') {
            valor.textContent = parseInt(valor.textContent) - 1;
        }
        if (action === 'reiniciar') {
            valor.textContent = 0;
        }
        if (action === 'salvar') {
            localStorage.setItem('valorSalvo', valor.textContent)
        }
        if (action === 'carregar') {
            valor.textContent = localStorage.getItem('valorSalvo') ?? 0;
        }
    })
})
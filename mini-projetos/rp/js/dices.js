const result = document.querySelector('.resultado');

const buttons = document.querySelectorAll('#controler-dados button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const action = event.target.dataset.action;

        function rollDice(sides) {
            return Math.floor(Math.random() * sides) +1;
        }

        if (action === 'd4') result.textContent = rollDice(4);
        if (action === 'd6') result.textContent = rollDice(6);
        if (action === 'd8') result.textContent = rollDice(8);
        if (action === 'd10') result.textContent = rollDice(10);
        if (action === 'd12') result.textContent = rollDice(12);
        if (action === 'd20') result.textContent = rollDice(20);
        if (action === 'd100') result.textContent = rollDice(100);

    })
})
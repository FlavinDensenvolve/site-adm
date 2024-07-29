document.addEventListener('DOMContentLoaded', (event) => {
    const addButton = document.getElementById('add-button');
    const buttonContainer = document.getElementById('button-container');

    addButton.addEventListener('click', () => {
        const newButton = document.createElement('button');
        newButton.textContent = 'Novo Botão';
        newButton.classList.add('btn', 'btn-secondary', 'm-2');

        // Adiciona evento ao botão recém-criado
        newButton.addEventListener('click', () => {
            alert('Você clicou em um novo botão!');
        });

        buttonContainer.appendChild(newButton);
    });
});

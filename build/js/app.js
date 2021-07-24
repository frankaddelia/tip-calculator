const buttons = document.querySelectorAll('.btn-group .btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clearActiveState();
        button.classList.add('active');
    })
});

function clearActiveState() {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}
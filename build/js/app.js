const buttons = document.querySelectorAll('.btn-group .btn');

let tipPercentage = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clearActiveState();
        button.classList.add('active');

        tipPercentage = button.dataset.tipPercentage;
    })
});

function clearActiveState() {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}
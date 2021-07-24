const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('clicked! ' + button.innerHTML);
    })
});
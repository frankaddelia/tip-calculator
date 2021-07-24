const bill = document.querySelector('#bill');
const buttons = document.querySelectorAll('.btn-group .btn');
const tipAmount = document.querySelector('#tipAmount');

let billAmount = 0;
let tipPercentage = 0;

bill.addEventListener('keyup', () => {
    billAmount = parseFloat(bill.value);
    
    calculateTipAmount();
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clearActiveState();
        button.classList.add('active');

        tipPercentage = button.dataset.tipPercentage;

        calculateTipAmount();
    })
});

function clearActiveState() {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}

function calculateTipAmount () {
    if (billAmount >= 0 && isNumeric(billAmount)) {
        const total = billAmount * tipPercentage;
        tipAmount.innerHTML = `\$${total.toFixed(2)}`;
    }
}

function isNumeric (check) {
    return !isNaN(check);
}
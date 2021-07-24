const bill = document.querySelector('#bill');
const buttons = document.querySelectorAll('.btn-group .btn');
const customTip = document.querySelector('#custom-tip');
const numPeople = document.querySelector('#numPeople');
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');

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

customTip.addEventListener('keyup', () => {
    if (!isNumeric(customTip.value)) {
        console.error('value is not numeric!', customTip.value);
        return;
    }

    tipPercentage = customTip.value / 100;
    clearActiveState();
    calculateTipAmount();
});

numPeople.addEventListener('keyup', () => {
    if (!isNumeric(numPeople.value)) {
        console.error('not numeric!', numPeople.value);
        return;
    }

    calculateTipAmount(numPeople.value);
});

numPeople.addEventListener('change', () => {
    if (!isNumeric(numPeople.value)) {
        console.error('not numeric!', numPeople.value);
        return;
    }

    calculateTipAmount(numPeople.value);
});

function clearActiveState() {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}

function calculateTipAmount (totalPerPerson = 1) {
    if (billAmount >= 0 && isNumeric(billAmount)) {
        const tipTotal = billAmount * tipPercentage;
        tipAmount.innerHTML = `\$${tipTotal.toFixed(2)}`;
        total.innerHTML = `\$${((billAmount + tipTotal) / totalPerPerson).toFixed(2)}`;
    }
}

function isNumeric (check) {
    return !isNaN(check);
}
const bill = document.querySelector('#bill');
const billErrorLabel = document.querySelector('#bill-error-label');
const buttons = document.querySelectorAll('.btn-group .btn');
const customTip = document.querySelector('#custom-tip');
const numPeople = document.querySelector('#numPeople');
const numPeopleErrorLabel = document.querySelector('#numPeople-error-label');
const reset = document.querySelector('#reset');
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');

let billAmount = 0;
let tipPercentage = 0;

bill.addEventListener('keyup', () => {
    if (!isNumeric(bill.value) || bill.value < 0) {
        billErrorLabel.classList.remove('hidden');
        bill.classList.add('input-error-box');
        return;
    }

    billAmount = parseFloat(bill.value);

    if (bill.classList.contains('input-error-box')) {
        bill.classList.remove('input-error-box');
    }

    if (! billErrorLabel.classList.contains('hidden')) {
        billErrorLabel.classList.add('hidden');
    }

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
    if (numPeople.value < 1) {
        numPeopleErrorLabel.classList.remove('hidden');
        return;
    }

    if (! numPeopleErrorLabel.classList.contains('hidden')) {
        numPeopleErrorLabel.classList.add('hidden')
    }

    calculateTipAmount(numPeople.value);
});

numPeople.addEventListener('change', () => {
    if (!isNumeric(numPeople.value)) {
        return;
    }

    if (! numPeopleErrorLabel.classList.contains('hidden')) {
        numPeopleErrorLabel.classList.add('hidden')
    }

    calculateTipAmount(numPeople.value);
});

reset.addEventListener('click', () => {
    bill.value = '';
    billAmount = 0;
    customTip.value = '';
    numPeople.value = '';
    tipAmount.innerHTML = '$0.00';
    tipPercentage = 0;
    total.innerHTML = '$0.00';

    clearActiveState();
});

function clearActiveState() {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}

function calculateTipAmount(totalPerPerson = 1) {
    if (billAmount >= 0 && isNumeric(billAmount)) {
        const tipTotal = billAmount * tipPercentage;
        tipAmount.innerHTML = `\$${tipTotal.toFixed(2)}`;
        total.innerHTML = `\$${((billAmount + tipTotal) / totalPerPerson).toFixed(2)}`;
    }
}

function isNumeric (check) {
    return !isNaN(check);
}
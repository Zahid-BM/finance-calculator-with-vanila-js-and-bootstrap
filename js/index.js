
// function to get all input and convert into floating numbers
function getInputValue(inputIdName) {
    const getInput = document.getElementById(inputIdName);
    const inputNumber = parseFloat(getInput.value);
    /* Wrong input Validation */
    if ((getInput.value < 0 || isNaN(getInput.value) || getInput.value == '')) {
        alert('Wrong input or empty field !!');
    }
    return inputNumber;
}
// function to get innerText and convert into floating number
function getInnerTextNumber(idName) {
    const innerText = document.getElementById(idName);
    const textToNumber = parseFloat(innerText.innerText);
    return textToNumber;
}
// Event handler for calculate-button. This will calculate all expenses inputs and display expenses total and balance amount 
document.getElementById('btn-calculate').addEventListener('click', function () {
    const income = getInputValue('input-income');
    const food = getInputValue('input-food');
    const rent = getInputValue('input-rent');
    const clothes = getInputValue('input-clothes');
    const allCost = food + rent + clothes;
    document.getElementById('total-expenses').innerText = allCost;
    const totalExpense = getInnerTextNumber('total-expenses');

    document.getElementById('balance').innerText = income - totalExpense;
    document.getElementById('total-expenses').innerText = allCost;
}
)
// Event handler for save-button. This will calculate target saving inputs, display saving amount and remaining balance 
document.getElementById('btn-save').addEventListener('click', function () {
    const income = getInputValue('input-income');
    const save = getInputValue('input-save');
    const savingAmount = income * save / 100;
    document.getElementById('saving-amount').innerText = savingAmount;
    const balance = getInnerTextNumber('balance');

    /* Validation whether saving amount can not exceed balance amount */
    if (balance >= savingAmount) {
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = balance - savingAmount;
    }
    else {
        alert('No enough balance to save');
        document.getElementById('saving-amount').innerText = "00";
        document.getElementById('remaining-balance').innerText = balance;

    }
}
)
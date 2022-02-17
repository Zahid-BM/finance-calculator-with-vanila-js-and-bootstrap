
// function to get all input and convert into floating numbers
function getInputValue(inputIdName) {
    const getInput = document.getElementById(inputIdName);
    const inputNumber = parseFloat(getInput.value);
    /* Wrong input Validation */
    if ((getInput.value < 0 || isNaN(getInput.value) || getInput.value == '')) {
        return alert('Wrong input or empty field !!');
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
    /* Validation whether total expenses amount can not exceed income amount */
    if (totalExpense >= income) {
        alert('Expenses exceeded income ');
        document.getElementById('total-expenses').innerText = allCost;
        document.getElementById('balance').innerText = 'Reduce expenses and try again';
    }
    else {

        document.getElementById('total-expenses').innerText = allCost;
        document.getElementById('balance').innerText = income - totalExpense;
    }
}
)
// Event handler for save-button. This will calculate target saving inputs, display saving amount and remaining balance 
document.getElementById('btn-save').addEventListener('click', function () {
    const income = getInputValue('input-income');
    const save = getInputValue('input-save');
    const savingAmount = income * save / 100; /* for saving percentage */
    document.getElementById('saving-amount').innerText = savingAmount;
    const balance = getInnerTextNumber('balance');

    /* Validation whether saving amount can not exceed balance amount */
    if (savingAmount >= balance) {
        alert('No enough balance to save');
        document.getElementById('saving-amount').innerText = "00";
        document.getElementById('remaining-balance').innerText = balance;
    }
    else {
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = balance - savingAmount;

    }
}
)
function getInputValue(inputIdName) {
    const getInput = document.getElementById(inputIdName);
    const inputNumber = parseFloat(getInput.value);
    return inputNumber;
}
function getInnerTextNumber(idName) {
    const innerText = document.getElementById(idName);
    const textToNumber = parseFloat(innerText.innerText);
    return textToNumber;
}
document.getElementById('btn-calculate').addEventListener('click', function () {
    const income = getInputValue('input-income');
    const food = getInputValue('input-food');
    const rent = getInputValue('input-rent');
    const clothes = getInputValue('input-clothes');
    const allCost = food + rent + clothes;
    document.getElementById('total-expenses').innerText = allCost;
    const totalExpense = getInnerTextNumber('total-expenses');
    const balance = getInnerTextNumber('balance');
    document.getElementById('balance').innerText = income - totalExpense;





    // console.log(allCost);






})
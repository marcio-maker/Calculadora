let memory = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearEntry() {
    document.getElementById('display').value = '';
}

function toggleSign() {
    let display = document.getElementById('display');
    display.value = display.value.startsWith('-') ? display.value.slice(1) : `-${display.value}`;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}

function memoryAdd() {
    let display = document.getElementById('display');
    memory += parseFloat(display.value) || 0;
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}
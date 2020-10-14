class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.readyToReset = false;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.readyToReset = false;
    }

    clearElement() {
        this.currentOperand = '';
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(curr)) return;

        switch (this.operation) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '÷':
                computation = prev / curr;
                break;
            case '^':
                computation = Math.pow(prev, curr);
                break;
            default:
                return;
        }

        this.readyToReset = true;
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    computeSqrt() {
        if (!this.previousOperandText.innerText) return;
        const computation = Math.sqrt(parseFloat(this.previousOperandText.innerText));
        if (!isNaN(computation)) {
            this.currentOperandText.innerText = computation;
        this.currentOperand = computation;
        } else {
            this.currentOperandText.innerText = 'Error';
            this.currentOperand = '';
        }
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('ru', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandText.innerText =
            this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandText.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandText.innerText = '';
        }
    }
}

const acButton = document.querySelector('[data-all-clear]');
const clearBtn = document.querySelector('[data-clear]');
const delButton = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const sqrtButton = document.querySelector('[data-sqrt]');
const equalsButton = document.querySelector('[data-equals]');
const currentOutput = document.querySelector('[data-output-current]');
const previousOutput = document.querySelector('[data-output-previous]');

const calculator = new Calculator(previousOutput, currentOutput);

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (calculator.previousOperand === "" && calculator.currentOperand !== "" && calculator.readyToReset) {
            calculator.currentOperand = "";
            calculator.readyToReset = false;
        }

        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (calculator.currentOperandText.innerText === 'Error') return;
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay();
    })
});

sqrtButton.addEventListener('click', btn => {
    calculator.computeSqrt();
})

equalsButton.addEventListener('click', btn => {
    if (calculator.currentOperandText.innerText === 'Error') return;
    calculator.compute();
    calculator.updateDisplay();
})

acButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click', () => {
    calculator.clearElement();
    calculator.updateDisplay();
})

delButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

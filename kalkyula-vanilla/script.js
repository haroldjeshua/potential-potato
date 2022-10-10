class Calculator {
    constructor(prevOperandTextElement, currentOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear = clear
    }

    clear() {
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation')
const equalButton  = document.querySelector('[data-equals')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all-clear')
const prevOperandTextElement = document.querySelector('[data-prev-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(prevOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber.apply(button.innerText)
        calculator.updateDisplay()
    })
})
const multiStepForm = document.querySelector('[data-multi-step]')
const formSteps = [...multiStepForm.querySelectorAll('[data-step]')]
let currentStep = formSteps.findIndex(step => {
    return step.classList.contains('active')
})

if (currentStep < 0) {
    currentStep = 0
    formSteps[currentStep].classList.add('active')
}

console.log(currentStep)

multiStepForm.addEventListener('click', (e) => {
    if (e.target.matches('[data-next]')) {
        currentStep += 1
    } else if (e.target.matches('[data-prev]')) {
        currentStep -= 1
    }
    showCurrentStep()
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep)
    })
}
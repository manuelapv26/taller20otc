document.addEventListener('DOMContentLoaded', function () {
    const ageInput = document.getElementById('validateAge');
    const button = document.getElementById('validateButton');
    const messageError = document.getElementById('messageError');

    button.addEventListener('click', function () {
        const birthdate = new Date(ageInput.value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthdate.getFullYear();

        if (birthdate > currentDate) {
            messageError.textContent = 'Fecha de nacimiento inválida';
            messageError.style.color = 'red';
        } else if (age >= 18) {
            messageError.textContent = 'Usted es mayor de edad';
            messageError.style.color = 'blue';
        } else {
            messageError.textContent = 'Usted es menor de edad';
            messageError.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var passwordField = document.getElementById('password');
    var generateButton = document.getElementById('generate-password');
    var symbolsCheckbox = document.getElementById('symbolsCheckbox');
    var alphabetCheckbox = document.getElementById('alphabetCheckbox');
    var numbersCheckbox = document.getElementById('numbersCheckbox');
    var lengthRange = document.getElementById('length');

    function generatePassword() {
        var symbols = '!@#$%^&*()_+{}[]|:;<>,.?/~';
        var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var passwordChars = '';
        
        if (symbolsCheckbox.checked) {
            passwordChars += symbols;
        }
        if (alphabetCheckbox.checked) {
            passwordChars += alphabet;
        }
        if (numbersCheckbox.checked) {
            passwordChars += numbers;
        }

        var passwordLength = lengthRange.value;
        var password = '';

        for (var i = 0; i < passwordLength; i++) {
            var randomIndex = Math.floor(Math.random() * passwordChars.length);
            password += passwordChars[randomIndex];
        }

        return password;
    }

    generateButton.addEventListener('click', function() {
        var newPassword = generatePassword();
        passwordField.value = newPassword;
    });
});

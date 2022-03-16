var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var rePassw = document.getElementById('repassword');

//Hata mesajı
function error(input, message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
}

//Succes mesajı
function success(input) {
    input.className = 'form-control is-valid'
}

//Email Chech etme
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        success(input)
    } else {
        error(input, 'Wrong mail adres')
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value == '') {
            error(input, `${input.id} is required`);
        } else {
            success(input);
        }
    })
}


//Parolaların uzunluğu
function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} olmalıdır`);
    } else if (input.value.length > max) {
        error(input, `${input.id} en az ${max} olmalıdır`);
    }
    else {
        success(input);
    }
}

//Parola eşleşmiyor
function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'Password do not match');
    }

}

//En fazla on karekter
function checkPhone(input) {
    var exp = /^\d{10}$/;
    if (!exp.test(input.value))
        error(input, 'You should be ten character');
    else {
        success(input)
    }
}

//Event
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, rePassw, phone]);
    checkEmail(email);
    checkLength(password, 7, 12);
    checkPassword(password, rePassw);
    checkPhone(phone)
});
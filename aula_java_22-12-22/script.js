const title = document.getElementsByClassName('title')
const error_text = document.getElementsByClassName('error-text')
const username_input = document.getElementById('login-usuario')
const password_input = document.getElementById('login-senha')
const success_message = document.getElementsByClassName('success-message')
const fail_message = document.getElementsByClassName('fail-message')

//console.log(username_input.value)
//console.log(password_input.value)


//title[0].style.color = 'red'
//error_text[0].classList.add('visible')


function validateUsernameInput() {
    if (username_input.value != 'renata') {
        username_input.classList.remove('correct')
        username_input.classList.add('error')
        error_text[0].classList.add('visible')
    } else {
        username_input.classList.add('correct')
        username_input.classList.remove('error')
        error_text[0].classList.remove('visible')
    }
}


function validatePasswordInput() {
    if (password_input.value != '123') {
        password_input.classList.remove('correct')
        password_input.classList.add('error')
        error_text[1].classList.add('visible')
    } else {
        password_input.classList.add('correct')
        password_input.classList.remove('error')
        error_text[1].classList.remove('visible')
    }
}

function showMessage() {
    if (username_input.value != 'renata' || password_input.value != '123') {
        success_message[0].classList.remove('visible')
        fail_message[0].classList.add('visible')
    
    } else {
        fail_message[0].classList.remove('visible')
        success_message[0].classList.add('visible')
    }
}
let trilho = document.getElementById('trilho');
let switchMode = document.querySelector('.switch-mode')
let btnPassword = document.getElementById('btnPassword')
let btnConfirmPassword = document.getElementById('btnConfirmPassword')

let nome = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validName = false

let _user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPass = false

let confirmPass = document.querySelector('#confirmPass')
let labelConfirmPass = document.querySelector('#labelConfirmPass')
let validConfirmPass = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 2){
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validName = false
    } else{
            labelName.setAttribute('style', 'color: green')
            labelName.innerHTML = 'Nome'
            nome.setAttribute('style', 'border-color: green')
            validName = true
        }
})

_user.addEventListener('keyup', () => {
    if(_user.value.length <= 4){
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        _user.setAttribute('style', 'border-color: red')
        validUser = false
    } else {
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML = 'Usuário'
        _user.setAttribute('style', 'border-color: green')
        validUser = true
    }
})

password.addEventListener('keyup', () => {
if(password.value.length <= 5){
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    password.setAttribute('style', 'border-color: red')
    validPass = false
} else {
    labelPassword.setAttribute('style', 'color: green')
    labelPassword.innerHTML = 'Senha'
    password.setAttribute('style', 'border-color: green')
    validPass = true
}
})

confirmPass.addEventListener('keyup', () => {
if(password.value != confirmPass.value){
    labelConfirmPass.setAttribute('style', 'color: red')
    labelConfirmPass.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmPass.setAttribute('style', 'border-color: red')
    validConfirmPass = false
} else {
    labelConfirmPass.setAttribute('style', 'color: green')
    labelConfirmPass.innerHTML = 'Confirmar Senha'
    confirmPass.setAttribute('style', 'border-color: green')
    validConfirmPass = true
}
})

function signup(){
    if(validName && validUser && validPass && validConfirmPass){
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
    
        listUser.push(
        {
            nomeCad: nome.value,
            userCad: _user.value,
            passwordCad: password.value
        }
        )
    
        localStorage.setItem('listUser', JSON.stringify(listUser))
    
        


        setTimeout(() => {
            window.location.href = "./signin.html"
        }, 2000);
        
        
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastrando usuario...'
        msgSuccess.style.color = 'white'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.setAttribute('style', 'color: red')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
      }
}



trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('sing-up')
    switchMode.classList.toggle('switchM')
    setTimeout(() => {
        window.location.href = "./signin.html"
      }, 400);
})

btnPassword.addEventListener('click', ()=>{
    let inputPassword = document.querySelector('#password')
    btnPassword.classList.toggle('showPass')

    if (inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text') 
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})

btnConfirmPassword.addEventListener('click', ()=>{
    let inputPassword = document.querySelector('#confirmPass')
    btnConfirmPassword.classList.toggle('showConfirmPass')

    if (inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text') 
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})

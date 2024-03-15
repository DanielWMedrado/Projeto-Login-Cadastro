let trilho = document.getElementById('trilho');
let switchMode = document.querySelector('.switch-mode')
let btnPassword = document.getElementById('btnPassword')


trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('sing-up')

    switchMode.classList.toggle('switchM')
    setTimeout(() => {
        window.location.href = "./signup.html"
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

function login() {
    let labelUser = document.getElementById('labelUser')
    let _user = document.getElementById('user')

    let labelPassword = document.getElementById('labelPassword')
    let password = document.getElementById('password')

    let msgError = document.getElementById('msgError') 

    let msgError1 = document.getElementById('msgError1')

    let listUser = []

    let userValid = {
        nome:   null,
        user: null,
        password: null
    }

    listUser = JSON.parse(localStorage.getItem('listUser'))

    listUser.forEach((item) => {

        if (_user.value == item.userCad && password.value == item.passwordCad) {
            
            userValid = {
                name: item.nomeCad,
                user: item.userCad,
                password: item.passwordCad
                 
            }
        }
        
    })

    if (_user.value == userValid.user && password.value == userValid.password) {
        window.location.href = '../../index.html'

        let mathRandon = Math.random().toString(16).substr(2)
        let token = mathRandon + mathRandon 

        localStorage.setItem('token', token)
        localStorage.setItem('loggedUser', JSON.stringify(userValid))
    } else {
        labelUser.setAttribute('style', 'color: red');
    _user.setAttribute('style', 'border-color: red');
    labelPassword.setAttribute('style', 'color: red');
    password.setAttribute('style', 'border-color: red');
    msgError.setAttribute('style', 'display: block');
    msgError.setAttribute('style', 'color: red');
    msgError.innerHTML = 'Usuário ou senha incorretos';
    msgError1.setAttribute('style', 'color: red');
    msgError1.innerHTML = 'Caso não tenha cadastro<a class="msgLink" href="./signup.html"> efetue por aqui</a> ';
    _user.focus();
    
    }   
}


if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para realizar o acesso dessa pagina");
    window.location.href = "././assets/html/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("loggedUser"));

const logado = document.querySelector(".logado");
logado.innerHTML = `Olá ${userLogado.name}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedUser");
    window.location.href = "../assets/html/signin.html";
}


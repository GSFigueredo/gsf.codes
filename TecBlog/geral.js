let c = 0;
let contas = Array()

let email;
let user;

let senha;
let conf_senha;

function capturarValores() {
    email = document.getElementById('email').value
    user = document.getElementById('user').value
    senha = document.getElementById('senha').value
    conf_senha = document.getElementById('conf_senha').value
    c++;
}

class cadastroConta {
    constructor(email, user, senha, conf_senha) {
        this.email = email
        this.user = user
        this.senha = senha
        this.conf_senha = conf_senha
    }

    cadastrar() {
        if (this.senha == this.conf_senha) {
            window.location.href = 'login.html'
        } else {
            window.alert('As senhas não condizem, tente novamente')
        }
    }
}

contas[c] = new cadastroConta(email, user, senha, conf_senha)

function cadastrarUsuario() {
    contas[c].cadastrar()
   
}
console.log(c)
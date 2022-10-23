// script para criar marcaras para os valores dos inputs

// aceitar apenas numeros como caracteres
function checaCaractereNumero(e) {
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if (char.match(pattern)) {
        return true;
    }
}

// aceitar apenas letras como caracteres
function checaCaractereString(e) {
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-zA-Z ]';

    if (char.match(pattern)) {
        return true;
    }
}

// mascara nome
const inputNome = document.getElementById('nome');

// faz o input nome aceitar apenas letras
inputNome.addEventListener('keypress', function (e) {

    if (!checaCaractereString(e)) {
        e.preventDefault();
    }

})

// mascara cpf
const inputCPF = document.getElementById('cpf');

// faz o input cpf aceitar apenas numeros e modifica sua formatação quando digitado
inputCPF.addEventListener('keypress', function (e) {

    if (!checaCaractereNumero(e)) {
        e.preventDefault();
    }

    let inputLength = inputCPF.value.length

    // aplica . e - para se adequar a formatação padrão e previnir erros por parte do usuário
    if (inputLength === 3 || inputLength === 7) {
        inputCPF.value += '.'
    } else if (inputLength === 11) {
        inputCPF.value += '-'
    }

})

// mascara idade
const inputIdade = document.getElementById('idade');

// faz o input idade aceitar apenas números
inputIdade.addEventListener('keypress', function (e) {

    if (!checaCaractereNumero(e)) {
        e.preventDefault();
    }

})

// mascara CEP
const inputCEP = document.getElementById('cep');

// faz o input cep aceitar apenas numeros
inputCEP.addEventListener('keypress', function (e) {

    if (!checaCaractereNumero(e)) {
        e.preventDefault();
    }

    let inputLength = inputCEP.value.length

    // aplica - para se adequar a formatação padrão e previnir erros por parte do usuário
    if (inputLength === 5) {
        inputCEP.value += '-'
    }

})

// mascara cidade
const inputCidade = document.getElementById('cidade');

// faz o input cidade aceitar apenas letras
inputCidade.addEventListener('keypress', function (e) {

    if (!checaCaractereString(e)) {
        e.preventDefault();
    }

})

// mascara estado
const inputEstado = document.getElementById('estado');

// faz o input estado aceitar apenas letras
inputEstado.addEventListener('keypress', function (e) {

    if (!checaCaractereString(e)) {
        e.preventDefault();
    }

})

// inputs como rua, bairro, numero e hobbys podem aceitar tanto numeros quanto letras como caracteres
// pois existe a possibilidade desses campos usarem tais configurações
// ex: rua: 12° avenida | bairro: Abolição 2 | numero: 104B | hobby: Estudar cálculo 2
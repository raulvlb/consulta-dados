//aceitar apenas numeros como caracteres
function checkCharNum(e) {
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(char.match(pattern)) { 
        return true;
    }
}

//aceitar apenas letras como caracteres
function checkCharString(e) {
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-zA-Z ]';

    if(char.match(pattern)) { 
        return true;
    }
}

//mascara nome
const inputNome = document.getElementById('nome');

inputNome.addEventListener('keypress', function(e) {

    if(!checkCharString(e)) {
        e.preventDefault();
    }

})

//mascara cpf
const inputCPF = document.getElementById('cpf');

inputCPF.addEventListener('keypress', function(e) {

    if(!checkCharNum(e)) {
        e.preventDefault();
    }

    let inputLength = inputCPF.value.length
    
    if (inputLength === 3 || inputLength === 7){
        inputCPF.value += '.'
    }else if(inputLength === 11){
        inputCPF.value += '-'
    }

})

//mascara idade
const inputIdade = document.getElementById('idade');

inputIdade.addEventListener('keypress', function(e) {

    if(!checkCharNum(e)) {
        e.preventDefault();
    }

})

//mascara CEP
const inputCEP = document.getElementById('cep');

inputCEP.addEventListener('keypress', function(e) {

    if(!checkCharNum(e)) {
        e.preventDefault();
    }

    let inputLength = inputCEP.value.length
    
    if (inputLength === 5){
        inputCEP.value += '-'
    }

})

//mascara cidade
const inputCidade = document.getElementById('cidade');

inputCidade.addEventListener('keypress', function(e) {

    if(!checkCharString(e)) {
        e.preventDefault();
    }

})

//mascara estado
const inputEstado = document.getElementById('estado');

inputEstado.addEventListener('keypress', function(e) {

    if(!checkCharString(e)) {
        e.preventDefault();
    }

})
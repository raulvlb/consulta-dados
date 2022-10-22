document.getElementById('cep').addEventListener('input', consultaCEPRT)
document.getElementById('nascimento').addEventListener('input', consultaIdadeRT)

function consultaCEPRT() {
    let numCep = document.getElementById('cep').value;


    //arruma formatação cep para consulta
    var cep = numCep.split('-').join('');

    //verifica validade do cep digitado
    if (cep.length === 8) {

        consultaCEP()
    }
}

function consultaIdadeRT() {
    var num = document.getElementById('nascimento').value;
    if (num.length === 10) {
        var numNascimento = (document.getElementById('nascimento').value).split('-');
        var idadeAtual = 0;

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        var hoje = (today.toLocaleDateString()).split('/');

        //console.log(numNascimento)// aa-mm-dd
        //console.log(hoje)// dd-mm-aa


        for (var i = Number(numNascimento[0]); i < Number(hoje[2]) - 1; i++) {
            idadeAtual += 1;
        }

        if (Number(hoje[1]) > Number(numNascimento[1])) {
            if (Number(hoje[0]) > Number(numNascimento[2])) {
                idadeAtual += 1;
            }
        }
        document.getElementById('idade').value = idadeAtual
    }
    
}

function consultaCPF() {
    var cpf = document.getElementById('cpf').value;

    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;

}



function consultaNome() {
    var num = document.getElementById('nome').value;

    return (num.length > 0)
}

function consultaDataNascimento() {
    var num = document.getElementById('nascimento').value;

    return (num.length > 0)
}

function consultaIdade() {
    var numIdade = document.getElementById('idade').value;
    var numNascimento = (document.getElementById('nascimento').value).split('-');
    var idadeAtual = 0;

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    var hoje = (today.toLocaleDateString()).split('/');

    //console.log(numNascimento)// aa-mm-dd
    //console.log(hoje)// dd-mm-aa


    for (var i = Number(numNascimento[0]); i < Number(hoje[2]) - 1; i++) {
        idadeAtual += 1;
    }

    if (Number(hoje[1]) > Number(numNascimento[1])) {
        if (Number(hoje[0]) > Number(numNascimento[2])) {
            idadeAtual += 1;
        }
    }

    return (numIdade.length > 0 && idadeAtual === Number(numIdade))
}

function consultaRua() {
    var num = document.getElementById('rua').value;

    return (num.length > 0)
}

function consultaBairro() {
    var num = document.getElementById('bairro').value;

    return (num.length > 0)
}

function consultaNumero() {
    var num = document.getElementById('numero').value;

    return (num.length > 0)
}

function consultaBairro() {
    var num = document.getElementById('bairro').value;

    return (num.length > 0)
}

function consultaCidade() {
    var num = document.getElementById('cidade').value;

    return (num.length > 0)
}

function consultaEstado() {
    var num = document.getElementById('estado').value;

    return (num.length > 0)
}

function consultaHobby() {

    return (quantidadeHobbys > 0)
}

function consultaLGPD() {

    return ($('.lgpdCheckbox').is(':checked'))

}

async function consultaCEP() {
    let numCep = document.getElementById('cep').value;


    //arruma formatação cep para consulta
    var cep = numCep.split('-').join('');

    //verifica validade do cep digitado
    if (cep.length !== 8) {

        return false
    }

    //realiza consulta do cep
    let url = `https://viacep.com.br/ws/${cep}/json/`

    let response = await fetch(url);

    let data = await response.json();


    //console.log(data)

    document.getElementById('rua').value = data.logradouro
    document.getElementById('bairro').value = data.bairro
    document.getElementById('cidade').value = data.localidade
    document.getElementById('estado').value = data.uf

    recebeDadosCep(data)
    console.log(data)
    if(data.erro){
        return(false)
    }else{
        return(true)
    }
    //return (data)

}



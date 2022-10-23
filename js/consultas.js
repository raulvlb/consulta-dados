// realiza alterações em campos que podem ter relação com os inputs de cep e data de nascimento
// RT no final vem de real time, pois as variaveis dessas funções serão alteradas enquando outras estão sendo digitadas
$('#cep').on('input', consultaCEPRT)
$('#nascimento').on('input', consultaIdadeRT)

// consulta o cep e altera os valores dos inputs que obtem a partir da api
function consultaCEPRT() {
    let numCep = $('#cep').prop('value')

    // arruma formatação cep para consulta
    let cep = numCep.split('-').join('');

    // verifica validade do cep digitado e remove estilização de erro se tiver
    if (cep.length === 8) {
        $('#rua').css({ 'border': 'solid 1px #212529' });
        $('#msgErroRua').css({ 'display': 'none' });
        $('#bairro').css({ 'border': 'solid 1px #212529' });
        $('#msgErroBairro').css({ 'display': 'none' });
        $('#cidade').css({ 'border': 'solid 1px #212529' });
        $('#msgErroCidade').css({ 'display': 'none' });
        $('#estado').css({ 'border': 'solid 1px #212529' });
        $('#msgErroEstado').css({ 'display': 'none' });
        consultaCEP()
    }
}

// consulta data de nascimento, calcula a idade e atribui o valor no input de idade
function consultaIdadeRT() {
    let num = $('#nascimento').prop('value')

    if (num.length === 10) {

        let numNascimento = ($('#nascimento').prop('value').split('-'))
        let idadeAtual = 0;

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        let hoje = (today.toLocaleDateString()).split('/');

        // numNascimento aa-mm-dd
        // hoje dd-mm-aa

        // calculando a idade pelo ano
        for (let i = Number(numNascimento[0]); i < Number(hoje[2]) - 1; i++) {
            idadeAtual += 1;
        }

        // calculando idade pelo mês e dia
        if (Number(hoje[1]) > Number(numNascimento[1])) {
            if (Number(hoje[0]) > Number(numNascimento[2])) {
                idadeAtual += 1;
            }
        }

        // remove estilização se erro se tiver e atribui o valor da idade no seu input
        $('#idade').css({ 'border': 'solid 1px #212529' });
        $('#msgErroIdade').css({ 'display': 'none' });
        $('#msgErroIdadeInvalida').css({ 'display': 'none' });
        document.getElementById('idade').value = idadeAtual
    }

}

// verifica se o cpf é um valor válido
function consultaCPF() {
    let cpf = $('#cpf').prop('value')

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

// verifica se o nome é um valor válido
function consultaNome() {
    let num = $('#nome').prop('value')

    return (num.length > 0)
}

// verifica se a dara de nascimento é um valor válido
function consultaDataNascimento() {
    let num = $('#nascimento').prop('value')

    return (num.length > 0)
}

// verifica se a idade é um valor válido e se condiz com a data de nascimento
function consultaIdade() {
    let numIdade = $('#idade').prop('value')
    let numNascimento = ($('#nascimento').prop('value').split('-'))
    let idadeAtual = 0;

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    let hoje = (today.toLocaleDateString()).split('/');

    // numNascimentoa a-mm-dd
    // hoje dd-mm-aa

    for (let i = Number(numNascimento[0]); i < Number(hoje[2]) - 1; i++) {
        idadeAtual += 1;
    }

    if (Number(hoje[1]) > Number(numNascimento[1])) {
        if (Number(hoje[0]) > Number(numNascimento[2])) {
            idadeAtual += 1;
        }
    }

    return (numIdade.length > 0 && idadeAtual === Number(numIdade))
}

// verifica se a rua é um valor válido
function consultaRua() {
    let num = $('#rua').prop('value')

    return (num.length > 0)
}

// verifica se o bairro é um valor válido
function consultaBairro() {
    let num = $('#bairro').prop('value')

    return (num.length > 0)
}

// verifica se o número é um valor válido
function consultaNumero() {
    let num = $('#numero').prop('value')

    return (num.length > 0)
}

// verifica se a cidade é um valor válido
function consultaCidade() {
    let num = $('#cidade').prop('value')

    return (num.length > 0)
}

// verifica se o estado é um valor válido
function consultaEstado() {
    let num = $('#estado').prop('value')

    return (num.length > 0)
}

// verifica se existem hobbys
function consultaHobby() {

    return (quantidadeHobbys > 0)
}

// verifica se o input de LGPD foi aceito
function consultaLGPD() {

    return ($('.lgpdCheckbox').is(':checked'))
}

// verifica se o cep é um valor válido e se corresponde a algum dado na api
async function consultaCEP() {
    let numCep = $('#cep').prop('value');

    //arruma formatação cep para consulta
    let cep = numCep.split('-').join('');

    //verifica validade do cep digitado
    if (cep.length !== 8) {
        return false
    }

    //realiza consulta do cep
    let url = `https://viacep.com.br/ws/${cep}/json/`

    // puxa os dados da api
    let response = await fetch(url);

    // transforma os dados em json
    let data = await response.json();

    // atribui os dados obtidos pela api em seus respectivos inputs
    document.getElementById('rua').value = data.logradouro
    document.getElementById('bairro').value = data.bairro
    document.getElementById('cidade').value = data.localidade
    document.getElementById('estado').value = data.uf

    // forcene os valores da api em json para a função do script que validará todos os dados
    recebeDadosCep(data)

    if (data.erro) {
        return (false)
    } else {
        return (true)
    }
}
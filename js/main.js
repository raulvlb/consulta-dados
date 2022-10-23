// script para validar as informações digitadas, exibir erros, montar json, montar e exibir o modal

// fecha o modal caso clique fora dele ou no botão de fechar
$('#background').on('click', fechaModal)
$('#modalCloser').on('click', fechaModal)

// pega os dados da api que foram consultados no script de consulta
let dadosCep;

// cria uma lista de hobbys para o json entender quais são os hobbys ativos
let listaHobbys = [];

// verifica todas as informações antes de criar o json e o modal
async function checarDados() {

    if (
        consultaNome() &&
        consultaCPF() &&
        consultaDataNascimento() &&
        consultaIdade() &&
        await consultaCEP() &&
        consultaRua() &&
        consultaNumero() &&
        consultaBairro() &&
        consultaCidade() &&
        consultaEstado() &&
        consultaHobby() &&
        consultaLGPD()
    ) {
        // popula a lista de hobbys com os hobbys ativos
        await $.each($('.hobbys p'), function (index, element) {
            listaHobbys.push((element.innerHTML).split('#').join(''))
        });

        // cria o json
        criaJSON()

        // exibe o modal
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $('#janela, #background').fadeIn("1500")

        // verifica quais campos estão com erro e exibe
    } else {
        // erro no campo nome
        if (!consultaNome()) {
            $('#nome').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroNome').css({ 'display': 'block' });
        }

        // erro no campo cpf
        if (!consultaCPF()) {
            $('#cpf').css({ 'border': 'solid 1px #e63946' });
            if ($('#cpf').prop("value") == '') {
                $('#msgErroCpf').css({ 'display': 'block' });
            } else {
                $('#msgErroCpfInvalido').css({ 'display': 'block' });
            }
        }

        // erro no campo data de nascimento
        if (!consultaDataNascimento()) {
            $('#nascimento').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroNascimento').css({ 'display': 'block' });
        }

        // erro no campo idade
        if (!consultaIdade()) {
            $('#idade').css({ 'border': 'solid 1px #e63946' });
            if ($('#idade').prop("value") == '') {
                $('#msgErroIdade').css({ 'display': 'block' });
            } else {
                $('#msgErroIdadeInvalida').css({ 'display': 'block' });
            }
        }

        // erro no campo cep
        if ($('#cep').prop("value") == "") {
            $('#cep').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroCep').css({ 'display': 'block' });
        } else if (dadosCep) {
            if (dadosCep.erro) {
                $('#cep').css({ 'border': 'solid 1px #e63946' });
                $('#msgErroCepInvalido').css({ 'display': 'block' });
            }
        } else {
            if ($(('#cep').prop("value")).length > 0) {
                $('#cep').css({ 'border': 'solid 1px #e63946' });
                $('#msgErroCep').css({ 'display': 'block' });
            }
        }

        // erro no campo rua
        if (!consultaRua() || $('#rua').prop("value") == 'undefined') {
            $('#rua').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroRua').css({ 'display': 'block' });
        }

        // erro no campo numero
        if (!consultaNumero()) {
            $('#numero').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroNumero').css({ 'display': 'block' });
        }

        // erro no campo bairro
        if (!consultaBairro() || $('#bairro').prop("value") == 'undefined') {
            $('#bairro').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroBairro').css({ 'display': 'block' });
        }

        // erro no campo cidade
        if (!consultaCidade() || $('#cidade').prop("value") == 'undefined') {
            $('#cidade').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroCidade').css({ 'display': 'block' });
        }

        // erro no campo estado
        if (!consultaEstado() || $('#estado').prop("value") == 'undefined') {
            $('#estado').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroEstado').css({ 'display': 'block' });
        }

        // erro no campo hobby
        if (!consultaHobby()) {
            $('#hobby').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroHobby').css({ 'display': 'block' });
        }

        // erro no campo lgpd
        if (!consultaLGPD()) {
            $('#lgpd').css('outline-color', '#e63946');
            $('#lgpd').css('outline-style', 'solid');
            $('#lgpd').css('outline-width', '2px');
            $('#msgErroLgpd').css({ 'display': 'block' });
        }
    }
}

// recebe os dados da api do cep e armazena em uma variavel para ser usada nesse script
function recebeDadosCep(data) {
    dadosCep = data
}

// cria e formata o json para ser exibido no modal
function criaJSON() {
    // criando o json
    let cepObj = new CepObjeto();

    // formatando o json
    let consultaJSON = JSON.stringify(cepObj)
    let jsonFormatado = JSON.parse(consultaJSON)

    // criando a tag que será usada no modal com os dados do json
    $('#mostraJson').append(`
    <pre style="word-wrap: break-word; white-space: pre-wrap;">
    {
        "nome": "${jsonFormatado.Nome}"
        "cpf": "${jsonFormatado.Cpf}"
        "data_de_nascimento": "${jsonFormatado.Data_de_nascimento}"
        "idade": "${jsonFormatado.Idade}"
        "cep": "${jsonFormatado.Cep}"
        "rua": "${jsonFormatado.Rua}"
        "numero": "${jsonFormatado.Numero}"
        "bairro": "${jsonFormatado.Bairro}"
        "cidade": "${jsonFormatado.Cidade}"
        "estado": "${jsonFormatado.Estado}"
        "hobbys": "${jsonFormatado.Hobbys}"
    }
    </pre>`)
}

// criando o objeto para o json
function CepObjeto() {
    this.Nome = $("#nome").prop("value")
    this.Cpf = $("#cpf").prop("value")
    this.Data_de_nascimento = $("#nascimento").prop("value")
    this.Idade = $("#idade").prop("value")
    this.Cep = $("#cep").prop("value")
    this.Rua = dadosCep.logradouro
    this.Numero = $("#numero").prop("value")
    this.Bairro = dadosCep.bairro
    this.Cidade = dadosCep.localidade
    this.Estado = dadosCep.uf
    this.Hobbys = listaHobbys
}

// fecha o modal mas não reseta os valores dos inputs
function fechaModal() {
    // fechando o modal
    $('#janela, #background').fadeOut("1500")

    // excluindo o json
    $('#mostraJson').empty()

    // zerando a lista de hobbys, para não somar com a lista de uma nova consulta
    listaHobbys = []
}

// fecha o modal e reseta os valores do inputs
function novaConsulta() {
    // fecha o modal mas não reseta os valores dos inputs
    fechaModal()

    // resetando os valores dos inputs
    $("#nome").prop("value", "")
    $("#cpf").prop("value", "")
    $("#nascimento").prop("value", "")
    $("#idade").prop("value", "")
    $("#cep").prop("value", "")
    $("#rua").prop("value", "")
    $("#numero").prop("value", "")
    $("#bairro").prop("value", "")
    $("#cidade").prop("value", "")
    $("#estado").prop("value", "")
    $("#hobby").prop("value", "")
    $('#hobbys').empty()
    quantidadeHobbys = 0
    $('#semHobby').css('display', 'block')
    $(".lgpdCheckbox").prop("checked", false)
}
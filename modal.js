document.getElementById('background').addEventListener('click', closeModal)
document.getElementById('modalCloser').addEventListener('click', closeModal)
$("#nome").mousedown(function () {
    $('#nome').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNome').css({ 'display': 'none' });
});
$("#cpf").mousedown(function () {
    $('#cpf').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCpf').css({ 'display': 'none' });
    $('#msgErroCpfInvalido').css({ 'display': 'none' });
});
$("#nascimento").mousedown(function () {
    $('#nascimento').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNascimento').css({ 'display': 'none' });
});
$("#idade").mousedown(function () {
    $('#idade').css({ 'border': 'solid 1px #212529' });
    $('#msgErroIdade').css({ 'display': 'none' });
    $('#msgErroIdadeInvalida').css({ 'display': 'none' });
});
$("#cep").mousedown(function () {
    $('#cep').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCep').css({ 'display': 'none' });
    $('#msgErroCepInvalido').css({ 'display': 'none' });
});
$("#rua").mousedown(function () {
    $('#rua').css({ 'border': 'solid 1px #212529' });
    $('#msgErroRua').css({ 'display': 'none' });
});
$("#numero").mousedown(function () {
    $('#numero').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNumero').css({ 'display': 'none' });
});
$("#bairro").mousedown(function () {
    $('#bairro').css({ 'border': 'solid 1px #212529' });
    $('#msgErroBairro').css({ 'display': 'none' });
});
$("#cidade").mousedown(function () {
    $('#cidade').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCidade').css({ 'display': 'none' });
});
$("#estado").mousedown(function () {
    $('#estado').css({ 'border': 'solid 1px #212529' });
    $('#msgErroEstado').css({ 'display': 'none' });
});
$("#hobby").mousedown(function () {
    $('#hobby').css({ 'border': 'solid 1px #212529' });
    $('#msgErroHobby').css({ 'display': 'none' });
});
$("#lgpd").mousedown(function () {
    $('#lgpd').css('outline-width', '0px');
    $('#msgErroLgpd').css({ 'display': 'none' });
});


let dadosCep;

let listaHobbys = [];

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
        document.getElementById('janela', 'background').style.display = "block";
        document.getElementById('background').style.display = "block";
        await $.each($('.testando p'), function (index, element) {
            listaHobbys.push((element.innerHTML).split('#').join(''))
        });
        criaJSON()

    } else {
        if (!consultaNome()) {
            $('#nome').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroNome').css({ 'display': 'block' });
        }
        if (!consultaCPF()) {
            $('#cpf').css({ 'border': 'solid 1px #e63946' });
            if ($('#cpf').prop("value") == '') {
                $('#msgErroCpf').css({ 'display': 'block' });
            } else {
                $('#msgErroCpfInvalido').css({ 'display': 'block' });
            }
        }
        if (!consultaDataNascimento()) {
            $('#nascimento').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroNascimento').css({ 'display': 'block' });
        }
        if (!consultaIdade()) {
            $('#idade').css({ 'border': 'solid 1px #e63946' });
            if ($('#idade').prop("value") == '') {
                $('#msgErroIdade').css({ 'display': 'block' });
            } else {
                $('#msgErroIdadeInvalida').css({ 'display': 'block' });
            }
        }
        if (dadosCep) {
            if (dadosCep.erro) {
                $('#cep').css({ 'border': 'solid 1px #e63946' });
                $('#msgErroCepInvalido').css({ 'display': 'block' });
            }
        } else {
            $('#cep').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroCep').css({ 'display': 'block' });
        }
        if (!consultaRua() || $('#rua').prop("value") == 'undefined') {
            $('#rua').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroRua').css({ 'display': 'block' });
        }
        if (!consultaNumero()) {
            $('#numero').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroNumero').css({ 'display': 'block' });
        }
        if (!consultaBairro() || $('#bairro').prop("value") == 'undefined') {
            $('#bairro').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroBairro').css({ 'display': 'block' });
        }
        if (!consultaCidade() || $('#cidade').prop("value") == 'undefined') {
            $('#cidade').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroCidade').css({ 'display': 'block' });
        }
        if (!consultaEstado() || $('#estado').prop("value") == 'undefined') {
            $('#estado').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroEstado').css({ 'display': 'block' });
        }
        if (!consultaHobby()) {
            $('#hobby').css({ 'border': 'solid 1px #e63946' });
            $('#msgErroHobby').css({ 'display': 'block' });
        }
        if (!consultaLGPD()) {
            $('#lgpd').css('outline-color', '#e63946');
            $('#lgpd').css('outline-style', 'solid');
            $('#lgpd').css('outline-width', '2px');
            $('#msgErroLgpd').css({ 'display': 'block' });
        }
    }
}

function recebeDadosCep(data) {
    dadosCep = data
}

function criaJSON() {
    var meuObj = new DefinicaoObjeto();
    var consultaJSON = JSON.stringify(meuObj)
    var formatado = JSON.parse(consultaJSON)
    var meuObj = new DefinicaoObjeto();
    $('#mostra-json').append(`
    <pre style="word-wrap: break-word; white-space: pre-wrap;">
    {
        "nome": "${formatado.Nome}"
        "cpf": "${formatado.Cpf}"
        "data_de_aniversario": "${formatado.Data_de_aniversario}"
        "idade": "${formatado.Idade}"
        "cep": "${formatado.Cep}"
        "rua": "${formatado.Rua}"
        "numero": "${formatado.Numero}"
        "bairro": "${formatado.Bairro}"
        "cidade": "${formatado.Cidade}"
        "estado": "${formatado.Estado}"
        "hobbys": "${formatado.Hobbys}"
    }
    </pre>`)
}

function DefinicaoObjeto() {
    this.Nome = $("#nome").prop("value")
    this.Cpf = $("#cpf").prop("value")
    this.Data_de_aniversario = $("#nascimento").prop("value")
    this.Idade = $("#idade").prop("value")
    this.Cep = $("#cep").prop("value")
    this.Rua = dadosCep.logradouro
    this.Numero = $("#numero").prop("value")
    this.Bairro = dadosCep.bairro
    this.Cidade = dadosCep.localidade
    this.Estado = dadosCep.uf
    this.Hobbys = listaHobbys
}

function closeModal() {
    $('#mostra-json').empty()
    listaHobbys = []
    document.getElementById('janela').style.display = "none";
    document.getElementById('background').style.display = "none";
}

function novaConsulta() {
    $('#mostra-json').empty()
    listaHobbys = []
    document.getElementById('janela').style.display = "none";
    document.getElementById('background').style.display = "none";

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
    $('#sem-hobby').css('display', 'block')
    $(".lgpdCheckbox").prop("checked", false)
}
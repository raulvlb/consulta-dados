document.getElementById('background').addEventListener('click', closeModal)
document.getElementById('modalCloser').addEventListener('click', closeModal)

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
        await $.each($('.testando p'), function(index, element) {
            ///console.log(element.innerHTML);
            listaHobbys.push((element.innerHTML).split('#').join(''))
        });
        criaJSON()

    } else {
        if (!consultaNome()) {
            document.getElementById('nome').style.border = "solid 1px #e63946"
            document.getElementById('msgErroNome').style.display = 'block'
        } else {
            document.getElementById('nome').style.border = "solid 1px #212529"
            document.getElementById('msgErroNome').style.display = 'none'
        }
    }

}

function recebeDadosCep(data){
    dadosCep = data
}

function criaJSON(){
    var meuObj = new DefinicaoObjeto();
    console.log(meuObj)
    $('#mostra-json').append(JSON.stringify(meuObj, null, 4))
}

function DefinicaoObjeto(){
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

    document.getElementById('janela').style.display = "none";
    document.getElementById('background').style.display = "none";
}

function novaConsulta() {
    $('#mostra-json').empty()
    //limpar dados dos values e fechar a o modal
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

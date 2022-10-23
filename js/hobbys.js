// id para deletar itens corretamente e quantidade para checar se o campo está vazio
let id = 0;
let quantidadeHobbys = 0;

// adiona um hobby a lista e atribui um id a ele
function addHobby() {
    let hobby = ($("#hobby").prop('value'))

    // se o campo for vazio quando clicar em adicionar, nada acontecerá
    if (($("#hobby").prop('value')).length === 0) {
        return;
    }

    // caso o campo não esteja vazio, as seguintes tags serão criadas na lista de hobbys
    $('#hobbys').append(`<li id="${id}">
    <p>#${hobby}</p>
    <span onclick="dellHobby(${id})" class="material-symbols-outlined hobbyCloser">
    cancel
    </span>
    </li>`);

    // modificando os ids e aumentando a quantidade de hobbys
    id += 1;
    quantidadeHobbys += 1;

    // apaga o valor do imput apos ele ser adicionado e remove o componente de aviso de quando não existem hobbys
    $("#hobby").prop("value", "")
    $('#semHobby').css('display', 'none')
}

// deleta um hobby da lista
function dellHobby(id) {
    let hobby = $('#' + id);

    // diminui a quantidade de hobbys
    quantidadeHobbys -= 1;

    // remove o hobby da lista
    hobby.remove();

    // caso todos os hobbys tenham sido removidos, o aviso de quando não existem hobbys volta a aparecer
    if (quantidadeHobbys === 0) {
        $('#semHobby').css('display', 'block')
    }
}

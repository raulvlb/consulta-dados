
var id = 0; 
var quantidadeHobbys = 0;

function addHobby() {
    var hobby = ($("#hobby").prop('value'))

    if (($("#hobby").prop('value')).length === 0) {
        return;
    }

    $('#hobbys').append(`<li id="${id}" class="testando">
    <p>#${hobby}</p>
    <span onclick="dellHobby(${id})" class="material-symbols-outlined hobbyCloser testandoando">
    cancel
    </span>
    </li>`);

    id += 1;
    quantidadeHobbys += 1;

    //boxHobbys
    $("#hobby").prop("value", "")
    $('#sem-hobby').css('display', 'none')
}

function dellHobby(id) {
    var hobby = $('#'+id);

    quantidadeHobbys -= 1;

    hobby.remove();

    if (quantidadeHobbys === 0) {
        $('#sem-hobby').css('display', 'block')
    }
}

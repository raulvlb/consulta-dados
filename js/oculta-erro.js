// script para ocultar alertas de erro nos inputs quando clicar ou digitar algo no input

// apaga erro quando clicar ou digitar algo no campo home quando o mesmo demonstrar algum erro
$("#nome").keypress(function () {
    $('#nome').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNome').css({ 'display': 'none' });
});
$("#nome").mousedown(function () {
    $('#nome').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNome').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo cpf quando o mesmo demonstrar algum erro
$("#cpf").keypress(function () {
    $('#cpf').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCpf').css({ 'display': 'none' });
    $('#msgErroCpfInvalido').css({ 'display': 'none' });
});
$("#cpf").mousedown(function () {
    $('#cpf').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCpf').css({ 'display': 'none' });
    $('#msgErroCpfInvalido').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo data de nascimento quando o mesmo demonstrar algum erro
$("#nascimento").keypress(function () {
    $('#nascimento').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNascimento').css({ 'display': 'none' });
});
$("#nascimento").mousedown(function () {
    $('#nascimento').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNascimento').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo idade quando o mesmo demonstrar algum erro
$("#idade").keypress(function () {
    $('#idade').css({ 'border': 'solid 1px #212529' });
    $('#msgErroIdade').css({ 'display': 'none' });
    $('#msgErroIdadeInvalida').css({ 'display': 'none' });
});
$("#idade").mousedown(function () {
    $('#idade').css({ 'border': 'solid 1px #212529' });
    $('#msgErroIdade').css({ 'display': 'none' });
    $('#msgErroIdadeInvalida').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo cep quando o mesmo demonstrar algum erro
$("#cep").keypress(function () {
    $('#cep').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCep').css({ 'display': 'none' });
    $('#msgErroCepInvalido').css({ 'display': 'none' });
});
$("#cep").mousedown(function () {
    $('#cep').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCep').css({ 'display': 'none' });
    $('#msgErroCepInvalido').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo rua quando o mesmo demonstrar algum erro
$("#rua").keypress(function () {
    $('#rua').css({ 'border': 'solid 1px #212529' });
    $('#msgErroRua').css({ 'display': 'none' });
});
$("#rua").mousedown(function () {
    $('#rua').css({ 'border': 'solid 1px #212529' });
    $('#msgErroRua').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo numero quando o mesmo demonstrar algum erro
$("#numero").keypress(function () {
    $('#numero').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNumero').css({ 'display': 'none' });
});
$("#numero").mousedown(function () {
    $('#numero').css({ 'border': 'solid 1px #212529' });
    $('#msgErroNumero').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo bairro quando o mesmo demonstrar algum erro
$("#bairro").keypress(function () {
    $('#bairro').css({ 'border': 'solid 1px #212529' });
    $('#msgErroBairro').css({ 'display': 'none' });
});
$("#bairro").mousedown(function () {
    $('#bairro').css({ 'border': 'solid 1px #212529' });
    $('#msgErroBairro').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo cidade quando o mesmo demonstrar algum erro
$("#cidade").keypress(function () {
    $('#cidade').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCidade').css({ 'display': 'none' });
});
$("#cidade").mousedown(function () {
    $('#cidade').css({ 'border': 'solid 1px #212529' });
    $('#msgErroCidade').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo estado quando o mesmo demonstrar algum erro
$("#estado").keypress(function () {
    $('#estado').css({ 'border': 'solid 1px #212529' });
    $('#msgErroEstado').css({ 'display': 'none' });
});
$("#estado").mousedown(function () {
    $('#estado').css({ 'border': 'solid 1px #212529' });
    $('#msgErroEstado').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo hobby quando o mesmo demonstrar algum erro
$("#hobby").keypress(function () {
    $('#hobby').css({ 'border': 'solid 1px #212529' });
    $('#msgErroHobby').css({ 'display': 'none' });
});
$("#hobby").mousedown(function () {
    $('#hobby').css({ 'border': 'solid 1px #212529' });
    $('#msgErroHobby').css({ 'display': 'none' });
});

// apaga erro quando clicar ou digitar algo no campo lgpd quando o mesmo demonstrar algum erro
$("#lgpd").keypress(function () {
    $('#lgpd').css('outline-width', '0px');
    $('#msgErroLgpd').css({ 'display': 'none' });
});
$("#lgpd").mousedown(function () {
    $('#lgpd').css('outline-width', '0px');
    $('#msgErroLgpd').css({ 'display': 'none' });
});
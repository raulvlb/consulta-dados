let darkmodeon = false

function darkmode() {
    if(!darkmodeon){
        $('body').get(0).style.setProperty('--cor-container-background', 'black');
        $('body').get(0).style.setProperty('--cor-titulo', '#c5c5c5');
        $('body').get(0).style.setProperty('--cor-texto', '#a1a1a1');
        $('body').get(0).style.setProperty('--cor-background-gradient', 'black');
        $('body').get(0).style.setProperty('--cor-background-footer', 'rgba(0, 0, 0, 0.678)');
        $('#lightmode').css({ 'display': 'block' });
        $('#darkmode').css({ 'display': 'none' });
        darkmodeon = true
    }else{
        $('body').get(0).style.setProperty('--cor-container-background', 'rgba(245, 245, 245, 1)');
        $('body').get(0).style.setProperty('--cor-titulo', 'black');
        $('body').get(0).style.setProperty('--cor-texto', '#5f5f5f');
        $('body').get(0).style.setProperty('--cor-background-gradient', 'rgba(255, 255, 255, 0)');
        $('body').get(0).style.setProperty('--cor-background-footer', 'rgba(255, 255, 255, 0.5)');
        $('#darkmode').css({ 'display': 'block' });
        $('#lightmode').css({ 'display': 'none' });
        darkmodeon = false
    }
}
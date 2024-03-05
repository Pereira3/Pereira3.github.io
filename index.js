$(document).ready(function() {

    $('#projects').hide();

    $('#main_pag').click(function() {
        $('#projects').hide();
        $('#main_pag').show();
        $('#contacts').show();
    });

    $('#contacts').click(function() {
        $('#contacts').hide();
        $('#main_pag').show();
        $('#projects').show();
    });

});
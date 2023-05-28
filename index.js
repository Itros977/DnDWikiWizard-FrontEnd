
$( document ).ready(function() {

    //==============================
    //= INICIALIZACIÓN DE VENTANAS =
    //==============================

    
    //JUGADORES
    $.get("/Pantallas/PartidaJugadores/PartidaJugadores.html", function(data) {
        var instancia = $(data).clone();
        $("#divMain").append(instancia);
        $('#divPrincipalJugadores').show();
        //$('#divPrincipalJugadores').hide();
    });


    //WIKI
    $.get("/Pantallas/Wiki/Wiki.html", function(data) {
        var instancia = $(data).clone();
        $("#divMain").append(instancia);
        //$('#divPrincipalWiki').show();
        $('#divPrincipalWiki').hide();
    });
    


    //=============================
    //========== EVENTOS ==========
    //=============================

    $('#jugadores-link').click(function() {
        AbrirJugadores();
    });

    $('#wiki-link').click(function() {
        AbrirWiki();
    });



});


function AbrirJugadores(){
    $('#divPrincipalWiki').hide();
    $('#divPrincipalJugadores').show();

    $('ul#navBarPartida > li').removeClass('active');
    $('#jugadores-link').parent().addClass('active');

}

function AbrirWiki(){
    $('#divPrincipalJugadores').hide();
    $('#divPrincipalWiki').show();

    $('ul#navBarPartida > li').removeClass('active');
    $('#wiki-link').parent().addClass('active');
}


$( document ).ready(function() {


    

    //==============================
    //= INICIALIZACIÓN DE VENTANAS =
    //==============================

    $('#divMain').hide();
    
    //JUGADORES
    $.get("/Pantallas/DungeonMaster/DungeonMaster.html", function(data) {
        var instancia = $(data).clone();
        $("#divMain").append(instancia);
    });

    $('#divPrincipalJugadores').show();

    //WIKI
    $.get("/Pantallas/Wiki/Wiki.html", function(data) {
        var instancia = $(data).clone();
        $("#divMain").append(instancia);
    });
    
    $('#divPrincipalWiki').hide();

    $('#divMain').show();



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

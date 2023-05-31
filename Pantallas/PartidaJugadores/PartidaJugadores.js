var datosJugadores;


$( document ).ready(function() {
    //$("#divListaJugadores").load("../../Modules/TarjetaJugador/TarjetaJugador.html");
    //$("#divListaJugadores").load("../../Modules/TarjetaJugador/TarjetaJugador.html");

    datosJugadores = [
        new Jugador("1", "Gimbli", "Enano", "Tanque", "https://s2.ppllstatics.com/ideal/www/multimedia/201712/05/media/cortadas/gimli-ku9B-U50297969827dHF-624x385@Ideal.jpg", "66", "90", "80", "1"),
        new Jugador("2", "Légolas", "Elfo", "Distancia",  "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/220px-Legolas600ppx.jpg", "50", "75", "36", "4"),
        new Jugador("3", "Aragorn", "Humano", "Paladín",  "https://qph.cf2.quoracdn.net/main-qimg-cbade0d17806e258ac758c2e9dc5e3fb-pjlq", "19", "72", "43", "3"),
        new Jugador("4", "Frodo", "Hobbit", "Portador del Anillo", "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elijah_Wood_as_Frodo_Baggins.png/220px-Elijah_Wood_as_Frodo_Baggins.png", "95", "88", "72", "4"),
        new Jugador("5", "Gandalf", "Istar", "Mago", "https://pbs.twimg.com/profile_images/455474217325441024/5Biy7IE9_400x400.jpeg", "80", "95", "90", "6"),
        new Jugador("6", "Gollum", "Hobbit", "Corrupto por el Anillo", "https://images.uncyclomedia.co/inciclopedia/es/e/e3/Gollumpescado.jpg", "40", "60", "20", "4"),
        new Jugador("7", "Elrond", "Elfo", "Señor de Rivendel", "https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/09/08/5faa5e025b2a3.jpeg", "85", "90", "78", "8"),
        new Jugador("8", "Théoden", "Hombre", "Rey de Rohan", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmAFHmI75norpzTd5FvhgKRI4Z6nQVG6bUA&usqp=CAU", "75", "80", "92", "3")
      ];



    CargarTarjetas();

    //EVENTOS
    $("#btnDanar10").click(function(){
        HacerDano();
    });

    $("#btnCurar10").click(function(){
        CurarVida();
    });

    
});


function CargarTarjetas(){

    $.get("../../Modules/TarjetaJugador/TarjetaJugador.html", function(data) {
        
        datosJugadores.forEach(function(jugador) {
        var instancia = $(data).clone();
    
        // Modifica los datos de la instancia
        instancia.find("#idJugador").text(jugador.id);
        instancia.find("#nombreTarjetaJugador").text(jugador.nombre);
        
        instancia.find("#vidaTarjetaJugador").css("width", jugador.hp + "%");
        instancia.find("#vidaTarjetaJugador").text(jugador.hp);

        instancia.find("#manaTarjetaJugador").css("width", jugador.mana + "%");
        instancia.find("#manaTarjetaJugador").text(jugador.mana);

        instancia.find("#xpTarjetaJugador").css("width", jugador.xp + "%");
        instancia.find("#xpTarjetaJugador").text(jugador.xp + "XP");

        instancia.find("#numeroNivel").text(jugador.nivel);


        instancia.find("#razaTarjetaJugador").text(jugador.raza);
        //instancia.find("#rolTarjetaJugador").text(jugador.clase);
        instancia.find("#imagenTarjetaJugador").attr("src", jugador.rutaFoto);
    
        //AÑADIR EVENTO CLICK A LAS TARJETAS
        instancia.on('click', function() {
            var jugadorId = jugador.id;
            ClickTarjeta(jugadorId);
        });


        $("#divListaJugadores").append(instancia);
        });
    });

}

function ClickTarjeta(idJugador){
    $("#idJugadorSeleccionado").val(idJugador);
    ActualizarDatos();
}


function ActualizarDatos(){
    var idJugador = $("#idJugadorSeleccionado").val();

    var jugador = datosJugadores.find(function(jugador) {
        return jugador.id === idJugador;
    });


    //TARJETA
    var tarjetaJugador = $(".divTarjetaJugador").filter(function() {
        return $(this).find("#idJugador").text() === jugador.id;
    });

    if(jugador.hp > 0){
        tarjetaJugador.find("#vidaTarjetaJugador").css("width", jugador.hp + "%");
        tarjetaJugador.find("#vidaTarjetaJugador").text(jugador.hp);
    }else{
        tarjetaJugador.find("#vidaTarjetaJugador").css("width", "0");
        tarjetaJugador.find("#vidaTarjetaJugador").text("");
    }




    //INFORMACIÓN
    $("#nombreInformacionJugador").text(jugador.nombre);
    $("#imagenInformacionJugador").attr('src', jugador.rutaFoto);

}

function HacerDano(){

    var idJugador = $("#idJugadorSeleccionado").val();
    
    // Buscar el jugador por su ID
    var jugador = datosJugadores.find(function(jugador) {
        return jugador.id === idJugador;
    });

    jugador.hp = parseInt(jugador.hp) - 10;

    ActualizarDatos();
}


function CurarVida(){

    debugger;

    var idJugador = $("#idJugadorSeleccionado").val();
    
    // Buscar el jugador por su ID
    var jugador = datosJugadores.find(function(jugador) {
        return jugador.id === idJugador;
    });

    jugador.hp = parseInt(jugador.hp) + 10;

    ActualizarDatos();
}
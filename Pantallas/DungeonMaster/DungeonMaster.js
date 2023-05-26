
$( document ).ready(function() {
    //$("#divListaJugadores").load("../../Modules/TarjetaJugador/TarjetaJugador.html");
    //$("#divListaJugadores").load("../../Modules/TarjetaJugador/TarjetaJugador.html");

    const datosJugadores = [
        new Jugador("Gimbli", "Enano", "Tanque", "https://s2.ppllstatics.com/ideal/www/multimedia/201712/05/media/cortadas/gimli-ku9B-U50297969827dHF-624x385@Ideal.jpg", "66", "90", "80"),
        new Jugador("Légolas", "Elfo", "Distancia",  "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/220px-Legolas600ppx.jpg", "50", "75", "36"),
        new Jugador("Aragorn", "Numenoreano", "Paladín",  "https://qph.cf2.quoracdn.net/main-qimg-cbade0d17806e258ac758c2e9dc5e3fb-pjlq", "19", "72", "43"),
        new Jugador("Gimbli", "Enano", "Tanque", "https://s2.ppllstatics.com/ideal/www/multimedia/201712/05/media/cortadas/gimli-ku9B-U50297969827dHF-624x385@Ideal.jpg", "66", "90", "80"),
        new Jugador("Légolas", "Elfo", "Distancia",  "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/220px-Legolas600ppx.jpg", "50", "75", "36"),
        new Jugador("Aragorn", "Numenoreano", "Paladín",  "https://qph.cf2.quoracdn.net/main-qimg-cbade0d17806e258ac758c2e9dc5e3fb-pjlq", "19", "72", "43"),
        new Jugador("Gimbli", "Enano", "Tanque", "https://s2.ppllstatics.com/ideal/www/multimedia/201712/05/media/cortadas/gimli-ku9B-U50297969827dHF-624x385@Ideal.jpg", "66", "90", "80"),
        new Jugador("Aragorn", "Numenoreano", "Paladín",  "https://qph.cf2.quoracdn.net/main-qimg-cbade0d17806e258ac758c2e9dc5e3fb-pjlq", "19", "72", "43")
      ];



    $.get("../../Modules/TarjetaJugador/TarjetaJugador.html", function(data) {
        
        datosJugadores.forEach(function(jugador) {
        var instancia = $(data).clone();
    
        // Modifica los datos de la instancia
        instancia.find("#nombreTarjetaJugador").text(jugador.nombre);
        
        instancia.find("#vidaTarjetaJugador").css("width", jugador.hp + "%");
        instancia.find("#vidaTarjetaJugador").text(jugador.hp);

        instancia.find("#manaTarjetaJugador").css("width", jugador.mana + "%");
        instancia.find("#manaTarjetaJugador").text(jugador.mana);

        instancia.find("#xpTarjetaJugador").css("width", jugador.xp + "%");
        instancia.find("#xpTarjetaJugador").text(jugador.xp + "XP");


        instancia.find("#razaTarjetaJugador").text(jugador.raza);
        //instancia.find("#rolTarjetaJugador").text(jugador.rol);
        instancia.find("#imagenTarjetaJugador").attr("src", jugador.rutaFoto);
    
        $("#divListaJugadores").append(instancia);
        });
    });


});
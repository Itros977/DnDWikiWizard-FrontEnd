
$( document ).ready(function() {
    //$("#divListaJugadores").load("../../Modules/TarjetaJugador/TarjetaJugador.html");
    //$("#divListaJugadores").load("../../Modules/TarjetaJugador/TarjetaJugador.html");

    const datosJugadores = [
        new Jugador("Gimbli", "Enano", "Tanque", "https://s2.ppllstatics.com/ideal/www/multimedia/201712/05/media/cortadas/gimli-ku9B-U50297969827dHF-624x385@Ideal.jpg"),
        new Jugador("Légolas", "Elfo", "Distancia",  "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/220px-Legolas600ppx.jpg"),
        new Jugador("Aragorn", "Numenoreano", "Paladín",  "https://qph.cf2.quoracdn.net/main-qimg-cbade0d17806e258ac758c2e9dc5e3fb-pjlq")
      ];



    $.get("../../Modules/TarjetaJugador/TarjetaJugador.html", function(data) {
        
        datosJugadores.forEach(function(jugador) {
        var instancia = $(data).clone();
    
        // Modifica los datos de la instancia
        instancia.find("#nombreTarjetaJugador").text(jugador.nombre);
        instancia.find("#razaTarjetaJugador").text(jugador.raza);
        //instancia.find("#rolTarjetaJugador").text(jugador.rol);
        instancia.find("#imagenTarjetaJugador").attr("src", jugador.rutaFoto);
    
        $("#divListaJugadores").append(instancia);
        });
    });


});
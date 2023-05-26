
$( document ).ready(function() {
    //$("#divListaJugadores").load("../../Modules/TarjetaJugador/TarjetaJugador.html");
    //$("#divListaJugadores").load("../../Modules/TarjetaJugador/TarjetaJugador.html");

    const datosJugadores = [
        new Jugador("Gimbli", "Enano", "Tanque", "https://s2.ppllstatics.com/ideal/www/multimedia/201712/05/media/cortadas/gimli-ku9B-U50297969827dHF-624x385@Ideal.jpg", "66", "90", "80"),
        new Jugador("Légolas", "Elfo", "Distancia",  "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/220px-Legolas600ppx.jpg", "50", "75", "36"),
        new Jugador("Aragorn", "Numenoreano", "Paladín",  "https://qph.cf2.quoracdn.net/main-qimg-cbade0d17806e258ac758c2e9dc5e3fb-pjlq", "19", "72", "43"),
        new Jugador("Frodo Bolsón", "Hobbit", "Portador del Anillo", "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elijah_Wood_as_Frodo_Baggins.png/220px-Elijah_Wood_as_Frodo_Baggins.png", "95", "88", "72"),
        new Jugador("Gandalf", "Istar", "Mago", "https://pbs.twimg.com/profile_images/455474217325441024/5Biy7IE9_400x400.jpeg", "80", "95", "90"),
        new Jugador("Gollum", "Hobbit", "Corrupto por el Anillo", "https://images.uncyclomedia.co/inciclopedia/es/e/e3/Gollumpescado.jpg", "40", "60", "20"),
        new Jugador("Elrond", "Elfo", "Señor de Rivendel", "https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/09/08/5faa5e025b2a3.jpeg", "85", "90", "78"),
        new Jugador("Théoden", "Hombre", "Rey de Rohan", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmAFHmI75norpzTd5FvhgKRI4Z6nQVG6bUA&usqp=CAU", "75", "80", "92")
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
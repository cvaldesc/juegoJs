window.addEventListener('DOMContentLoaded', function(argument) {
	INICIO.iniciarJuego();

});

INICIO = {
	iniciarJuego: function(){

		var CrearBtn = document.getElementById("btnCrear");

		var ClanSeleccionado = document.getElementById('SelecClan').value;
		EVENTOS.obtenerValores(ClanSeleccionado);


		document.getElementById('descripcionClan').innerHTML = ClanSeleccionado;
		console.log(ClanSeleccionado);
	}
}





EVENTOS = {
	obtenerValores: function (ev) {
		
		/*for (var i = 0;   i < ev.length ; i++) {
			console.log(ev);
		}*/
		console.log(ev);

	}
}

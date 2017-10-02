window.addEventListener('DOMContentLoaded', function(argument) {
	INICIO.iniciarJuego();

});

INICIO = {
	iniciarJuego: function(){

		var CrearBtn = document.getElementById("btnCrear");

		var ClanSeleccionado = document.getElementById('SelecClan');
		var AtributoSeleccionado = document.getElementById('atributos');

		//console.log(AtributoSeleccionado);


		

		ClanSeleccionado.addEventListener('change', function(){
			document.getElementById('descripcionClan').innerHTML = ClanSeleccionado.value;
			console.log(ClanSeleccionado);
		});

		AtributoSeleccionado.addEventListener('change', function(){
			AtributoSeleccionado = AtributoSeleccionado.getElementsByTagName("INPUT");
			console.log(AtributoSeleccionado.value);
		});
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

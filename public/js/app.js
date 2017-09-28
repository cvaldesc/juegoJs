window.addEventListener('DOMContentLoaded', function(argument) {
	INICIO.iniciarJuego();
});

INICIO = {
	iniciarJuego: function(){

		var CrearBtn = document.getElementById("btnCrear");

		//Clan
		var ClanSeleccionado = document.getElementById('SelecClan');
		

		//atributos
		var AtributosFisicos = document.getElementById('fisicos').getElementsByTagName('INPUT');
		var AtributosSociales = document.getElementById('sociales').getElementsByTagName('INPUT');
		var AtributosMentales = document.getElementById('mentales').getElementsByTagName('INPUT');

		//habilidades
		var HabilidadesTalentos = document.getElementById('talentos').getElementsByTagName('INPUT');
		var HabilidadesTecnicas = document.getElementById('tecnicas').getElementsByTagName('INPUT');
		var HabilidadesConocimientos = document.getElementById('conocimientos').getElementsByTagName('INPUT');



		document.getElementById('descripcionClan').innerHTML = ClanSeleccionado;
		
		console.log(ClanSeleccionado);

		ClanSeleccionado.addEventListener("change", function(ev) {
			console.log(ClanSeleccionado.value);
		});
		//console.log(AtributosFisicos.getElementsByTagName('INPUT'));
		//console.log(AtributosSociales.getElementsByTagName('INPUT'));
		//console.log(AtributosMentales.getElementsByTagName('INPUT'));
		

		//obtenerAtributos
		ObtenerCaracteristicas(AtributosFisicos);
		ObtenerCaracteristicas(AtributosSociales);
		ObtenerCaracteristicas(AtributosMentales);

		//obtenerHabilidades
		ObtenerCaracteristicas(HabilidadesTalentos);
		ObtenerCaracteristicas(HabilidadesTecnicas);
		ObtenerCaracteristicas(HabilidadesConocimientos);

		function ObtenerCaracteristicas(TipoAtributos){
			for (var i = 0; i < TipoAtributos.length; i++) {
				TipoAtributos[i];
				escuchar(TipoAtributos[i]);
			};
			function escuchar (i) {
				// body...
				console.log(i.name);
				console.log(i.value);
				i.addEventListener("change",function () {
					// body...
					console.log(this.name);
					console.log(this.value);
				});

			}
		}
		
		
	}
}





EVENTOS = {
	
	
}

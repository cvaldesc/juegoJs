window.addEventListener('DOMContentLoaded', function(argument) {
	INICIO.iniciarJuego();
});

INICIO = {
	iniciarJuego: function(){

		var Personaje = new Object();


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
		
		//obtenerClan
		escuchar(ClanSeleccionado);

		//obtenerAtributos
		ObtenerCaracteristicas(AtributosFisicos);
		ObtenerCaracteristicas(AtributosSociales);
		ObtenerCaracteristicas(AtributosMentales);

		//obtenerHabilidades
		ObtenerCaracteristicas(HabilidadesTalentos);
		ObtenerCaracteristicas(HabilidadesTecnicas);
		ObtenerCaracteristicas(HabilidadesConocimientos);

		CrearBtn.addEventListener("click",function () {
			ETAPASPERSONAJE.crearPesonaje(Personaje);

			console.log(Personaje);
		});

		//Recorre los atributos y le pasa el elemnto  a los atributos 
		function ObtenerCaracteristicas(TipoAtributos){
			for (var i = 0; i < TipoAtributos.length; i++) {
				TipoAtributos[i];
				escuchar(TipoAtributos[i]);
				
			};
			
		};

		//escucha los cambios en los input
		function escuchar (i) {
			Personaje[i.name] = i.value;
			i.addEventListener("change",function () {
				for(var carac in Personaje){
					if(carac === this.name){
						Personaje[carac] = this.value;
					}
				}
				//largo de un objeto
				//console.log( Object.keys(Personaje).length);
				console.log(Personaje);
			});

		};
		
	}
}





EVENTOS = {
	
	
}

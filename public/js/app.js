window.addEventListener('DOMContentLoaded', function(argument) {
	INICIO.iniciarJuego();

});

INICIO = {
	iniciarJuego: function(){

		var pejVampiro = fichaVampiro;
		console.log(pejVampiro);
		var json = JSON.stringify(pejVampiro);
		console.log(json);
		var CrearBtn = document.getElementById("btnCrear");
		Handlebars.registerPartial('seleccionClan', '{{json}}');
		
		//Carga de Template
		TEMPLATE.CompilarTemplate(TEMPLATE.GetElementClan, pejVampiro ,TEMPLATE.IdPublicarTempalte.idClan);
		
		
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

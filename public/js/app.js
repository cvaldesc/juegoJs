window.addEventListener('load', function(argument) {
	var labelDatos = document.getElementsByName("datos");
	var CrearBtn = document.getElementById("btnCrear");
	

	//console.log(pej);


	var templateElement = document.getElementById('handlebars-demo');
	var source = templateElement.innerHTML;
	var template = Handlebars.compile(source);

	var pej = fichaGeneral;
	console.log(pej);
	var compiledHTML = template(pej);

	var parser = new DOMParser();
	var convertedHtml = parser.parseFromString(compiledHTML, 'text/xml');
	templateElement.parentElement.appendChild(convertedHtml.documentElement);


	CrearBtn.addEventListener("click", function (ev) {
		EVENTOS.obtenerValores(labelDatos);
	}, false);
});

EVENTOS = {
	obtenerValores: function (ev) {
		
		for (var i = 0;   i < ev.length ; i++) {
			console.log(ev);
		}
		console.log(ev.value);

	}
}
PERSONAJE = {
	crearPesonaje: function () {
		/* body... */
	},
	editarPersonaje: function () {
		/* body... */
	},
	eleminarPersonaje: function () {
		/* body... */
	}

}
DATOS = {
	grabar: function () {
		/* body... */
	},
	obtener: function () {
		/* body... */
	},
	actualizar: function () {
		/* body... */
	},
	eliminar: function () {
		/* body... */
	}
}
DATOS = {
	grabar: function (ElementoAGuardar) {
		
		if(typeof(Storage)!== "undefined"){
			localStorage.setItem("personaje", ElementoAGuardar);
			console.info("guardado con exito");
		}else{
			console.error("El navegador no soporta el LocalStorage");
		}
	},
	obtener: function (ElementoAGuardar) {
		if(typeof(Storage)!== "undefined"){
			localStorage.getItem("personaje");
		}else{
			console.error("El navegador no soporta el LocalStorage");
		}
	},
	actualizar: function () {
		/* body... */
	},
	eliminar: function () {
		/* body... */
	}
}
TEMPLATE = {
	GetElementClan : document.getElementById('selectClan'),
	IdPublicarTempalte:{
		idClan : 'MuestraClan'
	},
	CompilarTemplate : function (template, arreglo, idCompilado) {
		
		var source = template.innerHTML;
		var template = Handlebars.compile(source);
		var compiledHTML = template(arreglo);
		document.getElementById(idCompilado).innerHTML = compiledHTML;
	}
};
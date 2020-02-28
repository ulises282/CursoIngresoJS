/*c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, 
cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.
*/
function mostrar()
{
	var respuesta;
	var carga;
	var marca;
	var kiloBolsa;
	var cantidadBolsa;
	var importeBolsa;
	var kilos;
	var contador;
	contador=0;
	var marcaMasKilos;
	var marcaMasBolsas;
	var masKilos;
	var masBolsas;
	var masImporte;
	var bolsaMenosPesada;
	var importeMenosPesada;
	var marcaMenosPesada;

	for (carga=0; carga<1000;)
	{
		contador++;
		
		marca=prompt("ingresar la marca : ");

		do
		{
			kiloBolsa=prompt("ingresar el peso por bolsa en kilos : ");
		}
		while (isNaN(kiloBolsa)||kiloBolsa>1000 || kiloBolsa<1);

		do
		{
			cantidadBolsa=prompt("ingresar la cantidad de bolsas : ");
		}
		while(isNaN(cantidadBolsa) || cantidadBolsa<1);

		do
		{
			importeBolsa=prompt("ingresar el importe por bolsa : ");
		}
		while(isNaN(importeBolsa) || importeBolsa<1);

		kilos=kiloBolsa*cantidadBolsa;

		carga=carga+kilos;

		if (carga>1000)
		{
			alert("error supera el peso permitido");
			break;
		}

		if (contador==1)
		{
			marcaMasKilos=marca;
			masKilos=kilos;
			marcaMasBolsas=marca;
			masBolsas=cantidadBolsa;
			marcaMasImporte=marca;
			masImporte=importeBolsa;
			bolsaMenosPesada=kiloBolsa;
			importeMenosPesada=importeBolsa;
			marcaMenosPesada=marca;
		}
		if (masImporte<importeBolsa)
		{
			marcaMasImporte=marca;
			masImporte=importeBolsa;
		}

		if (masBolsas<cantidadBolsa)
		{
			marcaMasBolsas=marca;
			masBolsas=cantidadBolsa;
		}

		if (masKilos<kilos)
		{
			marcaMasKilos=marca;
			masKilos=kilos;
		}

		if (bolsaMenosPesada>kiloBolsa)
		{
			bolsaMenosPesada=kiloBolsa;
			importeMenosPesada=importeBolsa;
			marcaMenosPesada=marca;
		}


		respuesta=prompt("desea seguir cargando? (no para salir)");
		if (respuesta=="no")
		{
			break;
		}
	}

	document.write("la marca que tiene mas kilos es : " + marcaMasKilos + " que tiene : " + masKilos + " kilos");
	document.write("la marca que tiene mas bolsas es : " + marcaMasBolsas + " que tiene : " + masBolsas + " bolsas");
	document.write("la marca que tiene mas importe por bolsa es : " + marcaMasImporte + " que su valor es de : " + masImporte);
	document.write("la bolsa menos pesada es de : " + marcaMenosPesada + " que pesa : " + bolsaMenosPesada + " kilo y su importe es de : " + importeMenosPesada);

}

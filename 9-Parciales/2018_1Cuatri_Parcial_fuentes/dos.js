/*b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/
function mostrar()
{
	var nombre;
	var cantidadPersonas;
	var estadia;
	var formaPago;
	var respuesta;
	var contador;
	contador=0;
	var nombreMasPersonas;
	var masPersonas;
	var masDias;
	var efectivo;
	efectivo=0;
	var tarjeta;
	tarjeta=0;
	var QR;
	QR=0;
	var masDiasPersonas;
	masDiasPersonas=0;

	while (respuesta != "no")
	{
		contador++;
		do
		{
			nombre=prompt("ingresar el nombre: ");
		}
		while (!(isNaN(nombre)));


		do
		{
			cantidadPersonas=prompt("ingresar la cantidad de personas : ");
			cantidadPersonas=parseInt(cantidadPersonas);
		}
		while (isNaN(cantidadPersonas)|| cantidadPersonas<1);

		do
		{
			estadia=prompt("ingresar la cantidad de dias de estadia : ");
			estadia=parseInt(estadia);
		}
		while (isNaN(estadia)|| estadia<1 );

		do 
		{
			formaPago=prompt("ingrese forma de pago : (efectivo , tarjeta o QR)");
		}
		while (formaPago!="efectivo" && formaPago!="tarjeta" && formaPago!="QR");

		if (contador==1)
		{
			nombreMasPersonas=nombre;
			masPersonas=cantidadPersonas;
			masDias=estadia;
			masDiasPersonas=cantidadPersonas;
		}

		if (cantidadPersonas<cantidadPersonas)
		{
			nombreMasPersonas=nombre;
			masPersonas=cantidadPersonas;
		}

		if (estadia>masDias)
		{
			masDias=estadia;
			masDiasPersonas=cantidadPersonas;
		}

		switch(formaPago)
		{
			case"tarjeta":
				tarjeta++;
				break;

			case"QR":
				QR++;
				break;

			case"efectivo":
				efectivo++;
				break;
		}

		respuesta=prompt("desea seguir cargando datos? (no para salir)");
	}

	if (tarjeta>QR && tarjeta>efectivo)
	{
		alert("el metodo de pago mas ultilizado fue tarjeta ");
	}
	else
	{
		if (QR>efectivo)
		{
			alert("el metodo de pago mas ultilizado fue QR ");
		}
		else
		{
			alert("el metodo de pago mas ultilizado fue efectivo ");
		}
	}
	document.write("el huésped que trajo más personas es: " + nombreMasPersonas + " que trajo : " + cantidadPersonas + " personas ");
	document.write("las personas que se quedaron mas dias son : " + masDiasPersonas + " que se quedaron : " + masDias + " dias ");
}


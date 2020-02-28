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
	var cantidadPersonas;

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
		}
		while (isNaN(cantidadPersonas)|| cantidadPersonas<1);

		do
		{
			estadia=prompt("ingresar la cantidad de dias de estadia : ");
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
			cantidadPersonas=personas;
		}

		if (cantidadPersonas<personas)
		{
			nombreMasPersonas=nombre;
			cantidadPersonas=personas;
		}


		respuesta=prompt("desea seguir cargando datos? (no para salir)");
	}

	alert("el huésped que trajo más personas es: " + nombreMasPersonas + " que trajo : " + cantidadPersonas + " personas ");
}

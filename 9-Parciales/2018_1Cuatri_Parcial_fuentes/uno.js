
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var respuesta;
	var contador;
	contador=0;
	var temperaturaMasAlta;
	temperaturaMasAlta=0;
	var nombreMasAlta;
	nombreMasAlta=0;
	var temperaturaJoven;
	temperaturaJoven=0;
	var temperaturaViejo;
	temperaturaViejo=0;
	var edadViejo;
	edadViejo=0;
	var edadJoven;
	edadJoven=0;
	var edadTotal;
	edadTotal=0;
	var edadMujeres;
	edadMujeres=0;
	var promedioTotal;
	promedioTotal=0;
	var promedioMujeres;
	promedioMujeres=0;
	var contadorMujeres;
	contadorMujeres=0;

	while(respuesta!="no")
	{
		contador++;
		do
		{
			nombre=prompt("ingresar nombre : ");
		}
		while(!(isNaN(nombre)));

		do
		{
			edad=prompt("ingresar edad :");
			edad=parseInt(edad);
		}
		while(isNaN(edad)||edad>110||edad<1);

		do 
		{
			sexo=prompt("ingresar sexo (f o m): ");
		}
		while(sexo!="m" && sexo !="f");

		do
		{
			temperatura=prompt("ingresar temperatura : ");
		}
		while(isNaN(temperatura)||temperatura>45||temperatura<10);

		respuesta=prompt("desea seguir cargando datos? (no para salir)");

		if (contador==1)
		{
			temperaturaMasAlta=temperatura;
			nombreMasAlta=nombre;
			temperaturaViejo=temperatura;
			edadViejo=edad;
			temperaturaJoven=temperatura;
			edadJoven=edad;
		}
		if (temperaturaMasAlta<temperatura)
		{
			temperaturaMasAlta=temperatura;
			nombreMasAlta=nombre;
		}
		if (temperatura>38)
		{
			if (edad<13)
			{
				alert(" riesgo con : " + nombre + " edad : " + edad + " la temperatura es de: " + temperatura);
			}
			else
			{
				if (edad>60)
				{
					alert(" riesgo con : " + nombre + " edad : " + edad + " la temperatura es de: " + temperatura);
				}
			}
		}
		if (edadViejo<edad)
		{
			temperaturaViejo=temperatura;
			edadViejo=edad;
		}
		else
		{
			if (edadJoven>edad)
			{
				temperaturaJoven=temperatura;
				edadJoven=edad;
			}
		}
		edadTotal=edadTotal+edad;
		if (sexo=="f")
		{
			contadorMujeres++;
			edadMujeres=edadMujeres+edad;
		}

	}
	promedioTotal=edadTotal/contador;
	promedioMujeres=edadMujeres/contadorMujeres;
	alert("la temperatura mas alta es de: " + nombreMasAlta + " y es de : " + temperaturaMasAlta + "ºC");
	alert("la temperatura de la persona mas vieja es de : " + temperaturaViejo + " y teiene : " + edadViejo + " años ");
	alert("la temperatura de la persona mas joven es de : " + temperaturaJoven + " y teiene : " + edadJoven
	 + " años ");
	alert("el promedio total de edad es de : " + promedioTotal);
	alert("el promedio de edad de la mujeres es de: " + promedioMujeres);

}

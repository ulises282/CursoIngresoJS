function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resta;
	var suma;
	var concatenado;

	primerNumero=prompt("ingresar el primer numero: ");

	segundoNumero=prompt("ingresar el segundo numero: ");

	if (primerNumero==segundoNumero)
	{
		concatenado=primerNumero+segundoNumero;
		alert("el numero concatenado es: " + concatenado);
	}
	else
	{
		segundoNumero=parseInt(segundoNumero);
		primerNumero=parseInt(primerNumero);
		if (primerNumero>segundoNumero)
		{
			resta=primerNumero-segundoNumero;
			alert("la resta es: " + resta);
		}
		else
		{
			suma=primerNumero+segundoNumero;
			if (suma>10)
			{
				alert("la suma es " + suma + " y supero el 10");
			}
			else
			{
				alert("la suma es: " + suma);
			}

		}
	}

}

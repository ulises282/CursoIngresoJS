function mostrar()
{
	var numero;
	var numeroAnterior;
	var flag;
	flag=0;

	numero=prompt("ingrese un numero : ");

	for(numeroAnterior=2;numeroAnterior<numero;numeroAnterior++)
	{
		if (numero%numeroAnterior==0)
		{
			flag=1;
		}
	}

	if (flag==1)
	{
		alert("el numero ingresado no es primo ");
	}
	else
	{
		alert("el numero ingresado es primo ");
	}


}//FIN DE LA FUNCIÓN
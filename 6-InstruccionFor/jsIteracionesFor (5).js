function mostrar()
{
	var numero;

	for(;;)
	{
		numero=prompt("ingrese un numero (9 para finalizar):");
		while(isNaN(numero))
		{
			numero=prompt("ese no es un numero ingrese un numero (9 para finalizar):");
		}
		if (numero==9)
		{
			break;
		}
	}




}//FIN DE LA FUNCIÓN
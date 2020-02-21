function mostrar()
{
	var numero;
	numero=-1;

	while (numero>10 || numero<0)
	{
		numero = prompt("el numero no esta entre el 0 y 10, intente denuevo: ");
		while (isNaN(numero))
		{
		numero = prompt("error ingrese un numero valido :");
		}
	}
	alert("el numero ingresado es : " + numero);

}//FIN DE LA FUNCIÓN
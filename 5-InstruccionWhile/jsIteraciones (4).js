function mostrar()
{
	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while (numero>10 || numero<0)
	{
		numero = prompt("el numero no esta entre el 0 y 10, intente denuevo: ");
	}
	alert("el numero ingresado es : " + numero);

}//FIN DE LA FUNCIÓN
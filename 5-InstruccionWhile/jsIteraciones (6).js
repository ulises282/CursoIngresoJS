function mostrar()
{
	var contador;
	var acumulador;
	var numero;
	
	while (contador<5)
	{
		numero = prompt("ingrese un numero ");
		numero=parseInt(numero);
		while (isNaN(numero))
		{
			numero = prompt("ingrese un numero valido: ");
			numero=parseInt(numero);
		}
		acumulador=acumulador+numero;
		contador=contador+1;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
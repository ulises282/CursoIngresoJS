function mostrar()
{

	var contador;
	contador=0;
	var acumulador;
	acumulador=0;
	var respuesta;
	respuesta='si';

	while (respuesta=="si")
	{
		contador=contador+1;

		numero = prompt("ingrese un numero ");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero = prompt("error ingrese un numero valido: ");
			numero = parseInt(numero);
		}

		acumulador=acumulador+numero;

		respuesta = prompt("desea ingresar otro numero?: ");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
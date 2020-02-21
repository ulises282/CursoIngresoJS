function mostrar()
{

	var contador;
	var positivo;
	positivo=0;
	var negativo;
	negativo=1;
	
	var respuesta;
	respuesta='si';

	while (respuesta=="si")
	{
		numero = prompt("ingrese un numero ");
		numero=parseInt(numero);
		if (numero>0)
		{
			positivo=positivo+numero;
		}
		else
		{
			if (numero<0)
			{
				negativo=negativo*numero;
			}
		}
		contador=contador+1;
		respuesta = prompt("desea ingresar otro numero?: ");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
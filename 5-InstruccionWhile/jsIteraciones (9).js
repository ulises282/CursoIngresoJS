function mostrar()
{

	var contador;
	contador=0;
	var mayor;
	mayor=0;
	var menor;
	menor=0;
	// declarar variables
	
	var respuesta;
	respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt("ingrese un numero ");
		numero=parseInt(numero);	
		
		while(isNaN(numero))
		{
			numero = prompt("error ingrese un numero valido: ");
			numero=parseInt(numero);
		}
		
		contador=contador+1;

		if (contador==1)
		{
			menor = numero;
			mayor = numero;
		}
		else
		{
			if (numero<menor)
			{
				menor=numero;
			} 
			else
			{
				if (numero>mayor)
				{
				mayor=numero;
				}
			}
		}
		
		respuesta = prompt("desea ingresar otro numero?: ");
	}
	document.getElementById('maximo').value=mayor;
	document.getElementById('minimo').value=menor;




}//FIN DE LA FUNCIÓN
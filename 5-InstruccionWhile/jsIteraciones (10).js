function mostrar()
{

	var contador;
	var numero;
	var negativo;
	negativo=0;
	var positivo;
	positivo=0;
	var contadorCero;
	contadorCero=0;
	var contadorNegativo;
	contadorNegativo=0;
	var contadorPositivo;
	contadorPositivo=0;
	var numerosPar;
	numerosPar=0;
	var promedioPostivo;
	promedioPostivo=0;
	var promedioNegativo;
	promedioNegativo=0;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero: ");
		numero=parseInt(numero);
		while (isNaN(numero))
		{
			numero=prompt("error ingrese un numero valido: ");
			numero=parseInt(numero);
		}
		respuesta=prompt("desea continuar?: ");
		
		if (numero % 2 == 0)
		{
			numerosPar=numerosPar+1
		}
		if (numero==0)
		{
			contadorCero=contadorCero+1;
		}
		else
		{
			if (numero<0)
			{
				negativo=negativo+numero;
				contadorNegativo=contadorNegativo+1
			}
			else
			{
			positivo=positivo+numero;
			contadorPositivo=contadorPositivo+1
			}
		}
	
	}
	promedioPostivo=positivo/contadorPositivo;
	promedioNegativo=negativo/contadorNegativo;
	diferencia=positivo+negativo;
	alert("la suma de los negativos es: " + negativo );
	alert("la suma de los positivos es: " + positivo );
	alert("la cantidad de numero positivos ingresados es de: " + contadorPositivo);
	alert("la cantidad de numeros negativos ingresados es de: " + contadorNegativo);
	alert("la cantidad de ceros ingresados es de: " + contadorCero);
	alert("la cantidad de numero par ingresados es de: " + numerosPar);
	alert("el promedio de numeros positivos es de: " + promedioPostivo);
	alert("el promedio de numeros negativos es de: " + promedioNegativo);
	alert("la diferencia entre positivos y negativos es : " + diferencia);

}//FIN DE LA FUNCIÓN
/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/
function mostrar()
{
	var numero;
	var letra;
	var respuesta;
	var par;
	par=0;
	var cero;
	cero=0;
	var impar;
	impar=0;
	var positivos;
	positivos=0;
	var cantidadPostivos;
	cantidadPostivos=0;

	while (respuesta!="no")
	{
		letra=prompt("ingresar una letra: ");

		while (!(isNaN(letra)))
		{
			letra=prompt("error ingresar una letra: ");
		}

		numero=prompt("ingresar un numero (entre -100 y 100): ");
		numero=parseInt(numero);

		while (isNaN(numero) || numero>100 || numero<-100)
		{
			numero=prompt("error ingresar un numero (entre -100 y 100): ");
			numero=parseInt(numero);
		}

		if (numero==0)
		{
			cero=cero+1;
		}
		else
		{
			if (numero%2==0)
			{
				par=par+1;
			}
			else 
			{
				impra=impar+1;
			}
		}

		if (numero>0)
		{
			positivos=positivos+numero;
			cantidadPostivos=cantidadPostivos+1;
		}
		if (numero<0)
		{
			suma=suma+numero;
		}
		


		respuesta=prompt("desea seguir ingresando datos? (no para salir) ");
	}
	promedio=positivos/cantidadPostivos;
	alert("la cantidad de numeros pares es de : " + par);
	alert("la cantidad de numeros impares es de : " + impar);
	alert("la cantidad de ceros es de: " + cero);
	alert("el promedio de los numero positivos ingresados es de: " + promedio);
	alert("la suma de los numeros negativos es de: " + suma);
}

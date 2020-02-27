/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	var numero;
	var pares;
	var cantidadPares;
	var contador;
	contador=0;

	numero=prompt("ingresar un numero :");
	while (isNaN(numero))
	{
		numero=prompt("error ese no es un numero ingresar un numero :");
	}

	for (pares=2; pares<=numero; pares=pares+2)
	{
		contador++;
		console.log("los numeros pares hasta el numero ingresado : " + pares)
	}
	alert("la cantidad de numero pares encontrados es de : " + contador);



}//FIN DE LA FUNCIÓN
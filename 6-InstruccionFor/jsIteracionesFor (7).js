/*al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.
Curso de ingreso UTN FRA*/
function mostrar()
{
	var numero;
	var divisores;
	var resto;
	var numeroDivisores;

	numero=prompt("ingresar un numero : ");
	numero=parseInt(numero);

	for (divisores=0;divisores<numero;divisores++)
	{
		resto=numero%divisores;
		if (resto==0)
		{
			alert(divisores);
			numeroDivisores++;
		}
	}
	alert("la cantidad de numeros Divisores encontrados fue : " + numeroDivisores);


}//FIN DE LA FUNCIÓN
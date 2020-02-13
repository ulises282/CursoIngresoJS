/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
	var Centígrados;

	Fahrenheit=document.getElementById('Temperatura').value;
	Fahrenheit=parseInt(Fahrenheit);

	Centígrados=5/9 *(Fahrenheit-32);

	alert(Fahrenheit +"° Fahrenheit son: "+Centígrados + "° centigrados");
}

function CentigradosFahrenheit () 
{
	var Fahrenheit;
	var Centígrados;

	Centígrados=document.getElementById('Temperatura').value;
	Centígrados=parseInt(Centígrados);

	Fahrenheit=9/5*(Centígrados)+32;

	alert(Centígrados +"° centigrados son: "+Fahrenheit + "° Fahrenheit");
}

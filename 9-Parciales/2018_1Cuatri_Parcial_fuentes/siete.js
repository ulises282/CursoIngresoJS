/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar()
{
	var contador;
	contador=0;
	var nota;
	var sexo;
	var minimo;
	var minimoSexo;
	var promedio;
	var notas;
	notas=0;
	var varones;
	varones=0;

	while(contador<5)
	{
		contador=contador+1;
		nota=prompt("ingresar nota: ");
		nota=parseInt(nota);

		while (isNaN(nota)||nota<0||nota>10)
		{
			nota=prompt("error ingresar nota: ");
			nota=parseInt(nota);
		}
		sexo=prompt("ingresar sexo (f o m) : ");

		while(sexo!="m" && sexo!="f" )
		{
			sexo=prompt("error ingresar sexo (f o m) : ");
		}

		notas=notas+nota;

		if(contador==1)
		{
			minimo=nota;
			minimoSexo=sexo;
		}
		if (nota<minimo)
		{
			minimo=nota;
			minimoSexo=sexo;
		}
		if (sexo=="m" && nota>5)
		{
			varones=varones+1;
		}

	}

	promedio=notas/contador;
	alert("el promedio de las notas es de: " + promedio);
	alert("la nota mas baja es :" + minimo + " y el sexo de esa persona es : " + minimoSexo );
	alert("la cantidad de varones con nota mayor o igual a 6 es de : " + varones);

}

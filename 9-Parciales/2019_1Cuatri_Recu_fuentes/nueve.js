/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) ,
 el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino*/
function mostrar()
{
	var respuesta;
	var nombre;
	var edad;
	var notaFinal;
	var sexo;
	var varonesAprobados;
	varonesAprobados=0;
	var notasMenores;
	notasMenores=0;
	var cantidadMenores;
	cantidadMenores=0;
	var notasAdolescentes;
	notasAdolescentes=0;
	var cantidadAdolescentes;
	cantidadAdolescentes=0;
	var notasAdultos;
	notasAdultos=0;
	var cantidadAdultos;
	cantidadAdultos;

	while(respuesta!="no")
	{
		nombre=prompt("ingresar el nombre: ");

		while(!(isNaN(nombre)))
		{
			nombre=prompt("error ingresar el nombre: ");
		}

		edad=prompt("ingresar edad : ");

		while(isNaN(edad)||edad<1||edad>110)
		{
			edad=prompt("error ingresar edad : ");
		}

		sexo=prompt("ingresar sexo (f o m) : ");

		while(sexo!="m" && sexo !="f")
		{
			sexo=prompt("error ingresar sexo (f o m) : ");
		}

		notaFinal=prompt("ingresar nota final : ");

		while(isNaN(notaFinal)||notaFinal<1 || notaFinal>10)
		{
			notaFinal=prompt("error ingresar nota final : ");
		}
		if (sexo=="m" && notaFinal>5)
		{
			varonesAprobados++;
		}
		if (edad<13)
		{
			notasMenores=notasMenores+notaFinal;
			cantidadMenores++;
		}
		else
		{
			if(edad<19)
			{
				notasAdolescentes=notasAdolescentes+notaFinal;
				cantidadAdolescentes++;
			}
			else
			{
				notasAdultos=notasAdultos+notaFinal;
				cantidadAdultos++;
			}
		}

		respuesta=prompt("desea seguir ingresando datos? (no para salir)");
	}
	promedioMenores=notasMenores/cantidadMenores;
	promedioAdolescentes=notasAdolescentes/cantidadAdolescentes;
	promedioAdultos=notasAdultos/cantidadAdultos;
	document.write("la cantidad de varones aprobados es de: " + varonesAprobados );
	document.write("el promedio de notas de los menores de edad es de : " + promedioMenores);
	document.write("el promedio de notas de los adolescentes de edad es de : " + promedioAdolescentes);
	document.write("el promedio de notas de los adultos de edad es de : " + promedioAdultos);
}

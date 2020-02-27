function mostrar()
{
	var repeticiones;
	repeticiones = prompt("ingrese el número de repeticiones: ");

	while(isNaN(repeticiones))
	{
		repeticiones = prompt("error ingrese el número de repeticiones: ");
	}

	for(contador=0; contador<repeticiones; contador++)
	{
		console.log("Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN
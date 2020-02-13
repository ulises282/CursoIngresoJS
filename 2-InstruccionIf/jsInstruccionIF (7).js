function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	estadoCivil=document.getElementById('estadoCivil').value;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad<18 && estadoCivil != "Soltero" )// == igual   != distinto
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	
}//FIN DE LA FUNCIÓN
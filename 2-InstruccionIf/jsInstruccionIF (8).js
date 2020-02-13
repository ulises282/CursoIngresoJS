function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	estadoCivil=document.getElementById('estadoCivil').value;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>17 && estadoCivil == "Soltero" )// == igual   != distinto
	{
		alert("Es soltero y no es menor.");
	}
	


}//FIN DE LA FUNCIÓN
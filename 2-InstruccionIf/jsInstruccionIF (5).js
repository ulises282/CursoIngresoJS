function mostrar()
{
	//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad<13||edad>17)// == igual   != distinto
	{
		alert("no es adolecente");
	}

}//FIN DE LA FUNCIÓN
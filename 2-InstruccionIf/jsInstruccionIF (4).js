function mostrar()
{
	//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>12 && edad<18)// == igual   != distinto
	{
		alert("es adolecente");
	}
}//FIN DE LA FUNCIÓN
function mostrar()
{
	//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad==15)// == igual   != distinto
	{
		alert("niña bonita");
	}
}
//FIN DE LA FUNCIÓN
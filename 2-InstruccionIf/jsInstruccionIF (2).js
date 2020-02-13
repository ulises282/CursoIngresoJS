function mostrar()
{
	//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>17)// == igual   != distinto
	{
		alert("es mayor de edad");
	}
	
}//FIN DE LA FUNCIÓN
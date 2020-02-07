/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var resultado;
	var aumento;

	porcentaje=25;
	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	aumento=importe*porcentaje/100;
	resultado=importe+aumento;

	document.getElementById('resultado').value=resultado;
}

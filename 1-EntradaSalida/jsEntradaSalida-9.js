/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var resultado;

	importe=document.getElementById('sueldo').value;
	importe=parseInt(importe);

	porcentaje=importe*0.10;

	resultado=importe+porcentaje;

	document.getElementById('resultado').value=resultado;
}

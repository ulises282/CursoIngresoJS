/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=document.getElementById('numeroUno').value;
	console.log(primerNumero);
	primerNumero=parseInt(primerNumero);


	segundoNumero=document.getElementById('numeroDos').value;
	console.log(segundoNumero);
	segundoNumero=parseInt(segundoNumero);//parseInt transforma un valor a numero

	suma=primerNumero+segundoNumero;
	alert(suma);

}


/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaSuma;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaSuma=primerNumero+segundoNumero;

	alert("la suma es: "+resultadoDeLaSuma);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaResta;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaResta=primerNumero-segundoNumero;

	alert("la resta es: "+resultadoDeLaResta);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaMultiplicacion;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaMultiplicacion=primerNumero*segundoNumero;

	alert("la multiplicacion es: "+resultadoDeLaMultiplicacion);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaDivision;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaDivision=primerNumero/segundoNumero;

	alert("la division es: "+resultadoDeLaDivision);
}


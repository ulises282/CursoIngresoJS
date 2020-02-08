/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var suma;

	productoUno=document.getElementById('PrecioUno').value;
	productoUno=parseInt(productoUno);

	productoDos=document.getElementById('PrecioDos').value;
	productoDos=parseInt(productoDos);

	productoTres=document.getElementById('PrecioTres').value;
	productoTres=parseInt(productoTres);

	suma=productoUno+productoDos+productoTres;

	alert("la suma de los precios es de: " + suma);

}
function Promedio () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var suma;
	var promedio;

	productoUno=document.getElementById('PrecioUno').value;
	productoUno=parseInt(productoUno);

	productoDos=document.getElementById('PrecioDos').value;
	productoDos=parseInt(productoDos);

	productoTres=document.getElementById('PrecioTres').value;
	productoTres=parseInt(productoTres);

	suma=productoUno+productoDos+productoTres;

	promedio=suma/3;

	alert("el promedio de los precios es de: " + promedio);
}
function PrecioFinal () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var suma;
	var iva;
	var porcentaje;
	var precioFinal;

	iva=21;

	productoUno=document.getElementById('PrecioUno').value;
	productoUno=parseInt(productoUno);

	productoDos=document.getElementById('PrecioDos').value;
	productoDos=parseInt(productoDos);

	productoTres=document.getElementById('PrecioTres').value;
	productoTres=parseInt(productoTres);

	suma=productoUno+productoDos+productoTres;

	porcentaje=suma*iva/100;

	precioFinal=suma+porcentaje;

	alert("el precio final (con iva) es : " + precioFinal);
}
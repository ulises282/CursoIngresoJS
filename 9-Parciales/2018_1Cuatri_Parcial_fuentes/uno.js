
function mostrar()
{
	var anchoDelTriangulo;
	var largoDelTriangulo;

	anchoDelTriangulo=prompt("ingresa el ancho del triangulo: ");
	anchoDelTriangulo=parseInt(anchoDelTriangulo);

	largoDelTriangulo=prompt("ingresar el largo del triangulo: ");
	largoDelTriangulo=parseInt(largoDelTriangulo);

	perimetro=2*(largoDelTriangulo+anchoDelTriangulo);

	alert("el perimetro es: "+perimetro);
}

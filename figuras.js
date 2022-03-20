// Codigo del cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

// Codigo del triangulo
console.group("Triagulos");

const alturaTriangulo = 5.5;

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (lado1, lado2, base, altura) => {
  if(lado1 != lado2){
    return (base * altura) / 2;
  }else {
    alert("Es un triangulo isoceles");
    altura = Math.sqrt(((lado1 * lado1) - ((base * base) / 4)));
    return (base * altura) / 2;
  }
};

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

const diametroCirculo = (radio) => radio * 2;

const PI = Math.PI;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => (radio * radio) * PI

console.groupEnd();

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value)
  alert(perimetro)
}

const calcularAreaCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value)
  alert(area)
}

const calcularPerimetroTriangulo = () => {
  const inputLado1 = document.getElementById("InputLado1Triangulo");
  const inputLado2 = document.getElementById("InputLado2Triangulo");
  const inputBase = document.getElementById("InputBaseTriangulo");

  const lado1 = parseInt(inputLado1.value);
  const lado2 = parseInt(inputLado2.value);
  const base = parseInt(inputBase.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro)
}

const calcularAreaTriangulo = () => {
  const inputLado1 = document.getElementById("InputLado1Triangulo");
  const inputLado2 = document.getElementById("InputLado2Triangulo");
  const inputBase = document.getElementById("InputBaseTriangulo");
  const inputAltura = document.getElementById("InputAlturaTriangulo");

  const lado1 = parseInt(inputLado1.value);
  const lado2 = parseInt(inputLado2.value);
  const base = parseInt(inputBase.value);
  const altura = parseInt(inputAltura.value);

  const area = areaTriangulo(lado1, lado2, base, altura);
  alert(area)
}

const calcularPerimetroCirculo = () => {
  const input = document.getElementById("InputCirculo");
  const value = parseInt(input.value);

  const perimetro = perimetroCirculo(value);
  alert(perimetro)
}

const calcularAreaCirculo = () => {
  const input = document.getElementById("InputCirculo");
  const value = parseInt(input.value);

  const area = areaCirculo(value);
  alert(area)
}
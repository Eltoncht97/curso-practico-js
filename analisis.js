//Utils
const calcularPromedio = (lista) => {

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

const esPar = (numero) => numero % 2 === 0;

// Mediana General
const salariosArg = argentina.map((persona) => persona.salary);

const salariosArgSorted = salariosArg.sort((a, b) => a - b);

// Mediana General
const medianaSalarios = (lista) => {
  const mitad = parseInt(lista.length / 2);

  if(esPar(lista.length)){
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularPromedio([personaMitad1, personaMitad2]);
    return mediana;
  }else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}
const medianaGeneral = medianaSalarios(salariosArgSorted);

// Mediana top 10%
const spliceStart = salariosArgSorted.length * 90 / 100;
const spliceCount = salariosArgSorted.length - spliceStart;
const salariosArgTop10 = salariosArgSorted.splice(spliceStart, spliceCount); 

const medianaTop10 = medianaSalarios(salariosArgTop10);

console.log({
  medianaGeneral,
  medianaTop10,
})
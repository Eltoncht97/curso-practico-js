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

const calcularMediana = (lista) => {
  //ordenamos la lista
  lista.sort((a,b) => a - b);
  
  const mitadLista = parseInt(lista.length / 2);
  
  let mediana;

  if(esPar(lista.length)){
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
  
    mediana = calcularPromedio([elemento1, elemento2]);
  }else {
    mediana = lista[mitadLista];
  }

  return mediana;
}
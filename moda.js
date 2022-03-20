const calcularModa = (lista) => {
  const listaCount = {};

  lista.map((elemento) => listaCount[elemento] ? listaCount[elemento] += 1 : listaCount[elemento] = 1);

  const listaArray = Object.entries(listaCount).sort((a, b) => a[1] - b[1]);

  const moda = listaArray[listaArray.length - 1];

  return moda;
}
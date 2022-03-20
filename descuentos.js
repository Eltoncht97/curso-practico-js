const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

  return precioConDescuento
}

const cupones = [
  {
    cupon: 'NARUTO 1',
    discount: 50
  },
  {
    cupon: 'YAMATO 1',
    discount: 10
  }
]

// console.log({precioOriginal, descuento, porcentajeDelPrecioConDescuento, precioConDescuento});

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCupon = document.getElementById("InputCupon");
  const discountValue = calcularDescuentoCupon(inputCupon.value);

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}

const calcularDescuentoCupon = (cupon) => {
  const cuponIsValid = cupones.find(item => item.cupon.toLowerCase() === cupon.toLowerCase())
  if(cuponIsValid){
    return cuponIsValid.discount;
  }else{
    alert('CUPON NO VALIDO')
    return 0;
  }
}
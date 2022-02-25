function calculoPrecioDescuento(precio, descuento){
  const descuentoTotal = 100 - descuento;
  const porcentajeAdescontar = (precio * descuentoTotal) / 100;

  const precioApagar = porcentajeAdescontar;

  return precioApagar;
}


function precioDescuento() {
  const inputPrecio = document.getElementById("precio");
  const precioValue = inputPrecio.value;

  const inputDescuento = document.getElementById("descuento");
  const descuentValue = inputDescuento.value;

 const totalPrecioDesucento = calculoPrecioDescuento(precioValue, descuentValue)
  
 const precioTotal = document.getElementById('resultadoPrecio');
 precioTotal.innerText =`El valor total del precio aplciando el descuento es $ ${totalPrecioDesucento}`
  
}

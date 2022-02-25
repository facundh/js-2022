

function calculoPrecioDescuento(precio, descuento){

   

    const descuentoTotal = 100 - descuento;
    const porcentajeAdescontar = (precio * descuentoTotal) / 100;
  
    const precioApagar = porcentajeAdescontar;

  
    return precioApagar;
}
  
  
  function precioDescuento() {

      const inputPrecio = document.getElementById("precio");
      const precioValue = inputPrecio.value;
      
      
      const inputCuponDescuento = document.getElementById("cupon");
      const couponValue = inputCuponDescuento.value;
      
      let descuento;   
      if(couponValue === 'Basico'){
          descuento = Number(15);
      }

      if(couponValue === 'Intermedio'){
          descuento =Number(20);
      }
      if(couponValue === 'Premium'){
          descuento = Number(50);
      }

      if(couponValue === ''){
          alert('Cupon invalido');
      }

  
   const totalPrecioDesucento = Number(calculoPrecioDescuento(precioValue, descuento));
    
   const precioTotal = document.getElementById('resultadoPrecio');
   precioTotal.innerText =`El valor total del precio aplciando el descuento es $ ${totalPrecioDesucento}`
    
  }

  
  


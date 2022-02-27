// Lista desordenada de numeros
const lista = [
  500, 100, 200, 400000000, 10, 20, 500, 750, 10000, 1253, 4000, 5000,
];

// function calcularMediana(lista) {

//   function ordenarLista(lista) {
//     const listaOrdenada = lista.sort((a, b) => {
//       return a - b;
//     });

//     return listaOrdenada;
//   }

//   console.log(ordenarLista(lista));

//   // Caculo si mi lista sea Par o Impar, la vuelvo un entero ya que mi array solo contiene indices y estos son enteros.
//   const mitadLsta = parseInt(lista.length / 2);

//   // Funcion para calcular la media
//   function calcularMedia(arr) {
//     const sumaLista = arr.reduce(function (valorAcumulado = 0, nuevoElemento) {
//       return valorAcumulado + nuevoElemento;
//     });
//     const promedioListaUno = sumaLista / arr.length;

//     return promedioListaUno;
//   }

//   // Chequeo si mi lista es efectivamente par o impar: Esta valor me devuelvoe true o false
//   function esPar(numero) {
//     if (numero % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Genero una variable sin asignarle valor para que esta posteriormente se le asigne el valor que corresponda
//   let mediana;

//   // Chequeo si la longitud de mi lista es Par / Impar
//   if (esPar(lista.length)) {
//     const elemento1 = lista[mitadLsta - 1];
//     const elemento2 = lista[mitadLsta];
//     const medianaElementUnoyDos = calcularMedia([elemento1, elemento2]);
//     mediana = medianaElementUnoyDos;
//     return mediana
//   } else {
//     return mediana = lista[mitadLsta];
//   }

 
// }

function ordenarLista(lista) {
    const listaOrdenada = lista.sort((a, b) => {
      return a - b;
    });

    return listaOrdenada;
  }

  console.log(ordenarLista(lista));

  // Caculo si mi lista sea Par o Impar, la vuelvo un entero ya que mi array solo contiene indices y estos son enteros.
  const mitadLsta = parseInt(lista.length / 2);

  // Funcion para calcular la media
  function calcularMedia(arr) {
    const sumaLista = arr.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
    const promedioListaUno = sumaLista / arr.length;

    return promedioListaUno;
  }

  // Chequeo si mi lista es efectivamente par o impar: Esta valor me devuelvoe true o false
  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  // Genero una variable sin asignarle valor para que esta posteriormente se le asigne el valor que corresponda
  let mediana;

//   // Chequeo si la longitud de mi lista es Par / Impar
//   if (esPar(lista.length)) {
//     const elemento1 = lista[mitadLsta - 1];
//     const elemento2 = lista[mitadLsta];
//     const medianaElementUnoyDos = calcularMedia([elemento1, elemento2]);
//      mediana = medianaElementUnoyDos;
//      return mediana
    
//   } else {
//     return mediana = lista[mitadLsta];
//   }


function calcularMediana2(lista){
    ordenarLista(lista);
    const mitadLista = parseInt(lista.length/2);
    esPar(lista.length);
    let medianaTotal;
    if(esPar(lista.length)){
        const num1 = lista[mitadLista - 1];
        const num2 = lista[mitadLista];
        medianaTotal = calcularMedia([num1, num2]);
        return medianaTotal;
    } else {
        medianaTotal = lista[mitadLista];
        return medianaTotal;
    }

}

console.log(calcularMediana2(lista))

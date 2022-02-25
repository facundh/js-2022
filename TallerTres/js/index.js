

function calcularMedia(arr){

    // let sumaLista = 0;
    
    // for(let i = 0; i < arr.length; i+=1){
    //     sumaLista = sumaLista + arr[i];
    // }

    // Otra forma de recorrer un array y hacer sumas, restas multiplicaciones , divisiones
    const sumaLista = arr.reduce(
        function (valorAcumulado = 0, nuevoElemento  ){
                return valorAcumulado + nuevoElemento
        }
    );
    const promedioListaUno = sumaLista / arr.length;

    return promedioListaUno;

}



console.log(calcularMedia([100,200,300,500]));

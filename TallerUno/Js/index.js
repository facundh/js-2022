// Codigo del cuadrado
console.group('Cuadrado')
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){
   return  lado * 4;
} 
    
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`);
console.log('Function perimetro: ' + perimetroCuadrado(2));

function areaCuadrado(lado) {
    return lado * lado;
}  
console.log('Function area : ' +  areaCuadrado(2));

console.groupEnd();

// Codigo del triangulo

console.group('Trianguno')

// const ladoTrianguloUno = 6;
// const ladoTrianguloDos = 6;
// const base = 4;
// const altura = 5.5;
// const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + base;
// const areaTriangulo = (base * altura) / 2;

function perimetroTriangulo(lado, ladoDos , base){
    return lado + ladoDos + base
}

function areaTriangulo(base, altura){
    const area = (base * altura) / 2
    return area
}


// console.log(`Los lados del triangulo miden ${ladoTrianguloUno} cm , ${ladoTrianguloDos} cm y tiene una base de ${base} cm `);
// console.log(`El perimetro de mi triangulo es de ${perimetroTriangulo}cm`);
// console.log(`El area de mi  triangulo es de ${areaTriangulo} cm cuadrados`);


console.groupEnd();


// Codigo del circulo
console.group('Circulo');

// Radio

// const radioCirculo = 4;
// console.log(`EL radio de mo circulo es ${radioCirculo}cm`);

// diametro

function diametroCirculo (radioCirculo) {
    return radioCirculo * 2
};
// console.log(`El diametro de mi circulo es ${diametroCirculo}cm`);


// PI

const PI = Math.PI;
console.log(`El PI es ${PI}`);

// Circunferencia o perimetro

function perimetroCirculo(radioCirculo) { 
    const diametro = diametroCirculo(radioCirculo);
    const total = diametro * PI
    return total
}
// console.log(`El perimetro de mi circulo es de ${perimetroCirculo}`);

// Area

function areaCirculo(radioCirculo) { 
    const circuloArea = (radioCirculo * radioCirculo ) * PI
    return circuloArea
};
// console.log(`El area de mi circulo es ${areaCirculo}cm cuadrado`);


console.groupEnd();


// Interactuando con html
function calcularPerimetroCuadrado()  {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)

  
}
function calcularAreaCuadrado()  {

    const input = document.getElementById('InputCuadrado');
 
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);


}

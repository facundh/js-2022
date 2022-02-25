
function alturaTriangulo(){
    const ladoValor = document.getElementById('ladoTriangulo')
    const ladoValue = ladoValor.value;
    const lado1Valor = document.getElementById('lado1Triangulo')
    const lado1Value = lado1Valor.value;
    const baseValor = document.getElementById('baseTriangulo')
    const totalBase = baseValor.value;
    if(ladoValue != lado1Value){
        alert('Lados distintos')
    } 



    if(ladoValue == lado1Value){
        const totalLado = ladoValue * lado1Value;
        const BaseTotal = (totalBase * totalBase )/ 4;
        const resta = totalLado - BaseTotal;
        const total = Math.sqrt(resta);
       document.write(total); 
    
    }
   
}
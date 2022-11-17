 function mezcla(izquierda, derecha){
    let i = 0;
    let j = 0;
    let resultados = [];

    while(i < izquierda.length || j < derecha.length){
        if (i === izquierda.length){
            resultados.push(derecha[j]);
            ++j;
        }
        else if(j === derecha.length || izquierda[i] <= derecha[j]){
            resultados.push(izquierda[i]);
            ++i;
        }
        else{
            resultados.push(derecha[j]);
            ++j;
        }
    }

    return resultados;
 }

 let datos1 = [2, 4, 5, 7];
 let datos2 = [1, 2, 3, 6];

 let resultado = mezcla(datos1, datos2);
 console.log(resultado);
 console.log(resultado.length);
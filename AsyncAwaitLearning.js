/*ASYNC / AWAIT */

/*
 O async/await ajuda a controlar o fluxo do código assíncrono de uma forma que parece síncrona

 Com o async/await, você pode pausar a execução de um bloco de código enquanto espera que uma operação assíncrona seja concluída,
sem interromper o restante do programa. 

 Isso torna o código mais legível e mais fácil de manter, 
pois você pode expressar a lógica em uma ordem sequencial, mesmo que as operações sejam assíncronas.

 
  O async/await é uma abordagem mais moderna e legível para lidar com operações assíncronas. 
Ele foi introduzido no ECMAScript 2017 (ES8) e é construído em cima das Promises, 
mantendo o código mais estruturado e parecido com código síncrono.

 async/await é especialmente útil quando você tem várias operações assíncronas a serem realizadas em sequência, 
pois torna o código mais parecido com o estilo de programação síncrona, o que pode facilitar a leitura e a manutenção do código. 
Isso é especialmente benéfico em situações em que você precisa esperar a conclusão de uma operação antes de prosseguir para a próxima.
*/

/*
SINTAXE:
 1.ASYNC: 
async é uma palavra-chave que pode ser usada para declarar uma função como assíncrona. 
Quando uma função é declarada como async, ela sempre retorna uma Promise. 
Isso permite que a função seja executada de forma assíncrona e
use a palavra-chave await para aguardar a resolução de Promises dentro dela.

Exemplo:

async function minhaFuncaoAssincrona() {
    // código assíncrono aqui
}


2.AWAIT: 
A palavra-chave await só pode ser usada dentro de funções declaradas como async. 
Ela é usada para aguardar a conclusão de uma Promise. 
Quando await é usado em uma Promise, ele pausa a execução da função até que a Promise seja resolvida ou rejeitada.
O valor resolvido da Promise é então retornado.

Exemplo:

async function esperar() {
    let resultado = await minhaPromise;
    console.log(resultado);
}

Neste exemplo, a função esperar aguarda a resolução da Promise minhaPromise e, 
em seguida, imprime o valor resolvido no console.


3.Tratamento de erros (try/catch): 
Você também pode usar try...catch com funções async/await para lidar com erros de forma mais elegante
e legível do que com .then() e .catch().

 O bloco try é utilizado para monitorar um conjunto de instruções, 
onde se espera que ocorram erros, enquanto o bloco catch é empregado para capturar 
e gerenciar esses erros, caso eles ocorram.

 Se ocorrer uma exceção dentro do bloco try, a execução do código dentro do try é interrompida imediatamente, 
e o controle passa para o bloco catch.

Exemplo:

async function manipularErro() {
    try {
        let resultado = await minhaPromise;
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

Neste exemplo, qualquer erro lançado durante a execução da Promise será capturado pelo bloco catch e tratado.

*/

/*------------------------------------------------------------------------------------------------------------------------------------------*/
/*VEJA OS EXEMPLOS ABAIXO*/




// /*Exemplo 01: Aguardando uma Promise*/

// /*Suponha que você tenha uma função que retorna uma Promise e você deseja esperar a resolução da Promise usando async/await.*/

// // Função que retorna uma Promise
// function aguardarTempo(ms) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Tempo expirado!");
//         }, ms);
//     });
// }

// // Função assíncrona que espera a resolução da Promise
// async function esperar() {
//     console.log("Começou a esperar...");
//     const resultado = await aguardarTempo(2000);
//     console.log(resultado);
//     console.log("Fim da espera!");
// }

// // Chamando a função assíncrona
// esperar();

// /*Neste exemplo, a função esperar aguarda a resolução da Promise retornada por aguardarTempo. 
// O código dentro da função assíncrona é executado de forma sequencial.*/






// /*Exemplo 02: Tratamento de erros*/

// // Função que retorna uma Promise que é rejeitada após um atraso
// function lancarErro() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Algo deu errado!");
//         }, 1000);
//     });
// }

// // Função assíncrona que trata erros
// async function manipularErro() {
//     try {
//         console.log("Iniciando...");
//         await lancarErro();
//     } catch (erro) {
//         console.error("Erro capturado:", erro);
//     } finally {
//         console.log("Fim do processo.");
//     }
// }

// // Chamando a função assíncrona
// manipularErro();

// /*Neste exemplo, a função manipularErro espera a resolução da Promise retornada por lancarErro. 
// Se a Promise for rejeitada, o erro é capturado e tratado no bloco catch. 
// O bloco finally é executado independentemente de a Promise ser resolvida ou rejeitada.*/





// /*EXEMPLO 3*/

// console.log("Inicio")
// let tempo = 3000

// let promise = new Promise ((resolve, reject)=>{
//     let resultado = true

//     setTimeout(()=>{
//         if(resultado){
//             resolve("Deu bom meu bom!")
//         }else{
//             reject("Deu ruim meu caro!")
//         }
//     },tempo)

// })

// /* A Promise espera por um determinado período de tempo (especificado pela variável tempo) e 
// depois decide se resolve ou rejeita com base na condição resultado.

// Se resultado for true após o tempo determinado, a Promise é resolvida com a mensagem "Deu bom meu bom!" usando resolve().
// Se resultado for false após o tempo determinado, a Promise é rejeitada com a mensagem "Deu ruim meu caro!" usando reject().*/

// let temporal = async ()=>{

//     for(let i = 0; i< 10; i++){
//         await new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log(i);
//                 resolve()
//         },1000)    
//         })
        
//     }
// }

// /*Este código pausa a execução da função temporal até que a execução da Promise dentro do loop seja concluída. 
// Então, a Promise é criada em cada iteração do loop, aguardando 1 segundo antes de imprimir um número de 0 a 9 no console. 
// Só após a finalização da promise, que a função Temporal, continua e finaliza a execução.

// O uso de uma Promise e await garante que o atraso seja aplicado entre as impressões 
// e que o próximo número só seja impresso após a resolução da Promise de cada iteração do loop. */

// let sucessoPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//     let resultado = true

//     setTimeout(()=>{
//         if (resultado) {
//             resolve("Sucesso =)")
//         } else {
//             reject("Sem sucesso =(")
//         }
//     },tempo)

// })}

// /* Nesta parte do código, a criação da Promise esta encapsulada em uma função chamada sucessoPromise(),
// funciona semelhante a prmeira parte, a diferença aqui, é que ela está dependendo de ser chamada explicitamente 
// pela função sucessoPromise(), no caso da outra promise, está sendo executada direto, sem depender de uma função.*/


// let Espera = async ()=>{
//     try {
//         let resp = await promise
//         console.log(resp)
//         await temporal()
//         // console.log(contando)
//         let sucessResp = await sucessoPromise()
//         console.log(sucessResp)
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// /* Nesta parte do código a função assíncrona chamada Espera. Ela faz o seguinte:
// Tenta executar uma série de operações assíncronas usando await.
// Primeiro, espera pela resolução da Promise chamada promise e, em seguida, imprime o resultado no console.
// Em seguida, chama a função temporal() usando await, que gera uma contagem de 0 à 9 impressa no console (comentada no código).
// Depois, chama a função sucessoPromise() usando await e imprime o resultado no console.
// Se ocorrerem erros em qualquer uma das etapas, eles são capturados no bloco catch e uma mensagem de erro é impressa no console.
// Essa função Espera coordena várias operações assíncronas e lida com erros caso eles ocorram durante a execução dessas operações.
// */

// Espera().then(()=>{
//     setTimeout(()=>console.log("Fim"),tempo)

// })

// /*Chama a função Espera() para realizar operações assíncronas.
// Após a conclusão, espera um período de tempo especificado e, em seguida, imprime "Fim" no console.*/



// /*RESUMINDO:

// Este código realiza uma série de operações assíncronas, usando Promises e await.
// Inicialmente, cria uma Promise que resolve ou rejeita após um período de tempo. 
// Em seguida, uma função assíncrona temporal é definida, que cria uma Promise a cada iteração de um loop, 
// imprimindo números no console com atraso.

// Há também uma função sucessoPromise semelhante à primeira Promise, 
// mas encapsulada em uma função. A função Espera coordena essas operações assíncronas e lida com erros usando try...catch. 
// Finalmente, Espera é chamada, seguida por um atraso, após o qual "Fim" é impresso no console.
// */
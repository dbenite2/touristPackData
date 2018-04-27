const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const readline = require('readline-sync');
const {WatsonMLScoringEndpoint} = require("watson-ml-model-utils");

// Lectura de variables necesarias para la prediccion
var genero = readline.question("Ingrese la edad: ");
var edad = readline.question("Ingrese los dias: ");
var dias = readline.question("Ingrese el presupuesto: ")


const features = ['Edad','TIempo hospedaje','Presupuesto'];//columnas necesarias para el modelo de hospedaje
// Se ingresan las credenciales necesarias para el modelo a usar
// segun se requiera, se cambian los parametros modelId y deploymentId
let respuesta = new WatsonMLScoringEndpoint(features, {
    // servicePath: 'https://ibm-watson-ml.mybluemix.net',
    // username: '2681d1b6-198b-4376-9bfd-126bab66dae9',
    // password: '20374130-81e0-4eb7-bee2-7073e96c15f0',
    // instanceId: 'a4e381c0-07f2-48fa-b369-bdf077784483',
    modelId: '4edf7b22-3a3b-47df-a92a-78c1317758ed',
    deploymentId: 'f9de103e-f15c-4084-9c4f-ea18d8346778'
  });
const values = [10,21,6]; // ejemplo para arreglo fijo
const valor = [parseInt(genero),parseInt(edad),parseInt(dias)]; // se genera el arreglo con los datos (que se castean a int)
console.log(valor);
// Se llama al modelo y se realiza la prediccion
// TODO: Segun se requiera, hay que utilizar la tabla de conversion para devolver un resultado util para el usuario o chatbox
respuesta.score(valor)
.then(response =>  console.log(response.prediction))
.catch(err => console.log(err));

// Credenciales para el modelo de presupuesto
// let endpoint = new WatsonMLScoringEndpoint(features, {
//     servicePath: 'https://ibm-watson-ml.mybluemix.net',
//     username: '2681d1b6-198b-4376-9bfd-126bab66dae9',
//     password: '20374130-81e0-4eb7-bee2-7073e96c15f0',
//     instanceId: 'a4e381c0-07f2-48fa-b369-bdf077784483',
//     modelId: 'a981253e-3cb5-4872-9203-d72db1ae6173',
//     deploymentId: '838842a5-0ad6-4b3f-8727-9dc5c20bb6cc'
//   });

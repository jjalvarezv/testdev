import {cleanConsole, createAll} from './data';
import {limpiarUndefined} from './example-1';

const companies = createAll();

// eslint-disable-next-line no-unused-vars
function validaNombres(listaCompanies) {
  // Llamado a funcion de ejm1
  limpiarUndefined(listaCompanies);
  let contCompanies = 0;
  let contNames = 0;
  let contLastNames = 0;
  // eslint-disable-next-line guard-for-in
  for (const i in listaCompanies) {
    // Validamos que la primera letra coincida con una letra mayuscula
    if (!/^[A-Z]/.test(listaCompanies[i].name)) {
      contCompanies = contCompanies + 1; // Si no coincide agregamos a contador
    }
    const Usuarios = Object.values(listaCompanies[i].users);
    // Iteramos sobre cada Usuario y validamos que la primera letra coincida con una mayuscula
    for (const usuario of Usuarios) {
      if (!/^[A-Z]/.test(usuario.firstName) && usuario.firstName != '') {
        contNames += 1;
      }
      if (!/^[A-Z]/.test(usuario.lastName) && usuario.lastName != '') {
        contLastNames += 1;
      }
    }
  }
  // Validamos que los contadores esten en 0 para hallar los errores
  if (contCompanies == 0 && contLastNames== 0 && contNames == 0) {
    return 'Felicidades, la validacion ha sido completada';
  } else {
    if (contCompanies != 0) return 'La validacion en Company ha sido rechazada';
    if (contNames != 0) return 'La validacion en los Nombres de Usuario ha sido rechazada';
    if (contLastNames != 0) return 'La validacion en los Apellidos de Usuario ha sido rechazada';
  }
}


cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', 'validaNombres(companies)');

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".

import {createAll, cleanConsole} from './data';
const companies = createAll();

// eslint-disable-next-line no-unused-vars
export function limpiarUndefined(listaCompanies) {
  // Recorro la lista de objetos de las compañias
  // eslint-disable-next-line guard-for-in
  for (const i in listaCompanies) {
    // Capitalizo los nombres de las compañias
    listaCompanies[i].name = capitalize(listaCompanies[i].name);
    const company = Object.values(listaCompanies[i].users);

    // Recorro la lista de objetos de users
    for (const usuario of company) {
      // Reeplazo los valores undefined en cada usuario
      if (usuario.firstName === undefined) {
        usuario.firstName = '';
      }
      if (usuario.lastName === undefined) {
        usuario.lastName = '';
      }
      if (usuario.firstName != '') {
        // Capitalizo la primera letra de las nombres que no son undefined
        usuario.firstName = capitalize(usuario.firstName);
      } else if (usuario.lastName != '') {
        // Capitalizo la primera letra de las apellidos que no son undefined
        usuario.lastName = capitalize(usuario.lastName);
      }
    }
  }
  // Ordeno segun la usersLength
  listaCompanies.sort((a, b) => {
    if (a.usersLength > b.usersLength) return -1;
    else if (a.usersLength < b.usersLength) return 1;
    else return 0;
  });
  return (listaCompanies);
}

// Funcion para cambiar colocar mayuscula la primera letra
function capitalize(palabra) {
  return palabra[0].toUpperCase() + palabra.slice(1);
}

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', 'limpiarUndefined(companies)');

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.

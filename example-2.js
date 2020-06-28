import {cleanConsole, createAll} from './data';
const companies = createAll();

// eslint-disable-next-line no-unused-vars
function deleteHasCar(listaCompanies, hasCar) {
  // eslint-disable-next-line guard-for-in
  for (const i in listaCompanies) {
    // Nueva lista para agregar los elementos
    const newList =[];
    const Usuarios = Object.values(listaCompanies[i].users);
    // Itero sobre cada user
    for (const usuario of Usuarios) {
      if (usuario.car == hasCar) {
        // Agrego elementos a mi lista
        newList.push(usuario);
      }
    }
    // Asigno elementos compatibles a users
    listaCompanies[i].users = newList;
  }
  return listaCompanies;
}

cleanConsole(2, companies);
console.log('---- EXAMPLE 2 --- ', 'deleteHasCar(companies, true)');

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et le
// booléen "hasCar". Pour chaque "company" vous devez garder uniquement les
// "users" dont la valeur de l'attribut "car" est égal au paramètre de la
// fonction "hasCar" et l'attribut "usersLength" doit renseigner le nombre de
// "users" correspondant au paramètre "hasCar".

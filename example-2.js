import {cleanConsole, createAll} from './data';
const companies = createAll();

function ejm2(listaCompanies, hasCar) {
  // eslint-disable-next-line guard-for-in
  for (const i in listaCompanies) {
    const Usuarios = Object.values(listaCompanies[i].users);
    const id = 0;
    // Recorro la lista de objetos de users
    for (const usuario of Usuarios) {
      if (usuario.car != hasCar) {
        delete usuario.firstName;
        delete usuario.lastName;
        delete usuario.age;
        delete usuario.car;
        delete usuario.id;

        // remove object
        Usuarios.splice(id, 1);
        id = id+1;
      }
    }
  }
  return listaCompanies;
}

cleanConsole(2, companies);
console.log('---- EXAMPLE 2 --- ', ejm2(companies, true));

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

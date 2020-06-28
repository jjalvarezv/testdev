import {cleanConsole, createAll} from './data';
const companies = createAll();

// eslint-disable-next-line no-unused-vars
export function mergeUsers(listaCompanies) {
  const newUsers = [];
  // eslint-disable-next-line guard-for-in
  for (const i in listaCompanies) {
    const Usuarios = Object.values(listaCompanies[i].users);
    const companyActual = listaCompanies[i].name;

    for (const usuario of Usuarios) {
      // Se agrega la propiedad company a cada user
      usuario.company = companyActual;
      newUsers.push(usuario);
    }
  }
  // Ordeno segun la edad
  newUsers.sort((a, b) => {
    if (a.age > b.age) return -1;
    else if (a.age < b.age) return 1;
    else return 0;
  });
  return newUsers;
}

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', 'mergeUsers(companies)');

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest).

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et regroupant
// tous les "users" de toutes les "companies" dans un seul tableau. Chaque "user"
// doit avoir un nouvel attribut "company" ayant pour valeur le nom de la "company"
// à laquelle il appartient. Les "users" doivent être triés en fonction de leur
// âge (du plus vieux au plus jeune).

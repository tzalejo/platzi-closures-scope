"use strict";
pi = 3.1415; // declaramos y asignamos, en modo estricto esto genera error
console.log(pi);

function myFunction() {
  "use strict";
  return (pi = 2.1415); // tmb genera error
}

console.log(myFunction());

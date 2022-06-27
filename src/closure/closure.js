function greeting() {
  let usserName = "Alejandro";

  function displayUserName() {
    return `Hola ${usserName}, ¿como estas?`;
  }

  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

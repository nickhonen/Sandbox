// csbin http://csbin.io/oop/nickan
//Make a pokedex or something or a chess game and EXPERIMENT

function makePerson(name, age) {
	let emptyObj = {
    name: name,
    age: age
  } 
  return emptyObj;
}

const vicky = makePerson('Vicky', 24);

console.log(vicky.name);
console.log(vicky.age);
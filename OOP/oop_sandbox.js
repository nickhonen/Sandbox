REMINDER that classes still use prototypes and shit from ES5 as their logic

// 1:Basic Literals

const pokemon = { 
    name: "Pikachu",
    type: "electric",
    generation: 1,
    entry: function() {
        return `${this.name} is a/an ${this.type} type Pokemon, introduced in
        Generation ${this.generation}.`
    }
};

const pokemon2 = { 
    name: "Cyndaquil",
    type: "fire",
    generation: 2,
    entry: function() {
        return `${this.name} is a/an ${this.type} type Pokemon, introduced in
        Generation ${this.generation}.`
    }
};

// console.log(pokemon.entry());
// console.log(Object.values(pokemon2));

2: Constructor

//Constructor Function
function Pokemon(name, type, generation) {
    this.name = name; 
    this.type = type;
    this.generation = generation;
// Below is a good example of when to use a prototype method instead of a constructor
    this.entry = function() {
        return `${this.name} is a/an ${this.type} type Pokemon, introduced in
        Generation ${this.generation}.`;
    }
}
// Instantiate Objects with Constructor
const pokemon1 = new Pokemon("Pikachu", "electric", 1);
const pokemon2 = new Pokemon("Cyndaquill", "fire", 2);

console.log(pokemon1.entry());
console.log(pokemon2);

3: Prototypes

/*If we want a name, type, generation with every pokemon but we dont want an 
entry with every pokemon, we might want to make the entry function part of the 
prototype instead of the constructor */


function Pokemon(name, type, generation) {
    const generations = [1998, 2000, 2003, 2007, 2011, 2013, 2016, 2019]
    this.name = name; 
    this.type = type;
    this.generation = generation;
}
// Returns makeshift pokedex entry
    Pokemon.prototype.entry = function() {
        return `${this.name} is a/an ${this.type} type Pokemon, introduced in
        Generation ${this.generation}.`;
    }
// Returns how many years since the pokemon was released (in NA)
    Pokemon.prototype.getAge = function() {
        const generations = [1998, 2000, 2003, 2007, 2011, 2013, 2016, 2019]
        const year = new Date().getFullYear();
        const difference = year - generations[this.generation - 1];
        return `${this.name} is ${difference} years old.`;
    }
// Changes type of pokemon
    Pokemon.prototype.changeType = function(newType) {
        this.type = newType;
        this.updatedType = true;
    }

// Evolve pokemon TBD
    Pokemon.prototype

const pokemon1 = new Pokemon("Pikachu", "electric", 1);
const pokemon2 = new Pokemon("Cyndaquill", "fire", 2);
const pokemon3 = new Pokemon("Oshawott", Water, 5);

console.log(pokemon1.entry());
pokemon1.changeType("Fairy/Electric");
console.log(pokemon1.entry());
console.log(pokemon1.getAge());

4: Inheritance

// Constructor
function Pokemon(name, type, generation) {
    const generations = [1998, 2000, 2003, 2007, 2011, 2013, 2016, 2019]
    this.name = name; 
    this.type = type;
    this.generation = generation;
}
// Returns makeshift pokedex entry
    Pokemon.prototype.entry = function() {
        return `${this.name} is a/an ${this.type} type Pokemon, introduced in
        Generation ${this.generation}.`;
    }

// NewPokemon Constructor
function NewPokemon(name, type, generation, game) {
    Pokemon.call(this, name, type, generation)
    this.game = game;
}

// Inherit prototype
NewPokemon.prototype = Object.create(Pokemon.prototype);

// Instantiate new NewPokemon Object
const newpokemon1 = new NewPokemon("Yveltal", "Dark/Flying", 6, "Pokemon X/Y");

// Use the NewPokemon Constructor
NewPokemon.prototype.constructor = NewPokemon;

5: Object.create(prototype for object)

    const pokemonProtos = {
        entry: function() {
            return `${this.name} is a/an ${this.type} type Pokemon, introduced in
            Generation ${this.generation}.`;
        }
        getAge: function() {
            const generations = [1998, 2000, 2003, 2007, 2011, 2013, 2016, 2019]
            const year = new Date().getFullYear();
            const difference = year - generations[this.generation - 1];
            return `${this.name} is ${difference} years old.`;
        }
    }

    const pokemon1 = Object.create(pokemonProtos);

/* If I wanted to have writable, enumerable. configurable attribute options
Object.create() would be good */

let footballer = Object.create(Object.prototype,
    {
      name:{
        value: 'Lio Messi',
        configurable: false,
        writable: false,
        enumerable: false
      },
      club:{
        value: 'FC Barcelona',
        configurable: true,
        writable: true,
        enumerable: true
      }
    });
  console.log(footballer.name)    //Output: Lio Messi
  console.log(footballer.club)    //Output: FC Barcelona
class Pokemon {
    constructor(name, type, generation) {
        this.name = name;
        this.type = type;
        this.generation = generation;
    }

    entry() {
        return `${this.name} is a/an ${this.type} type Pokemon, introduced in
        Generation ${this.generation}.`;
    }

// Returns how many years since the pokemon was released (in NA)
    getAge() {
        const generations = [1998, 2000, 2003, 2007, 2011, 2013, 2016, 2019]
        const year = new Date().getFullYear();
        const difference = year - generations[this.generation - 1];
        return `${this.name} is ${difference} years old.`;
    }
// Changes type of pokemon
    changeType(newType) {
        this.type = newType;
        this.updatedType = true;
    }

// static function that exists regardless of if Object is created
// Call directly on class, not object
    static nicksFavPokemon() {
        return 'Phanpy';
    }
// Evolve pokemon method TBD
}

//calling static object
console.log(Pokemon.nicksFavPokemon());

const pokemon1 = new Pokemon('Pikachu', 'Electric', 1);
console.log(pokemon1);
console.log(pokemon1.getAge());
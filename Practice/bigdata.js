
//csbin link: http://csbin.io/cs-prep-big-data/20001


// chal 3
let mapped3 = bitcoinData.map(a => [a["price(USD)"], a["date"]]);
let flat = mapped.flat();
console.log(flat)
  

let mapped = bitcoinData.map(a => ({date: a.date, 'price(USD)': a['price(USD)'] }))
console.log(mapped)

// chal 4
// nicks chal 4 solution
let mappedEV = bitcoinData.map(a => {
   if (a['exchangeVolume(USD)'] != 0) {
     return a;
   }
})

let goodMappedEV = mappedEV.filter(obj => obj !== undefined);

console.log(goodMappedEV);

// An's chal 4 solution
let notDay0 = bitcoinData.filter(function(d){
  if (d['exchangeVolume(USD)'] !== 0){
    return true
  }
} )
console.log(notDay0);


// chal 5
// nick's answer doesnt work 
let allBitcoins = bitcoinData.reduce((a, b) => a.generatedCoins + b.generatedCoins);
console.log(allBitcions);

const genCoins = bitcoinData.reduce(function(a,b){
  return {generatedCoins: a.generatedCoins + b.generatedCoins}
})
console.log(genCoins);

// chal 6
const daysOver100 = bitcoinData.filter(function(d){
  if (d['price(USD)'] > 100){
    return true
  }
})
const totalDays = daysOver100.length
console.log(totalDays);

// chal 7
const transFees = bitcoinData.reduce(function(a,b){
  return {fees: a.fees + b.fees}
})

const averageFees = Math.floor(transFees.fees / bitcoinData.length)
console.log(averageFees);


// bonus chal 1
function dayMapper(arr, prop1, prop2){
  // return an array of objects
  // 	each property in the object is the prop1 or prop2
  
  let mapped = arr.map(a => ({prop1: a[prop1], prop2: a[prop2] }))

  return mapped;
}

console.log(dayMapper(bitcoinData,"txCount","fees"))

// bonus chal 2
function averageValueOf(arr, property) {
  //input: bitcoinData all numerical values
  // Question: why were the above solutions working with dot notation, but bonus challenges in functions need to be brackets
const numericalValue = arr.reduce( function(a, b) {
  return a + b[property];
}, 0); //needed to pass an initial value in to get this to work with objects, see mdn for more details
  

  return Math.floor(numericalValue / arr.length);
}


console.log(averageValueOf(bitcoinData, ""));
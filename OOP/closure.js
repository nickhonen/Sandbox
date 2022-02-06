function outer (){
    let counter = 0;
    function incrementCounter (){
        counter ++;
    }
    return incrementCounter;
 }

const timesBy = (n) => {
  function inner(arr) {
   return arr.map(a => a * n);
  };
  return inner;
}

//  function createFunction() {
//     function hello() {
//       console.log("hello world");
//     }
//     return hello;
//   }

// const myFunction = createFunction();
// console.log(myFunction());
//  const myNewFunction = outer();
//  myNewFunction();
//  myNewFunction();
 
const timesBy2 = timesBy(2);
console.log(timesBy2([1, 3, 5]));
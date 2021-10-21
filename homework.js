1. 
for (let key in person3) {
  console.log(person3[key])
};

2.
// Create our Person Prototype (Person class)
class Person {
  constructor(name, age) {
  this.name = name
  this.age = age
}

increment(amount) {
  var birthday = this.age + amount;
  console.log(`${this.name} has had a drastic increase in age and is now ${birthday}`);
 
}
}
const Gamma = new Person("GrandmaJean", 50);
const Papa = new Person("PapaJohn", 64);



// create the printInfo method
console.log(Papa);
console.log(Gamma);
console.log(Gamma.increment(3))

// Create another method for the addAge method

3. /*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    var even = []
    for (let k=0; k< arr.length; k++){
      while (arr[k] % 2 == 0) {
        console.log(splice(even, "even index"))
      }
    }
};
replaceEvens([["Max","Baseball","Reboot","Goku","Trucks","Rodger"]])
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

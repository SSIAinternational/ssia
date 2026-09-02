"useStrict";

/**Exo 1.1 */

function myForEachMessage(nameArray, callback) {
  for (let i = 0; i < nameArray.length; i++) {
    callback(nameArray[i]);
  }
}

function sayHello(name) {
  console.log(`Bonjour ${name}`);
}

myForEachMessage(["gf", "fre", "sde"], sayHello);

/**Exo 1.2 */

function myForEachMultiply(numberArray, callback) {
  for (let i = 0; i < numberArray.length; i++) {
    callback(numberArray[i]);
  }
}

function calcul(number) {
  console.log(number * 5);
}

myForEachMultiply([1, 2, 3, 4, 5], calcul);

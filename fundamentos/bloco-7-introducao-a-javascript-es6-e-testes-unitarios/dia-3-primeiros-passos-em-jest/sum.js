const sum = (n1, n2) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("parameters must be numbers");
  }

  return n1 + n2;
};

const myRemove = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

const myFizzBuzz = (num) => {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
};

const encode = (frase) => {
  let result = frase
    .replaceAll("a", "1")
    .replaceAll("e", "2")
    .replaceAll("i", "3")
    .replaceAll("o", "4")
    .replaceAll("u", "5");

  return result;
};

const decode = (frase2) => {
  let result2 = frase2
    .replaceAll("1", "a")
    .replaceAll("2", "e")
    .replaceAll("3", "i")
    .replaceAll("4", "o")
    .replaceAll("5", "u");

  return result2;
};

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };

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
}

// implemente seus testes aqui
module.exports = {sum, myRemove};
const sum = (n1, n2) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("parameters must be numbers");
  }

  return n1 + n2;
};

module.exports = sum;

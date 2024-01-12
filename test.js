// Immutable
const arr = ["Tamim", "Iqbal", "Maruf"];

// add immutable
const arr2 = [...arr, "Oli"];

// remove immutable
const arr3 = arr.filter((item) => item !== "Iqbal");

console.log(arr);
console.log(arr2);
console.log(arr3);

// console.log(arr);

// Function Curring

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(add(5)(1)(1));

function power2(number, degree) {
  let result = 1;
  for (let i = 0; i < degree; i++) {
    result = result * number;
  }
  return result;
}
console.log(power2(3, 3));

function power3(number, degree) {
  if (degree === 1) {
    return number;
  } else {
    return Math.pow(number, degree);
  }
}
console.log(power3(2, 4));

//-----------------------------------------------------------------

const newArray = [100, 112, 256, 349, 770];
const newArray2 = [72, 86, 113, 119, 265, 445, 892];

const Array = [...newArray, ...newArray2].sort((a, b) => a - b);
console.log(Array);

//------------------------------------------------------------------

const arr2 = [1, 1, 2, 2, 2, 2, 3];
const num = 2;

const newNumber = arr2.filter((item) => item === 2).length;
console.log(newNumber);

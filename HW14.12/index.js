arr = [2, 6, 87, 1, 0, 52, 42, 1, 5, 7];

function splice(index, arr) {
  let x = arr.length;
  for (let i = index; i < x; i++) {
    arr[i] = arr[i + 1];
  }
  //   arr[x - 1] = 0;
  x--;
  console.log(arr);
  return arr;
}
console.log(arr.length);
console.log(splice(2, arr));

function spliceAdd(index, value, arr) {
  let lenght = arr.length;
  for (let i = lenght; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] = value;
  lenght++;
  console.log(arr);
  return arr;
}

console.log(spliceAdd(2, 3, arr));

// function push(value, arr) {
//   let lenght = arr.lenght;
//   if (lenght == lenght) {
//     lenght * 2;
//   }
//   arr[lenght] = value;
//   lenght++;
//   return arr;
// }
// console.log(push(2, arr));

// // function newsplice() {}

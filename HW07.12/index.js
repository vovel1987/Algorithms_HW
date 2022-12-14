const newArr = Array(10000)
  .fill()
  .map(() => Math.round(Math.random() * 2000) - 100);
count = 0;

let count2 = 0;

let start = Date.now();
// console.log(start);

quickSort(newArr, 0, newArr.length - 1);

let end = Date.now();
// console.log(end);

console.log(end - start);
console.log(count);

// console.log(arr);

function quickSort(arr, low, high) {
  if (low < high) {
    let pivotindex = findPivotIndex(arr, low, high);
    quickSort(arr, low, pivotindex - 1);
    quickSort(arr, pivotindex + 1, high);
  }
}
function findPivotIndex(arr, low, high) {
  let pivot = arr[high];
  let pivotindex = low - 1;

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      pivotindex++;
      let tmp = arr[pivotindex];
      arr[pivotindex] = arr[i];
      arr[i] = tmp;
    }
    count++;
  }

  let tmp = arr[pivotindex + 1];
  arr[pivotindex + 1] = arr[high];
  arr[high] = tmp;
  return pivotindex + 1;
}

let start2 = Date.now();
bubbleSort(newArr);
let end2 = Date.now();
console.log(end2 - start2);
console.log(count2);

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length -i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];

        arr[j] = arr[j + 1];

        arr[j + 1] = tmp;
      }
      count2++;
    }
  }

  return arr;
}

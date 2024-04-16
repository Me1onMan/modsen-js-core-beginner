function bubbleSort(arr) {
  let isSwapped;

  do {
    isSwapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Input array:", array);

const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);

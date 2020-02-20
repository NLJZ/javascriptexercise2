// ### Bonus Magic Square:
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15.
// Here's an example:
// 8 1 6
// 3 5 7
// 4 9 2
// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

const magicSquare = arr => {
  let result;
  valArray = [
    arr.slice(0, 3),
    arr.slice(3, 6),
    arr.slice(6, 9),
    [],
    [],
    [],
    [],
    []
  ];
  const sumArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || i == 3 || i == 6) {
      valArray[3].push(arr[i]);
    } else if (i == 1 || i == 4 || i == 7) {
      valArray[4].push(arr[i]);
    } else if (i == 2 || i == 5 || i == 8) {
      valArray[5].push(arr[i]);
    }
    if (i == 0 || i == 4 || i == 8) {
      valArray[6].push(arr[i]);
    }
    if (i == 2 || i == 4 || i == 6) {
      valArray[7].push(arr[i]);
    }
  }

  for (let i = 0; i < valArray.length; i++) {
    let sum = valArray[i].reduce((a, b) => a + b, 0);
    if (sum !== 15) {
      result = false;
      break;
    } else {
      result = true;
    }
  }

  console.log(result);
};

magicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2]);
magicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8]);
magicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]);
magicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2]);

// #### Examples:
// [8, 1, 6, 3, 5, 7, 4, 9, 2] -> true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] -> true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] -> false
// [8, 1, 6, 7, 5, 3, 4, 9, 2] -> false

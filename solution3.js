// ### Bonus Magic Square:
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15.
// Here's an example:
// 8 1 6
// 3 5 7
// 4 9 2
// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

const magicSquare = arr => {};

magicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2]);
magicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8]);
magicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]);
magicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2]);

// #### Examples:
// [8, 1, 6, 3, 5, 7, 4, 9, 2] -> true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] -> true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] -> false
// [8, 1, 6, 7, 5, 3, 4, 9, 2] -> false

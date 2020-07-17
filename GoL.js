//Presenting, The "Game of Life"! Created by Shawn Mathew on the 17th of July,2020.

var i, j, p, q, c, x, count;

//Finds the number of living neighbours.
function Scanner(i, j, Arr, size) {
  //We need the size to prevent it from going out of bounds.
  count = 0;
  //The below code does (i-1,j-1), (i+1,j+1) and so on.
  for (p = -1; p <= 1; p++) {
    for (q = -1; q <= 1; q++) {
      if (
        i + p >= 0 &&
        j + q >= 0 &&
        i + p < size &&
        j + q < size &&
        (p || q)
      ) {
        if (Arr[i + p][j + q] == "x") {
          count++;
        }
      }
    }
  }
  //    console.log(count);
  return count;
}

//Shows the content of the Array passed into it.
function display(Arr, size) {
  for (i = 0; i < size; i++) {
    console.log(Arr[i]);
  }
}

//Matrix creator - returns a fresh matrix.
function Macreate(size) {
  var Matrix = new Array(size);
  for (i = 0; i < size; i++) {
    Matrix[i] = new Array(size);
  }
  return Matrix;
}

//Input array particulars:
const prompt = require("prompt-sync")();
const _ = require("lodash");

let dimen = prompt("Enter size:");

//Initialising the input array
var I = Macreate(dimen);

for (i = 0; i < dimen; i++) {
  for (j = 0; j < dimen; j++) {
    I[i][j] = prompt("Enter elements ('x' and '-'): "); //Any letter other than 'x' is considered '-'.
  }
}

console.log("Here is the input array:");
display(I, dimen);

var O = Macreate(dimen);  //Output array

for (i = 0; i < dimen; i++) {
  for (j = 0; j < dimen; j++) {
    c = Scanner(i, j, I, dimen);
    if (c == 3) {
      O[i][j] = "x";
    } else if (c > 3) {
      O[i][j] = "-"; //Overcrowding
    } else if (c < 2) {
      O[i][j] = "-"; //Loneliness
    } else {
      x = I[i][j];  //Copying from I to O.
      O[i][j] = x;
    }
  }
}

console.log("Here is the output array:");
display(O, dimen);

// Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.

// - Numbers in strings can be negative, but will all be base-10 integers.
// - Negative numbers may directly follow another number.
// - The hyphen or minus character ("-") does not only occur in numbers.
// - Arrays may be ragged or empty.
// Example
//sum(["1", "five", "2wenty", "thr33"]) ➞ 36

// sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

// sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759

const sum = (arr) => {
  // Flat the array with the depth of 2, for this example, can be Infinity
  let flattenArr = arr.flat(2);
  let cleanedArrInt = [];
  for (let i = 0; i < flattenArr.length; i++) {
    // Clean the flattened array, remove NaNs
    if (parseInt(flattenArr[i]) == flattenArr[i]) {
      cleanedArrInt.push(flattenArr[i]);
    } else {
      // Loop through the array to return the unclean integers eg. thr33 => 33
      for (let j = 0; j < flattenArr[i].length; j++) {
          
      }
    }
  }
};

sum(["1", "five", "2wenty", "thr33"]);
sum([
  ["1X2", "t3n"],
  ["1024", "5", "64"],
]);
sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"], "-1s0"]]);

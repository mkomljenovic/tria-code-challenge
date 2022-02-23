// Write flattenedArray function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.

// - Numbers in strings can be negative, but will all be base-10 integers.
// - Negative numbers may directly follow another number.
// - The hyphen or minus character ("-") does not only occur in numbers.
// - Arrays may be ragged or empty.
// Example
//sum(["1", "five", "2wenty", "thr33"]) ➞ 36

// sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

// sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759

const sum = (arr) => {
  // Flat the array with the depth, it can range from empty to Infinity, for this task I will use 5, but it is adjustable
  let flattenedArray = arr.flat(5);
  // Initialize clean array
  let cleanedArray = [];
  let stringedChars = "";
  let gatherAllChars = [];
  let sumAllChars = 0;
  // Loop through the flatten array to find the clean numbers first
  for (let i = 0; i < flattenedArray.length; i++) {
    if (parseInt(flattenedArray[i]) == flattenedArray[i]) {
      // Push the clean numbers from all arrays
      cleanedArray.push(flattenedArray[i]);
    } else {
      // All the "unclean" numbers or empty strings goes here to loop once again
      for (let j = 0; j < flattenedArray[i].length; j++) {
        // charCodeAt will check if the "unclean" numbers are from 0-9 (Base-10) and
        // concat them to stringedChars variable
        // charCodeAt === 48 is 0 and 57 is 9
        if (
          flattenedArray[i].charCodeAt(j) >= 48 &&
          flattenedArray[i].charCodeAt(j) <= 57
        ) {
          // check if the number contains minus in it 45 === "-" and add it to stringed characters
          if (flattenedArray[i].charCodeAt(j - 1) === 45) {
            stringedChars += flattenedArray[i][j - 1];
          }
          stringedChars += flattenedArray[i][j];
        }
        // If all the other characters are present, push them to stringedChars
        else if (
          flattenedArray[i].charCodeAt(j) < 48 ||
          flattenedArray[i].charCodeAt(j) > 57
        ) {
          cleanedArray.push(stringedChars);
          stringedChars = "";
        }
      }
      cleanedArray.push(stringedChars);
      stringedChars = "";
    }
  }
  // Gather all cleaned characters
  for (let i = 0; i < cleanedArray.length; i++) {
    if (cleanedArray[i] === "") {
      continue;
    }
    // Push them to the array with clean numbers
    gatherAllChars.push(parseInt(cleanedArray[i]));
  }
  // Sum all chars
  for (let i = 0; i < gatherAllChars.length; i++) {
    sumAllChars += gatherAllChars[i];
  }
  return sumAllChars;
};

console.log(sum(["1", "five", "2wenty", "thr33"]));
console.log(
  sum([
    ["1X2", "t3n"],
    ["1024", "5", "64"],
  ])
);
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"], "-1s0"]]));

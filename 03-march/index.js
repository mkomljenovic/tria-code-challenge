// Write a function named sortByNumbers() which will accordingly sort the arrays, recursively.
// Test cases will contain integers,float and letters.
// Example


const sortByNumbers = (array) => {
    // flat the array
    const sortedArray = []
    let arr = [...array].flat(Infinity).sort()
    array.forEach((e,i,a) => {
        let arrLen = e.length
        a[i].splice(0, a[i].length)
        console.log('a[i] :>> ', a[i]);
    });
    console.log('sortedArray :>> ', sortedArray);
    console.log('a :>> ', a);
}

sortByNumbers([
    [1, 2, 4, 3, "a", "b"],
    [6, "c", 5], [7, "d"],
    ["f", "e", 8]
  ]) 
  // ➞ [
  //   [1, 2, 3, 4, 5, 6],
  //   [7, 8, "a"],
  //   ["b", "c"], ["d", "e", "f"]
  // ]
  
//   sortByNumbers([
//     [1, 2, 4.4, "f", "a", "b"],
//     [0], [0.5, "d","X",3,"s"],
//     ["f", "e", 8],
//     ["p","Y","Z"],
//     [12,18]
//   ]) 
  // ➞ [
  //   [0, 0.5, 1, 2, 3, 4.4],
  //   [8],
  //   [12, 18, "X", "Y", "Z"],
  //   ["a", "b", "d"],
  //   ["e", "f", "f"],
  //   ["p", "s"]
  // ]
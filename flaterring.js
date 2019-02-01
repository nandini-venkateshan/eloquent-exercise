let arrays = [[1, 2, 3], [4, 5], [6]];
let modified_array=arrays.reduce((acc,value) => acc.concat(value));
console.log(modified_array);
// Your code here.
// → [1, 2, 3, 4, 5, 6]
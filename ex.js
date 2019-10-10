// Your code here.
function countBs(arg) {
  let count = 0
for(let i = 0; i < arg.length; i++) {
if(arg[i] === 'B') count++
}
return count
}

function countChar(arg, val) {
let count = 0
for(let i = 0; i < arg.length; i++) {
if(arg[i] === val) count++
}
return count
}



console.log(countBs("BBBBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4



// Your code here.
function range(a, b, c) {
    let array = []
    if(c) {
    for (let i = a; i >= b; i--) {
    array.push(i)
    }
    }
      else {
    for (let i = a; i <= b; i++) {
    array.push(i)
    }
    }
      return array
    }
    
    function sum(a) {
    let res = a.reduce((acc,val) => acc+val)
    return res
    }
    
    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55


    function reverseArray(arg) {
        let array = []
        arg.map(item => array.unshift(item))
        return array
        }
// Your code here.
function range(start,end,rev) {
   if(rev==-1)
   {
    var ans = [];
    for (let i = start; i >= end; i--) {
        ans.push(i);
    }
    return ans;
   }
  else
  {
      var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
  }
  
}
function sum(ans)
{
  let t=0;
  for(let key in ans)
  {
   t=t+ans[key];
  }
  return t;
}

console.log(range(1, 12));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
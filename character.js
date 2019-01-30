const character = SCRIPTS.map(entry => ({...entry, character: entry.ranges.reduce((acc, range) => acc + (range[1] - range[0]), 0)}));
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = character.filter(s => s.character >= 100);
console.log(map(rtlScripts, s => s.name));
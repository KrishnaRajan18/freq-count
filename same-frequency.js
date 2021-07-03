// add whatever parameters you deem necessary
function sameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freqArray1 = makeFrequency(arr1);
  let freqArray2 = makeFrequency(arr2);

  for (let num of freqArray1.keys()) {
    if (freqArray2.has(num) === false) {
      return false;
    }
    if (freqArray2.get(num) !== freqArray1.get(num)) return false;
  }
  return true;
}

function makeFrequency(str) {
  str = numberToArray(str);
  let frequency = new Map();
  for (let val of str) {
    let count = frequency.get(val) || 0;
    frequency.set(val, count + 1);
  }
  return frequency;
}
function numberToArray(number) {
  let array = number.toString().split(""); //stringify the number, then make each digit an item in an array
  return array.map(x => parseInt(x)); //convert all the items back into numbers
}

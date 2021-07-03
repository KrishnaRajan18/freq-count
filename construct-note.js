// add whatever parameters you deem necessary
function constructNote(message, letter) {
  if (letter.length < message.length) return false;
  const freqMessage = makeFrequency(message);
  const freqLetter = makeFrequency(letter);
  if (freqLetter.size < freqMessage.size) return false;
  for (let letter of freqMessage.keys()) {
    if (!freqLetter.get(letter)) return false;
    if (freqMessage.get(letter) > freqLetter.get(letter)) return false;
  }
  return true;
}
function makeFrequency(str) {
  let frequency = new Map();
  for (let val of str) {
    let count = frequency.get(val) || 0;
    frequency.set(val, count + 1);
  }
  return frequency;
}

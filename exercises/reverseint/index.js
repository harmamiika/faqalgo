// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString();
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  //   if (n < 0) {
  //     return parseInt(reversed * -1);
  //   }

  return Math.sign(n) * parseInt(reversed);
}

module.exports = reverseInt;

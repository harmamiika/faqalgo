// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let index = 1; index <= n; index++) {
    console.log(`${'#'.repeat(index)}${' '.repeat(n - index)}`);
  }
}

module.exports = steps;

steps(7);

//ads

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//       let stair = '';

//       for (let column = 0; column < n; column++) {
//         if (column <= row) {
//           stair += '#';
//         } else {
//           stair += ' ';
//         }
//       }

//       console.log(stair);
//     }
//   }

// REKURSIIVINEN FUNKTIO
// FUNKTIO joka kutsuu itseään lopussa muuttuneella arvolla, alussa tekee return chekin
// eli käytännössä looppi

// function steps(n, row = 0) {
//     if (n === row) {
//         return
//     }

//     if (n === stair.lenght) {
//         console.log(stair)
//         steps(n, row + 1)
//         return
//     }
// }

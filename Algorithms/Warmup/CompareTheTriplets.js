/**
 *
 * Problem : https://www.hackerrank.com/challenges/compare-the-triplets/problem
 *
 * @param {integer} a0
 * @param {integer} a1
 * @param {integer} a2
 * @param {integer} b0
 * @param {integer} b1
 * @param {integer} b2
 */
function solve(a0, a1, a2, b0, b1, b2) {
  let alice = 0;
  let bob = 0;
  (a0 > b0) ? alice++ : (a0 === b0) ? 0 : bob++;
  (a1 > b1) ? alice++ : (a1 === b1) ? 0 : bob++;
  (a2 > b2) ? alice++ : (a2 === b2) ? 0 : bob++;
  return [alice, bob];
}
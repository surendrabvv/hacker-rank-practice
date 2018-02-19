/**
 *
 * Problem : https://www.hackerrank.com/challenges/simple-array-sum/problem
 * @param {integer} n
 * @param {array} ar
 */
function simpleArraySum(n, ar) {
  let sum = 0;
  while (n > 0) {
    n--;
    sum += ar[n];
  }
  return sum;
}
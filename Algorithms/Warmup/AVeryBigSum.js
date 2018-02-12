/**
 * Problem : https://www.hackerrank.com/challenges/a-very-big-sum/problem
 * @param {integer} n - Number of elements in the given array
 * @param {array} ar - An array of integers
 * @returns {integer} sum - Sum of the elements in the given array
 */
function aVeryBigSum(n, ar) {
  var sum = 0;
  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
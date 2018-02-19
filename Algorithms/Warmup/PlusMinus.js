/**
 *
 * Problem : https://www.hackerrank.com/challenges/plus-minus/problem
 *
 * @param {array} arr
 */
function plusMinus(arr) {
  var p = 0;
  var n = 0;
  var e = 0;
  var t = arr.length;
  for (var i = 0; i < t; i++) {
    (arr[i] > 0) ? p++ : (arr[i] === 0) ? e++ : n++;
  }
  console.log(p / t);
  console.log(n / t);
  console.log(e / t);
}
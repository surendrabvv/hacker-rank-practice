/**
 *
 * Problem : https://www.hackerrank.com/challenges/diagonal-difference/problem
 *
 * @param {array} a
 */
function diagonalDifference(a) {
  var len = a.length;
  var primaryDgnl = 0;
  var secondaryDgnl = 0;
  for (var i = 0; i < a.length; i++) {
    primaryDgnl += a[i][i];
    len--;
    secondaryDgnl += a[i][len];
  }
  return Math.abs(primaryDgnl - secondaryDgnl);
}
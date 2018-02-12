/**
 * Problem : https://www.hackerrank.com/challenges/staircase/problem
 * @param {integer} n - Size of Staircase
 */
function staircase(n) {
  var str = '';
  for (var i = 1; i <= n; i++) {
    str += ' '.repeat(n - i);
    str += '#'.repeat(i);
    str += '\n';
  }
  console.log(str);
}
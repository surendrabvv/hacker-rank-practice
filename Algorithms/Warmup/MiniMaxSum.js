/**
 * Problem : https://www.hackerrank.com/challenges/mini-max-sum/problem
 * @param {array} arr - Array of 5 positive integers
 */
function miniMaxSum(arr) {
  var tmpArr = arr.sort(function (x, y) {
    return x - y;
  });
  var min = tmpArr[0] + tmpArr[1] + tmpArr[2] + tmpArr[3];
  var max = tmpArr[1] + tmpArr[2] + tmpArr[3] + tmpArr[4];
  console.log(min + ' ' + max);
}
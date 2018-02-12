/**
 * Problem : https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 * @param {integer} n - Collen's age
 * @param {array} ar - An array of candle heights
 */
function birthdayCakeCandles(n, ar) {
  var dupObj = {};
  for (var i = 0; i < ar.length; i++) {
    if (dupObj.hasOwnProperty(ar[i])) {
      var count = (dupObj[ar[i]]) + 1;
      dupObj[ar[i]] = count;
    } else {
      dupObj[ar[i]] = 1;
    }
  }
  var keys = (Object.keys(dupObj)).map(Number).sort(function (a, b) {
    return a - b;
  });
  return dupObj[keys[keys.length - 1]];
}
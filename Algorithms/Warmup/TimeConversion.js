/**
 * Problem : https://www.hackerrank.com/challenges/time-conversion/problem
 */
function timeConversion(str) {
  var h = parseInt(str.substring(0, 2), 10);
  var r = str.substring(2, 8);
  var a = str.substring(8);
  if (a === 'AM') {
    h = (h === 12) ? '00' : h.toString();
  } else {
    h = (h === 12) ? '12' : (h + 12).toString();
  }
  h = '0'.repeat(2 - h.length) + h;
  return h + r;
}
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */

/*let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    // Ваш код
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
*/

function filterRange(arr, a, b) {
  // ваш код...
 
  return arr.filter(item => (a <= item && item <= b));

}


console.log(filtered);
console.log(arr);

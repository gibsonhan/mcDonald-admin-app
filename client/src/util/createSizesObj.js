/**Create an array with values of Store's Serving Time
 * @param {Array} _obj
 * @param {Object} _formObj
 * @param {Object} _destrucObj
 * @return {Array}
 */

//This needs to be refactored
export function createSizeObj(_arr, _formObj, _destrucObj) {
  return _arr.reduce(
    (acc, curr) => {
      if (_formObj[curr] === true) {
        acc.list.push(curr);
        acc[curr] = {
          price: _destrucObj[curr + 'Price'],
          cal: _destrucObj[curr + 'Calories'],
          img: _destrucObj[curr + 'Img'],
        };
      }
      return acc;
    },
    { list: new Array() },
  );
}

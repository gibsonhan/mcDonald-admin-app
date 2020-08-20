/**Create an array with values of Store's Serving Time
 * @param {Object} _obj
 * @param {String} _arr
 * @return {Array}
 */
function createSizesobj(_arr, _formObj, _destrucObj) {
  return _arr.reduce(
    (acc, curr) => {
      if (_formObj[curr] === true) {
        acc.list.push(curr);
        acc[curr] = {
          price: _destrucObj[curr + 'Price'],
          cal: _destrucObj[curr + 'Calories'],
        };
      }
      return acc;
    },
    { list: new Array() },
  );
}

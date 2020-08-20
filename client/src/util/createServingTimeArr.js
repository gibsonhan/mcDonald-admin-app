/**Create an array with values of Store's Serving Time
 * @param {Object} _obj
 * @param {String} _arr
 * @return {Array}
 *
 *
 */

export function createServingTimeArr(_obj, _arr) {
  return _arr.reduce((acc, curr) => {
    if (_obj[curr] === true) {
      acc = [...acc, curr];
    }
    return acc;
  }, []);
}

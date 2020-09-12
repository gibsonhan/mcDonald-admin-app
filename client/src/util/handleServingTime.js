/**Create an array with values of Store's Serving Time
 * @param {Object} _obj
 * @param {String} _arr
 * @return {Array}
 *
 *
 */

export function createServingTimeObj(_obj) {
  const _servingTimes = ['breakfast', 'lunch', 'dinner'];
  return _servingTimes.reduce((acc, curr) => {
    acc[curr] = _obj[curr];
    return acc;
  }, {});
}

//probably dont need this
export function unpackServingTimeObnj(_obj) {
  let obj = {};
  return obj;
}

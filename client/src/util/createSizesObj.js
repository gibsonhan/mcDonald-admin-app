/**Create an array with values of Store's Serving Time
 * @param {Array} _obj
 * @param {Object} _formObj
 * @param {Object} _destrucObj
 * @return {Obj}
 * 
  Create an object {
    [list]: [string]
    [size]: {
      price: Number
      cal: Number
    }
  }
 */

//This needs to be refactored
export function createSizeObj(_formObj) {
  const ITEMSIZES = ['xSmall', 'small', 'regular', 'large', 'xLarge'];
  return ITEMSIZES.reduce(
    (acc, curr) => {
      if (_formObj[curr] === true) {
        acc.list.push(curr);
        acc[curr] = {
          price: _formObj[curr + 'Price'],
          cal: _formObj[curr + 'Calories'],
        };
      }
      return acc;
    },
    { list: new Array() },
  );
}

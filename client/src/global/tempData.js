const ITEMINPUTS = ['name', 'group', 'subGroup', 'couponGroup'];
const ITEMSIZES = ['xSmall', 'small', 'regular', 'large', 'xLarge'];
const SERVINGTIMES = ['breakfast', 'lunch', 'dinner'];
const SIZEMOREINFO = ['Price', 'Calories'];

const DEFAULTITEMVALUES = {
  name: '',
  group: '',
  subGroup: '',
  couponGroup: '',
  //sizesArr
  //xs = extra small
  xSmall: false,
  xSmallPrice: 0,
  xSmallCalories: 0,
  //s = small
  small: false,
  smallPrice: 0,
  smallCalories: 0,
  //r = regular
  regular: false,
  regularPrice: 0,
  regularCalories: 0,
  //l = large
  large: false,
  largePrice: 0,
  largeCalories: 0,
  //xl = extra large
  xLarge: false,
  xLargePrice: 0,
  xLargeCalories: 0,
  //serving
  breakfast: true,
  lunch: false,
  dinner: false,
};

export { ITEMINPUTS, ITEMSIZES, SERVINGTIMES, SIZEMOREINFO, DEFAULTITEMVALUES };

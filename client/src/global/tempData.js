const ITEMINPUTS = ['name', 'group', 'subGroup', 'couponGroup'];
const ITEMSIZES = ['xSmall', 'small', 'regular', 'large', 'xLarge'];
const SERVINGTIMES = ['breakfast', 'lunch', 'dinner'];
const SIZEMOREINFO = ['Price', 'Calories'];
const MENUINPUTS = ['name', 'groups'];
const DEFAULTITEMVALUES = {
  name: 'French Fries',
  group: 'Snacks',
  subGroup: 'NONE',
  couponGroup: 'jewfiojj',
  //sizesArr
  //xs = extra small
  xSmall: false,
  xSmallCalories: 0,
  xSmallPrice: 0,
  xSmallImg: '',
  //s = small
  small: false,
  smallPrice: 0,
  smallCalories: 0,
  smallImg: '',
  //r = regular
  regular: false,
  regularPrice: 0,
  regularCalories: 0,
  regularImg: '',
  //l = large
  large: false,
  largePrice: 0,
  largeCalories: 0,
  largeImg: '',
  //xl = extra large
  xLarge: false,
  xLargePrice: 0,
  xLargeCalories: 0,
  xLargeImg: '',
  //serving
  breakfast: true,
  lunch: false,
  dinner: false,
};

export {
  DEFAULTITEMVALUES,
  ITEMINPUTS,
  ITEMSIZES,
  MENUINPUTS,
  SERVINGTIMES,
  SIZEMOREINFO,
};

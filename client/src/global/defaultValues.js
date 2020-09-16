const ITEMVALUES_ARR = [
  'name',
  'xSmall',
  'xSmallCal',
  'xSmallPrice',
  'xSmallImg',
  'small',
  'smallCal',
  'smallPrice',
  'smallImg',
  'regular',
  'regularCal',
  'regularPrice',
  'regularImg',
  'large',
  'largeCal',
  'largePrice',
  'largeImg',
  'xLarge',
  'xLargeCal',
  'xLargePrice',
  'xLargeImg',
  'breakfast',
  'lunch',
  'dinner',
];

const ITEMVALUES_OBJ = {
  name: 'Mc Donald Duck',
  //sizesArr
  //xs = extra small
  xSmall: false,
  xSmallCal: 100,
  xSmallPrice: 1.0,
  xSmallImg: '',
  //s = small
  small: false,
  smallPrice: 2.0,
  smallCal: 200,
  smallImg: '',
  //r = regular
  regular: false,
  regularPrice: 3.0,
  regularCal: 300,
  regularImg: '',
  //l = large
  large: false,
  largePrice: 4.0,
  largeCal: 400,
  largeImg: '',
  //xl = extra large
  xLarge: false,
  xLargePrice: 5.0,
  xLargeCal: 500,
  xLargeImg: '',
  //serving
  breakfast: true,
  lunch: false,
  dinner: false,
};

const DEFAULTVALUES_EDIT = {
  title: 'Set',
  title2: 'Annoucement',
  titleContent: '@Admin Portal',
  btnText: 'Button Error',
  btnColor: 'Yellow',
  navLink: 'none',
  legal: '',
  img: '',
};

export { DEFAULTVALUES_EDIT, ITEMVALUES_ARR, ITEMVALUES_OBJ };

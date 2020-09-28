function isEmpty(a) {
  return Array.isArray(a) ? arrIsEmpty(a) : objIsEmpty(a);
}

function arrIsEmpty(a) {
  if (a.length === 0) return true;
  else return false;
}

function objIsEmpty(b) {
  for (let i in b) return false;
  return true;
}

export { isEmpty };

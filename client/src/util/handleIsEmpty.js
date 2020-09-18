Array.prototype.notEmpty = function () {
  return this.length === 0 ? true : false;
};

function isEmpty(a) {
  return Array.isArray(a) ? Array.isEmpty(a) : objIsEmpty(a);
}

function objIsEmpty(b) {
  for (let i in b) return false;
  return true;
}

export { isEmpty };

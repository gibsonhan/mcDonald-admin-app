function setLocalStorage(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key, data) {
  const localStorage = window.localStorage.getItem(key);
  return JSON.parse(localStorage);
}

export { setLocalStorage, getLocalStorage };

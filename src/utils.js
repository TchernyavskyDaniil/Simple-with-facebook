export const LS = {
  get: token => localStorage.getItem(token),
  set: (token, value) => localStorage.setItem(token, value)
};

export const JS = {
  p: obj => JSON.parse(obj),
  s: obj => JSON.stringify(obj)
};

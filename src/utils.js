export const asFloat = handler => v => {
  const flt = parseFloat(v);

  handler(flt || 0);
};

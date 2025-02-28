export const generateRandomNumberFrom1To100 = () => {
  return Math.floor(Math.random() * 100) + 1;
};

export const generateRandomID = () =>
  Math.random().toString(36).substring(2, 15);

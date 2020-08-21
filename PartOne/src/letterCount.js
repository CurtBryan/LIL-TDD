export const getLetterCount = (string) => {
  const letters = string.toLowerCase().replace(/ {1,}/g,"").split("");
  let letterCount = {};

  letters.forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  });
  return letterCount;
};

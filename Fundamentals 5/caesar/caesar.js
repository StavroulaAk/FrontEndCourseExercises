let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const caesar = function (str, factor) {
  let index = str.match(/[A-Z]/g).map(forIndex);

  function forIndex (cap){
    return str.indexOf(cap)
  }

  if (factor < 0) {
    factor = 26 + factor;
  }
  if (factor > 25) {
    factor = factor % 26;
  }

  str = str.toLowerCase().split("");

  let result = str.map((e) => {
    if (alphabet.indexOf(e) !== -1) {
      if (typeof alphabet[alphabet.indexOf(e) + factor] === "string") {
        return alphabet[alphabet.indexOf(e) + factor];
      } else {
        return alphabet[alphabet.indexOf(e) - 26 + factor];
      }
    } else {
      return e;
    }
  });

  for (i = 0; i < index.length; i++) {
    result[index[i]] = result[index[i]].toUpperCase();
  }
  result = result.join("");
  return result;
};
module.exports = caesar;

const removeFromArray = function (arr, element1, element2, element3, element4) {

  let newArr = arr.filter((element) => {
    return element !== element1 && element !== element2 && element !== element3 && element !== element4
  });
  return newArr;
};

removeFromArray([1, 2, 3, 4], 3, 2);
module.exports = removeFromArray;

let notGood = "I know it is not a good practice but I seriously could not find a way that not only worked but more importantly, I was able to understand."



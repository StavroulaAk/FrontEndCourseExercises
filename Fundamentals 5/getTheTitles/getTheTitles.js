
const getTheTitles = function (books) {
  let titleArray = [];
  for (let i = 0; i < books.length; i++){
    titleArray.push(books[i].title)
  }
  return titleArray
};

module.exports = getTheTitles;

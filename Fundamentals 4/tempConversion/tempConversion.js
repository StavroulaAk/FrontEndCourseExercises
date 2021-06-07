const ftoc = function(f) {

  let resultF = (f - 32) * 5/9;
  let finalRoundedResultF = Math.round( resultF * 10) / 10;
  return finalRoundedResultF;

}
ftoc(100)

const ctof = function(c) {

  let resultC = (c * 9/5) + 32;
  let finalRoundedResultC = Math.round(resultC * 10) / 10;
  return finalRoundedResultC;

}
ctof(23)

module.exports = {
  ftoc,
  ctof
}

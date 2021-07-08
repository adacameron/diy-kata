const numberToReversedDigits = number => {
  let array = [];
  return Array.from(number.toString())
    .map(Number)
    .reverse();
};

module.exports = numberToReversedDigits;

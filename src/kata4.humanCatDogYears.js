const humanCatDogYears = number => {
  const catYears = (number - 2) * 4 + 24;
  const dogYears = (number - 2) * 5 + 24;
  const array = [number, catYears, dogYears];
  return array;
};

module.exports = humanCatDogYears;

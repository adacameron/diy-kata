const reachDestination = (distance, speed) => {
  let number = Math.round(distance / speed / 0.5) * 0.5;
  return `I should be there in ${number} hours.`;
};

module.exports = reachDestination;

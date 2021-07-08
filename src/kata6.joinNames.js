const joinNames = namesObj => {
  let names = namesObj.map(name => name.name);
  let lastName = names.pop();

  return names.join(", ") + " & " + lastName;
};

// return names.join(", ") + ` & ${lastName};`

module.exports = joinNames;

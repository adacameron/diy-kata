const getEmployerRole = (employeeName, employees) => {
  return employees.find(employees => employees.name === employeeName).role;
};

module.exports = getEmployerRole;

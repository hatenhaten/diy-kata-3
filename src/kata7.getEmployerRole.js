const getEmployerRole = (employeeName, employees) => {
    // find the item in the array with 
    const employeeObj = employees.find(x => x.name === employeeName);
    return employeeObj.role;
};

module.exports = getEmployerRole;

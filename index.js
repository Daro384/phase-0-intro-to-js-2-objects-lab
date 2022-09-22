// Write your solution in this file!
const employee = {name:"Daro", streetAddress:"Not happening"}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const employeeCopy = {...employee}
    employeeCopy[key] = value
    return employeeCopy
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
}  

const deleteFromEmployeeByKey = (employee, key) => {
    const employeeCopy = {...employee}
    delete employeeCopy[key]
    return employeeCopy
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}

console.log(deleteFromEmployeeByKey(employee, "name"))
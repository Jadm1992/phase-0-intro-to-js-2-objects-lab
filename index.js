// Write your solution in this file!

let employee = {
    streetAddress: '12 Broadway', 
    name: 'Sam'
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return Object.assign({}, employee, {[key]:value})
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey (employee, key){
    const newObject = Object.assign ({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey (employees, key){
    delete employee[key]
    return employee
    return Object
}
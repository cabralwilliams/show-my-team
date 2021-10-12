
const Employee = require('../lib/Employee.js');

test("creates an Employee object", () => {
    const employee = new Employee("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com");
    
    expect(employee.name).toBe("Cabral");
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toBe("cabral.williams@gmail.com");
});
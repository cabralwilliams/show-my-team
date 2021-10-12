
const Employee = require('../lib/Employee.js');

test("creates an Employee object", () => {
    const employee = new Employee("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com");
    
    expect(employee.name).toBe("Cabral");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("cabral.williams@gmail.com");
});

test("return the name of the employee", () => {
    const employee = new Employee("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com");

    expect(employee.getName()).toEqual("Cabral");
});

test("return the employee id", () => {
    const employee = new Employee("Cabral",525600,"cabral.williams@gmail.com");

    expect(employee.getId()).toEqual(525600);
});

test("return the employee email address", () => {
    const employee = new Employee("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com");

    expect(employee.getEmail()).toEqual("cabral.williams@gmail.com");
});

test("return the employee's role", () => {
    const employee = new Employee("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
});
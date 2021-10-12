
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("creates a manager object", () => {
    const manager = new Manager("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com",Math.ceil(Math.random()*100));

    expect(manager.name).toEqual("Cabral");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual("cabral.williams@gmail.com");
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
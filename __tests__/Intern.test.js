
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com","Rice University");

    expect(intern.name).toEqual("Cabral");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual("cabral.williams@gmail.com");
    expect(intern.school).toEqual("Rice University");
});
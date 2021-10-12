
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com","cabralwilliams");

    expect(engineer.name).toEqual("Cabral");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual("cabral.williams@gmail.com");
    expect(engineer.github).toEqual("cabralwilliams");
});

test('returns Engineer as role of the employee', () => {
    const engineer = new Engineer("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com","cabralwilliams");

    expect(engineer.getRole()).toEqual("Engineer");
});

test('return GitHub url of the employee', () => {
    const engineer = new Engineer("Cabral",Math.floor(Math.random()*525601),"cabral.williams@gmail.com","cabralwilliams");

    expect(engineer.getGithub()).toEqual(`https://github.com/${engineer.github}`);
});
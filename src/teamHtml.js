
const divEl = (divContent, divClasses = []) => {
    let output = "<div";
    if(divClasses.length > 0) {
        output += ` class='${divClasses.join(" ")}'`;
    }
    output += `>${divContent}</div>`;
    return output;
};

const hEl = (hContent, hNumber = 2, hClasses = []) => {
    let output = `<h${hNumber}`;
    if(hClasses.length > 0) {
        output += ` class='${hClasses.join(" ")}'`;
    }
    output += `>${hContent}</h${hNumber}>`;
    return output;
};

const aEl = (aContent, aHref) => {
    return `<a href='${aHref}'>${aContent}</a>`;
};

const employeeCard = employeeData => {
    const nameClasses = [];
    const titleClasses = [];
    const defaultClasses = [];
    const cardClasses = [];

    const nameEl = hEl(employeeData.getName(),2,nameClasses);
    const titleEl = hEl(employeeData.getRole(),3,titleClasses);
    const idEl = divEl(`ID: ${employeeData.getId()}`,defaultClasses);
    const emailA = aEl(employeeData.getEmail(),`mailto:${employeeData.getEmail()}`);
    const emailEl = divEl(`Email: ${emailA}`,defaultClasses);
    let div3;
    if(employeeData.getRole() === "Manager") {
        div3 = divEl(`Office number: ${employeeData.officeNumber}`,defaultClasses);
    } else if(employeeData.getRole() === "Engineer") {
        let githubA = aEl(employeeData.github,employeeData.getGithub());
        div3 = divEl(`GitHub: ${githubA}`,defaultClasses);
    } else {
        div3 = divEl(`School: ${employeeData.getSchool()}`);
    }
    return divEl(`${nameEl}${titleEl}${idEl}${emailEl}${div3}`,cardClasses);
};

module.exports = { employeeCard, hEl };
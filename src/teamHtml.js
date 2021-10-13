
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

const aEl = (aContent, aHref, isUrl = false) => {
    if(isUrl) {
        return `<a href='${aHref}' target='_blank'>${aContent}</a>`;
    }
    return `<a href='${aHref}'>${aContent}</a>`;
};

const employeeCard = employeeData => {
    const nameClasses = [];
    const titleClasses = [];
    const defaultClasses = [];
    const cardClasses = ["card"];

    const nameEl = hEl(employeeData.getName(),2,nameClasses);
    const titleEl = hEl(employeeData.getRole(),3,titleClasses);
    const idEl = divEl(`ID: ${employeeData.getId()}`,defaultClasses);
    const emailA = aEl(employeeData.getEmail(),`mailto:${employeeData.getEmail()}`);
    const emailEl = divEl(`Email: ${emailA}`,defaultClasses);
    let div3;
    if(employeeData.getRole() === "Manager") {
        div3 = divEl(`Office number: ${employeeData.officeNumber}`,defaultClasses);
    } else if(employeeData.getRole() === "Engineer") {
        let githubA = aEl(employeeData.github,employeeData.getGithub(),true);
        div3 = divEl(`GitHub: ${githubA}`,defaultClasses);
    } else {
        div3 = divEl(`School: ${employeeData.getSchool()}`);
    }
    return divEl(`\n\t\t\t${nameEl}\n\t\t\t${titleEl}\n\t\t\t${idEl}\n\t\t\t${emailEl}\n\t\t\t${div3}`,cardClasses);
};

module.exports = { employeeCard, hEl };
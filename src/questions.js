
class EmployeeQ {
    constructor() {
        this.nameQ = this.getNameQ();
        this.idQ = this.getIdQ();
        this.emailQ = this.getEmailQ();
    }

    getNameQ() {
        var nextQuestion = {
            type: "input",
            name: "name",
            message: "Enter the name of the employee please.",
            validate: function(nameVal) {
                if(!nameVal) {
                    console.log("Please enter a name for the employee.");
                    return false;
                }
                return true;
            }
        };
        return nextQuestion;
    }

    getIdQ() {
        var nextQuestion = {
            type: "number",
            name: "id",
            message: "Please enter the employee's employee id.",
            validate: function(idVal) {
                if(typeof idVal !== "number" || idVal%1 !== idVal || idVal <= 0) {
                    console.log("Employee id must be a positive integer.");
                    return false;
                }
                return true;
            }
        };
        return nextQuestion;
    }

    getEmailQ() {
        var nextQuestion = {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address.",
            validate: function(emailStr) {
                if(!emailStr) {
                    console.log("Please enter an email address for the employee.");
                    return false;
                }
                return true;
            }
        };
        return nextQuestion;
    }
}

class ManagerQ extends EmployeeQ {
    constructor() {
        super();
        this.officeNumberQ = this.getOfficeNumber();
    }

    getOfficeNumber() {
        var nextQuestion = {
            type: "number",
            name: "officeNumber",
            message: "Please enter the manager's office number.",
            validate: function(idVal) {
                if(typeof idVal !== "number" || idVal%1 !== idVal || idVal <= 0) {
                    console.log("The office number must be a positive integer.");
                    return false;
                }
                return true;
            }
        };
        return nextQuestion;
    }

    getQuestions() {
        return [this.nameQ,this.idQ,this.emailQ,this.officeNumberQ];
    }
}

class EngineerQ extends EmployeeQ {
    constructor() {
        super();
        this.githubQ = this.getGitHubUsername();
    }

    getGitHubUsername() {
        var nextQuestion = {
            type: "input",
            name: "github",
            message: "Please enter the employee's github username.",
            validate: function(githubStr) {
                if(!githubStr) {
                    console.log("Please enter the username associated with the employee's Github account.");
                    return false;
                }
                return true;
            }
        };
        return nextQuestion;
    }

    getQuestions() {
        return [this.nameQ,this.idQ,this.emailQ,this.githubQ];
    }
}

class InternQ extends EmployeeQ {
    constructor() {
        super();
        this.schoolQ = this.getSchool();
    }

    getSchool() {
        var nextQuestion = {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
            validate: function(schoolStr) {
                if(!schoolStr) {
                    console.log("Please enter the bastion of higher eduction that the intern attends.");
                    return false;
                }
                return true;
            }
        };
        return nextQuestion;
    }

    getQuestions() {
        return [this.nameQ,this.idQ,this.emailQ,this.schoolQ];
    }
}

module.exports = { ManagerQ, EngineerQ, InternQ };
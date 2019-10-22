//Constructor Object
function Employee(name, role, company, bday){
    this.name = name;
    this.role = role;
    this.company = company;
    this.birthday = Date(bday);
}

//Prototype
Employee.prototype.getDetails = function() {
        return `${this.name} is a ${this.role} in ${this.company}`;
}

// Inherit Constructor Object
function ExEmployee(name, role, company, extra) {
    Employee.call(this, name, role, company);

    this.extra = extra;
}

//Inherit Prototype
ExEmployee.prototype = Object.create(Employee.prototype);


//Iantiate Exemployee
const exemp1 = new ExEmployee("Frey", "Hacker", "Fisheye", "Placebo99");


console.log(exemp1);
console.log(exemp1.getDetails());
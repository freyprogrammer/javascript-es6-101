//Constructor
function employee(name, role, company, bday){
    this.name = name;
    this.role = role;
    this.company = company;
    this.birthday = Date(bday);
}

//Prototype
employee.prototype.getDetails = function() {
        return `${this.name} is a ${this.role} in ${this.company}`;
}

employee.prototype.age

//Instantiate
const emp1 = new employee('Frey', 'Hacker', 'Fisheye', "08/26/1990");
const emp2 = new employee('Vhans', 'Programmer', 'Fisheye', "11/01/1992");

console.log(emp1.name);
console.log(emp2.getDetails());
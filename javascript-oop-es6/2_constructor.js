//Constructor
function employee(name, role, company){
    this.name = name;
    this.role = role;
    this.company = company;

    this.getDetails = function() {
        return `${this.name} is a ${this.role} in ${this.company}`;
    }
}

//Instantiate
const emp1 = new employee('Frey', 'Hacker', 'Fisheye');
const emp2 = new employee('Vhans', 'Programmer', 'Fisheye');

console.log(emp1);
console.log(emp2.getDetails());
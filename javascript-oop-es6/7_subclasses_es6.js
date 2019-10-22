class Employee {
    constructor(name, role, company) {
        this.name = name;
        this.role = role;
        this.company = company;
    }
    //Method or function
     getDetails() {
        return `${this.name} is a ${this.role} in ${this.company}`;
    }
   
}

//Exemployee Subclass
class ExEmployee extends Employee {
    constructor(name, role, company, extra){
        // *Note super is a syntax for us to call parent constructor
        super(name, role, company);
        this.extra = extra;
    }
}

const emp1 = new Employee("Frey", "Hacker", "Fisheye");

//Instantiate ExEmployee
const emp2 = new ExEmployee("Vhans", "Programmer", "Fisheye", "Extra Placebo99");

console.log(emp2);
console.log(emp2.getDetails());





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

    getDetails2() {
        return `${this.name} is working in ${this.company}`;
    }

    //*Note Static Method can only be called on classes
    static getName() {
        return "MY NAME is STATIC"
    }
   
}

const emp1 = new Employee("Frey", "Hacker", "Fisheye")
const emp2 = new Employee("Vhans", "Programmer", "Fisheye")

console.log(emp1);
console.log(emp2.getDetails2());
console.log(Employee.getName());
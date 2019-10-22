//*Note this is just another way of creating object using es5

//Object Protos
const employeeProto = {
    getDetails: function() {
        return `${this.name} is a ${this.role} in ${this.company}`;
    },

    getDetails2: function() {
        return `${this.name} is working in ${this.company}`;
    }
}

//Create object way 1
const emp1 = Object.create(employeeProto);
emp1.name = "Frey";
emp1.role = "Hacker";
emp1.company = "Fisheye";

//Create object way 2
const emp2 = Object.create(employeeProto, {
    name: { value: 'Vhans'},
    role: { value: "Programmer"},
    company: {value: "Fisheye"}
});
console.log(emp1.getDetails2());

console.log(emp2.getDetails2());
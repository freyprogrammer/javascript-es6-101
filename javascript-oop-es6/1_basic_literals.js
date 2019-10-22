const employee1 = {
    name: "Frey",
    role: "Hacker",
    company: "Fisheye",
    birthday: Date("August 26, 1990"),

    getDetails: function() {
        return `${this.name} is a ${this.role} in ${this.company}`;
    }
};

const employee2 = {
    name: "Vhans",
    role: "Programmer",
    company: "Fisheye",
    birthday: Date("November 01, 1992"),

    getDetails: function() {
        return `${this.name} is a ${this.role} in ${this.company}`;
    }
};

//Basic Call
console.log(employee1.name + ":" + employee1.role);

//Call function
console.log(employee2.getDetails());

//Call Object values (in array form)
console.log(Object.values(employee1));

//Call Object keys (in array form)
console.log(Object.keys(employee1));
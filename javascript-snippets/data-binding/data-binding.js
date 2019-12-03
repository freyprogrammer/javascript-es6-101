// let c1 = {
//     x: 5,
//     y: 10
// }

// let c2 = {
//     x: 35,
//     y: 769
// }

// function printCoordinates() {
//     console.log(this.name+', '+this.y);
// }

// let c1_Function = printCoordinates.bind(c1);

// c1_Function();

let details1 = {
    name: document.getElementById("name"),
    address: document.getElementById("address"),
    age: document.getElementById("age")
}

function bindDetails() {
    console.log(this.name.value+' lives in '+this.address.value+' with the age of'+this.age.value);
}

let details1_bind = bindDetails.bind(details1);

details1_bind();

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

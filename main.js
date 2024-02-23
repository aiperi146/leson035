const firstObject = {
    name: "FirstObject",
    printName: printName 
};


const secondObject = {
    name: "SecondObject",
     printName: printName
};

function printName() {
    console.log(this.name);
}

firstObject.printName();
secondObject.printName();

function printName() {
    console.log(this.name); 
}

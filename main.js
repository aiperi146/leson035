const firstObject = {
    name: "Peri",
    printName: printName 
};


const secondObject = {
    name: "aika",
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

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
function printName() {
    console.log(this.name); 
}

// printName();

/*
Почему мы получаем тот или иной результат?

Когда функция printName вызывается напрямую, а не как метод объекта,
ключевое слово this внутри нее не будет указывать на какой-либо объект.
Вместо этого в нестрогом режиме (без 'use strict'), this будет указывать
на глобальный объект (например, window в браузере, или global в Node.js).
В строгом режиме (с 'use strict'), значение this будет undefined.

Поэтому если мы вызовем функцию printName напрямую, без привязки к какому-либо объекту,
в нестрогом режиме она попытается обратиться к свойству name глобального объекта
(которое может быть не определено), что может привести к ошибке или выводу undefined.
В строгом режиме же будет ошибка, так как this будет undefined, и доступ к свойству
name у undefined вызовет TypeError.
*/

const boundFunction = printName.bind(firstObject);

boundFunction(); 


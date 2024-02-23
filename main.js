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


const printNameArrow = () => {
    console.log(this.name); 
};


const arr = {
    name: "peri",
    printNameArrow: printNameArrow 
};

const array = {
    name: "aika",
    printNameArrow: printNameArrow 
};
firstObject.printNameArrow(); 
secondObject.printNameArrow ();


const printNameArrow2= () => {
    console.log(this.name); 
};


const arr2 = {
    name: "aika",
    printNameArrow: printNameArrow 
};


const array2 = {
    name: "peri",
    printNameArrow: printNameArrow 
};


firstObject.printNameArrow(); 
secondObject.printNameArrow(); 

// printNameArrow(); 

// const boundFunction = printNameArrow.bind(firstObject); 

/*
Почему мы видим те или иные результаты?

1. Вызов методов объектов, основанных на стрелочной функции, приводит к выводу undefined.
   Это происходит потому, что стрелочные функции не имеют собственного this и заимствуют его из внешнего контекста.
   В данном случае внешний контекст - глобальная область видимости, где значение this равно undefined.

2. Вызов стрелочной функции напрямую также приводит к ошибке.
   Стрелочные функции не могут быть вызваны с методами call(), apply(), или bind(), и не могут иметь собственный this,
   они используют this окружающего контекста, который в данном случае также является undefined в глобальной области видимости.

3. Применение метода bind к стрелочной функции также вызовет ошибку.
   Поскольку стрелочные функции не имеют собственного this и не могут быть привязаны с помощью bind(),
   этот вызов также приведет к ошибке.
*/

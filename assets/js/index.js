'use strict';
/*
1. Написать функцию, которая вычисляет факториал задан-
ного числа.*/

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

do {


    const userValue = Number(prompt());

    if (userValue) {
        alert(factorial(userValue));
    } else {
        break;
    }


} while (true)

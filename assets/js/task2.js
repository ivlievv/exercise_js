'use strict';

/*3. Написать функцию, которая выводит переданное ей число
задом наперед.*/

function getNimberMirror(number) {

    if (number < 10) {
        return number;

    } else {

        const  result = number % 10;
        const  nextNumber = (number - result) / 10;

        const str = result + getNimberMirror(nextNumber).toString();

        return Number ( str );
    }

}

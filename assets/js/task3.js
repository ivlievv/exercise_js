'use strict';

function sumTo(n) {

    if (n < 10) {
        return n;

    }

    const lastDigit = n % 10;

    return lastDigit + sumTo( (n - lastDigit) / 10 );


}
const userValue = Number(prompt());

alert(sumTo(userValue));
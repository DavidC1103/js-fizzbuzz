
let value = "";

for (let i = 1; i <= 100; i++) {

    value = i;

    if (!(i % 3)) {
        value = 'Fizz';
    }

    if (!(i % 5)) {
        value = 'Buzz';
    }

    if (!(i % 3) && !(i % 5)) {
        value = 'FizzBuzz';
    }

    console.log(value);
}
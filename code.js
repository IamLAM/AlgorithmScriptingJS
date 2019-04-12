//In this course you will learn  to develop simple codes with JS

function convertToFarenheit(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

console.log(convertToFarenheit(5));


function reverseString(str) {
    console.log(str);

    let arr2 = str.split("");
    str = arr2.reverse().join("");
    return str;
}

console.log(reverseString("door"));



function factorial(num) {
    let i = 1,
        j = 1,
        k = 1;

    while (j <= num) {
        i = i * j;
        //  1   2 // 2
        //  2   3 //6
        //  6   4 //24
        // 24   5 //120
        j++;

    }
    return i;
}

console.log(factorial(3));



let text = "The quick brown fox jumped over the lazy dog";
console.log(text);

let t = text.split(" ");
console.log(t.length);

let i = 0,
    vm = 0;
let t2 = [];
while (i < t.length) {
    if (t[i] < vm)
        vm = t[i].length;
    console.log("vm: " + vm + " t[" + i + "]:" + t[i] + " Longitud: " + t[i].length);

    i++;
}
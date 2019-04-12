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
var i = 0;
var vm = 0;

while (i < t.length) {
    if (t[i].length > vm) {
        vm = t[i].length;
        console.log("vm: " + vm + " | t[" + i + "]:" + t[i] + " | Longitud: " + t[i].length);
    }


    i++;
}

//We need to identify the longest array
console.log("===========================");
let text2 = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
];


var i2 = 0;
var vm2 = 0;

while (i2 < text2.length) {

    if (text2[i2].length > vm2) {
        vm2 = text2[i2].length;
        console.log("vm: " + vm2 + " | t[" + i2 + "]:" + text2[i2] + " | Longitud: " + text2[i2].length);
    }


    i2++;
}

//If you want to know if the last letter in a word , you can use 
let word = "Pilar";
let target = "r";
console.log(word.endsWith(target));

console.log(word.indexOf(target));
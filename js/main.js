let str = 'урок-3-был слишком легким';

let newStr = str[0].toUpperCase() + str.slice(1);
let twoStr = newStr.replace(/\-/g, ' ');
console.log(twoStr);

let threeStr = twoStr.replace('легким', '');
alert (threeStr.substring(0, threeStr.length - 3) + 'оо');

let arr = [20, 33, 1, 'Человек', 2, 3];
let summ = 0;
let result;

for(var i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 3);
    summ = summ + arr[i];
    console.log(summ);
};

result = Math.sqrt(summ);
console.log(result);


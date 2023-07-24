// es5
var num1 = 1;
var num2 = 2;
var result = 3;
var stinrg1 = num1 + '더하기' + num2 + '는 \'' +result+'\'';
console.log(stinrg1);

// 문자와 변수를 위해 이스케이프하느라 코드가 지저분해짐

//es6

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2); // 1더하기 2는 '3' 
function numberReturn(number1, number2){
    return ((number1*number1)+(number2*number2));
}
const numberReturn2 = function (number1, number2){
    return ((number1*number1)+(number2*number2));
};
const numberReturn3 = (number1, number2) => ((number1*number1)+(number2*number2));

console.log(numberReturn(2, 4));
console.log(numberReturn2(2, 4));
console.log(numberReturn3(2, 4));

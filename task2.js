// 2. Basic Calculator (with validation)
// Task: Create a function calculate(a, b, operator) where operator is "+", "-", "*", or "/". Use a switch to perform the calculation. If an invalid operator is provided, return an error message.

function calculateValue(a, b, operator){

    let calculiation;

    switch (operator) {
        case '+':
            calculiation = a + b; 
            break;
        case '-':
            calculiation = a - b; 
            break;
        case '*':
            calculiation = a * b; 
            break;
        case '/':
            calculiation = a / b; 
            break;
        default:
            return `incorrect operator "${operator}".`;
}
return calculiation
}

console.log(calculateValue(8, 6,'+'));
console.log(calculateValue(9 ,6,'-'));
console.log(calculateValue(5, 6,'*'));
console.log(calculateValue(12, 6,'/'));

const firstDigit = Number(process.argv[2]);
const operation = process.argv[3];
const secondDigit = Number(process.argv[4]);

if (isNaN(firstDigit) || isNaN(secondDigit)) {
    console.log("Please provide valid digit");
    process.exit();
}

let result;

// if(operation === "+"){
//     result = firstDigit + secondDigit;
// }
// else if(operation === "*"){
//     result = firstDigit * secondDigit;
// }
// else if(operation === "-"){
//     result = firstDigit - secondDigit;
// }
// else if(operation === "/"){
//     result = firstDigit / secondDigit;
// }
// else{
//     result = "Invalid Operation"
// }

switch (operation) {
    case "+":
        result = firstDigit + secondDigit;
        break;

    case "-":
        result = firstDigit - secondDigit;
        break;

    case "*":
        result = firstDigit * secondDigit;
        break;

    case "div":
        result = secondDigit === 0
            ? "Cannot divide by zero"
            : firstDigit / secondDigit;
        break;

    default:
        result = "Invalid Operation";
}

console.log(`Result: ${result}`)
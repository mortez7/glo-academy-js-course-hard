const num = 266219;

let result = 1;

for (let digit of num.toString()) {
  result *= Number(digit);
}

console.log(result);

result **= 3;

console.log(result);

console.log(result.toString().slice(0, 2));

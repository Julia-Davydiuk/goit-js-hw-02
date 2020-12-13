let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    numbers.push(input);

    if(input === null) {
        break;
    }
  
    input = Number(input);
    total += input;
  
  } while (input !== null);
  
  console.log(`Общая сумма чисел равна ${total}`);
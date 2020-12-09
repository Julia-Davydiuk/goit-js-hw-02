//Напиши функцию logItems(array), которая получает массив и использует цикл for, 
// который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax']
//  с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// const logItems = function(array) {
  // твой код
// };
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let messange;

const logItems = function(array) {
    for (let i = 0; i < friends.length; i += 1) {
        messange = `${i + 1} - ${friends[i]}`;
        console.log(messange);
      }
    
    for (let i = 0; i < numbers.length; i += 1){
        messange = `${i + 1} - ${numbers[i]}`;
        console.log(messange);
      }  
};

logItems();
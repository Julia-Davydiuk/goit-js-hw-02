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
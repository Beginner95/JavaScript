/*function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

checkAge(19);

function min(a, b) {
    return (a < b) ? a : b;
}
alert(min(3, -1));
*/

let x = prompt('Введите число ', '');
let n = prompt('Введите степерь ', '');

if (n <= 1) {
    alert('Степень не может быть меньще 1 и дробным числом');
} else {
    alert( pow(x, n));
}

function pow(x, n) {  
  
    let sum = x;
    
    for (let i = 1; i < n; i++) {
        sum *= x;
    }
    
    return sum;
}










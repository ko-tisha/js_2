// 1 Задача
let a = parseInt(prompt("Введите возраст пользователя:"));
if (a < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

// 2 Задача
let b = parseInt(prompt("Введите первое число:"));
let c = parseInt(prompt("Введите второе число:"));
if(b > c) {
    console.log("Первое число больше");
}
else if(b < c) {
    console.log("Второе число больше");
} else {
    console.log("Числа равны");
}

// 3 Задача
let d = parseInt(prompt("Введите число"));

if (d % 2 === 0) {
    console.log("Вы угадали, ура!");
} else {
    console.log("Вы не угадали, попробуйте еще раз");
}
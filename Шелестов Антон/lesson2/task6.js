/*
 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
 В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3)
 и вернуть полученное значение (использовать switch).
 */

var arg1 = +prompt('Введите первое число'),
    arg2 = +prompt('Введите второе число'),
    operation = prompt('Укажите операцию'),
    result;

alert(mathOperation(arg1, arg2, operation));

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            result = arg1 + arg2;
            break;
        case '-':
            result = arg1 - arg2;
            break;
        case '/':
            result = arg1 / arg2;
            break;
        case '*':
            result = arg1 * arg2;
            break;
        default:
            result = 'Неверная операция';
            break;
    }
    return result;
}
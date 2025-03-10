"use strict";

function save_digit(digit) {
    let number_input = document.querySelector(".number_input");
    number_input.innerText = number_input.innerText * 10 + digit;
}

function clear_input() { 
    console.log("функция clear запустилась")
    let number_input = document.querySelector(".number_input");
    number_input.innerText = 0;
    operation = ""; // сбрасываем операцию
}

function delete_last_digit() {
    let number_input = document.querySelector(".number_input");
    number_input.innerText = Math.floor(number_input.innerText / 10);
}


let first_number = 0 ;
let operation = "";

function get_number() {
    let number_input = document.querySelector(".number_input");
    let number = +number_input.innerText;
    return number;
}

function plus() { 
    first_number = get_number()
    clear_input();
    operation = "+";
}

function minus() { 
    first_number = get_number()
    clear_input();
    operation = "-";
}

function square_root() {
    first_number = get_number()
    clear_input();
    operation = "√";
}

function sin() {
    first_number = get_number()
    clear_input();
    operation = "sin";
}

function cos() {
    first_number = get_number()
    clear_input();
    operation = "cos";
}

function tan() {
    first_number = get_number()
    clear_input();
    operation = "tan";
}

function equal() { 
    let second_number = get_number();

    let result;
    if (operation == "+") {
        result = first_number + second_number;
    }
    else if (operation == "-") {
        result = first_number - second_number;

    }
    else if (operation == "*") {
        result = first_number * second_number;
    }
    else if (operation == "/") {
        result = first_number / second_number;

    }
    else if (operation == "√") {
        result = Math.sqrt(first_number) 
    }
    else if (operation == "sin") {
        result = Math.sin(first_number)
    }
    else if (operation == "cos") { 
        result = Math.cos(first_number)
    }
    else if (operation == "tan") {
        result = Math.tan(first_number)
    }
    else if (operation == undefined) {
        alert("Вы не выбрали, какую операцию выполнять!")
    }

    let number_input = document.querySelector(".number_input");
    number_input.innerText = result;
}

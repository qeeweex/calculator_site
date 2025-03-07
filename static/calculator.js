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
    else if (operation == undefined) {
        alert("Вы не выбрали, какую операцию выполнять!")
    }

    let number_input = document.querySelector(".number_input");
    number_input.innerText = result;
}

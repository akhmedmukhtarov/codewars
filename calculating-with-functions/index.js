function zero(param) {
    if (param === undefined) {
        return 0;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(0 + (+param[1]));
        case '-':
            return Math.floor(0 - (+param[1]));
        case '/':
            return Math.floor(0 / (+param[1]));
        case '*':
            return Math.floor(0 * (+param[1]));
    }
}
function one(param) {
    if (param === undefined) {
        return 1;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(1 + (+param[1]));
        case '-':
            return Math.floor(1 - (+param[1]));
        case '/':
            return Math.floor(1 / (+param[1]));
        case '*':
            return Math.floor(1 * (+param[1]));
    }
}
function two(param) {
    if (param === undefined) {
        return 2;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(2 + (+param[1]));
        case '-':
            return Math.floor(2 - (+param[1]));
        case '/':
            return Math.floor(2 / (+param[1]));
        case '*':
            return Math.floor(2 * (+param[1]));
    }
}
function three(param) {
    if (param === undefined) {
        return 3;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(3 + (+param[1]));
        case '-':
            return Math.floor(3 - (+param[1]));
        case '/':
            return Math.floor(3 / (+param[1]));
        case '*':
            return Math.floor(3 * (+param[1]));
    }
}
function four(param) {
    if (param === undefined) {
        return 4;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(4 + (+param[1]));
        case '-':
            return Math.floor(4 - (+param[1]));
        case '/':
            return Math.floor(4 / (+param[1]));
        case '*':
            return Math.floor(4 * (+param[1]));
    }
}
function five(param) {
    if (param === undefined) {
        return 5;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(5 + (+param[1]));
        case '-':
            return Math.floor(5 - (+param[1]));
        case '/':
            return Math.floor(5 / (+param[1]));
        case '*':
            return Math.floor(5 * (+param[1]));
    }
}
function six(param) {
    if (param === undefined) {
        return 6;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(6 + (+param[1]));
        case '-':
            return Math.floor(6 - (+param[1]));
        case '/':
            return Math.floor(6 / (+param[1]));
        case '*':
            return Math.floor(6 * (+param[1]));
    }
}
function seven(param) {
    if (param === undefined) {
        return 7;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(7 + (+param[1]));
        case '-':
            return Math.floor(7 - (+param[1]));
        case '/':
            return Math.floor(7 / (+param[1]));
        case '*':
            return Math.floor(7 * (+param[1]));
    }
}
function eight(param) {
    if (param === undefined) {
        return 8;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(8 + (+param[1]));
        case '-':
            return Math.floor(8 - (+param[1]));
        case '/':
            return Math.floor(8 / (+param[1]));
        case '*':
            return Math.floor(8 * (+param[1]));
    }
}
function nine(param) {
    if (param === undefined) {
        return 9;
    }
    switch (param[0]) {
        case '+':
            return Math.floor(9 + (+param[1]));
        case '-':
            return Math.floor(9 - (+param[1]));
        case '/':
            return Math.floor(9 / (+param[1]));
        case '*':
            return Math.floor(9 * (+param[1]));
    }
}

function plus(a) {
    return '+' + a;
}
function minus(a) {
    return '-' + a;
}
function times(a) {
    return '*' + a;
}
function dividedBy(a) {
    return '/' + a;
}

console.log(five(dividedBy(nine())));
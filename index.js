function suma (op1, op2=0){
    return op1 + op2;
}

function resta (op1, op2=0){
    return op1 - op2;
}

function multiplicacion (op1, op2=0){
    return op1 * op2;
}

function division (op1, op2=0){
    return op1 / op2;
}

function cuadrado(num){
    return num * num;
}

module.exports = {suma, resta, multiplicacion, division, cuadrado};


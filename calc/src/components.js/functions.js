const calc = (num1,num2, equ) => {

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    let sum;

    if(equ === '+'){
        sum = parsedNum1 + parsedNum2;
        return sum.toString();
    }
    else if(equ === '-'){
        sum = parsedNum1 - parsedNum2;
        return sum.toString();
    }
    else if(equ === '/'){
        sum = parsedNum1 / parsedNum2;
        return sum.toString();
    }
    else if(equ === 'x'){
        sum = parsedNum1 * parsedNum2;
        return sum.toString();
    }
    
}

export default calc;
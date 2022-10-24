let op1 = 0;
let op2 = 0;
let opt = "";
let opCount = 0;
let completeop1 = false;
let completeop2 = false;
let sign = "";
let result = 0;

// digits
document.getElementById("b0").addEventListener('click', e => {
    addDigit(0)
});
document.getElementById("b1").addEventListener('click', e => {
    addDigit(1)
});
document.getElementById("b2").addEventListener('click', e => {
    addDigit(2)
});
document.getElementById("b3").addEventListener('click', e => {
    addDigit(3)
});
document.getElementById("b4").addEventListener('click', e => {
    addDigit(4)
});
document.getElementById("b5").addEventListener('click', e => {
    addDigit(5)
});
document.getElementById("b6").addEventListener('click', e => {
    addDigit(6)
});
document.getElementById("b7").addEventListener('click', e => {
    addDigit(7)
});
document.getElementById("b8").addEventListener('click', e => {
    addDigit(8)
});
document.getElementById("b9").addEventListener('click', e => {
    addDigit(9)
});

// special
// document.getElementById("bPoint").addEventListener('click', e => {
//     // TODO
// });
document.getElementById("bClear").addEventListener('click', e => {
    clearCalc()
});

// operations
document.getElementById("bDivision").addEventListener('click', e => {
    addSign("/")
});
document.getElementById("bMultiplication").addEventListener('click', e => {
    addSign("*")
});
document.getElementById("bAddition").addEventListener('click', e => {
    addSign("+")
});
document.getElementById("bSubtraction").addEventListener('click', e => {
    addSign("-")
});
document.getElementById("bEquals").addEventListener('click', e => {
    operate()
});



let mainDisplay = document.getElementById("mainDisplay");
let subDisplay = document.getElementById("subDisplay");

// receives int digit as parameter
function addDigit(digit)
{
    console.log("addDigit called");
    // gets the first operand
    if(!completeop1)
    {
        op1 = (op1 * 10) + digit;
        console.log("Op1: " + op1)
        mainDisplay.innerHTML = op1;
    }
    // gets second operand
    else if(!completeop2)   
    {
        op2 = (op2 * 10) + digit;
        console.log("Op2: " + op2)
        mainDisplay.innerHTML = op2;
    }
    else //if both operands have been entered
    {
        
    }
}

function addSign(s)
{
    opCount++;
    console.log("addSign called")
    console.log("Op2: " + op2);
    completeop1 = true;
    subDisplay.innerHTML = op1 + sign;
    mainDisplay.innerHTML = 0;
    if(opCount > 1)
    {
        operate();
        sign = s;
        console.log(sign)
    }
    else
        sign = s;

    console.log("Op2: " + op2);
}

function operate()
{
    console.log("equals called")
    switch (sign)
    {
        case "/": result = (op2 == 0 ? divBy0(): (op1/op2)); subDisplay.innerHTML = op1 + "/" + op2 + "=" ; break;
        case "*": result = (op1*op2); subDisplay.innerHTML = op1 + "*" + op2 + "=" ; break;
        case "+": result = (op1+op2); subDisplay.innerHTML = op1 + "+" + op2 + "=" ; break;
        case "-": result = (op1-op2); subDisplay.innerHTML = op1 + "-" + op2 + "=" ; break;
        default: result = "ERROR!";
    }
    mainDisplay.innerHTML = parseFloat(result.toFixed(2));
    op1 = result;
    completeop2 = false;
    op2 = 0;
    console.log("Op1: " + op1);
    console.log("Op2: " + op2);

}

function clearCalc()
{
    window.location.reload();
}

function divBy0()
{
    alert("cannot divide by 0");
    return op1/1;
    // clearCalc();
}
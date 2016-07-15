function zero(exp)  {return isExpression(0, exp)};
function one(exp)   {return isExpression(1, exp)};
function two(exp)   {return isExpression(2, exp)};
function three(exp) {return isExpression(3, exp)};
function four(exp)  {return isExpression(4, exp)};
function five(exp)  {return isExpression(5, exp)};
function six(exp)   {return isExpression(6, exp)};
function seven(exp) {return isExpression(7, exp)};
function eight(exp) {return isExpression(8, exp)};
function nine(exp)  {return isExpression(9, exp)};

function isExpression(num, exp) {return exp?exp(num):num}

function plus(operandA)      {return function(operandB){return operandA + operandB}};
function minus(operandA)     {return function(operandB){return operandA - operandB}};
function times(operandA)     {return function(operandB){return operandA * operandB}};
function dividedBy(operandA) {return function(operandB){return operandA / operandB}};

console.log(seven(times(five())));
seven(times(five()));

/*four(plus(nine()));*/

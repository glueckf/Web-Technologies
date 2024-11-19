function multiply(number1, number2) {
  // TODO: implement me
  return number1 * number2;
}

function multiplyAll() {
  // TODO: implement me
  var result = 1;
  for (var i = 0; i < arguments.length; i++){
    result *= arguments[i];
  }
  return result;
}
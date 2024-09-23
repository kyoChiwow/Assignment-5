// Get the input field Value
function getInputValue (id){
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}
// ***********************************************************

// Get the div or text field value
function getInputText (id){
  const inputText = document.getElementById(id).innerText;
  const inputTextNumber = parseFloat(inputText);

  return inputTextNumber;
}
// *************************************************************


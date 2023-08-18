// --------get input field value by id-------
function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
 } 
 
//  ---------set area as innerText --------
 function setAreaValue(elementId , area){
    const element = document.getElementById(elementId);
    element.innerText = area;
 }
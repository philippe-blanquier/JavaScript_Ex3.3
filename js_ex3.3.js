// Java Script file: js_ex3.3.js 
// Display on debug console
console.log(languages);
// Display inside HTML
function displayHtml( element, index, array)
{
   pId= document.createElement("P");
   textId= document.createTextNode(`N° ${index} : ${element}`);   
   pId.appendChild(textId);
   document.body.appendChild(pId);
   // To have all array items...
   return true;
}
languages.every(displayHtml);
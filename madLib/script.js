/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // stores the element of the specified 'id' to formElement
  let formElement = document.getElementById(id);

  // return a "not found" value if the element does not exist
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // Return the placeholder text if the value is empty
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {

  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");
  // Retrieve form values
  //Insert Form values into madlib
  //Output the madlib to the player



  let madLib = `
Dear ${relative},
   <br><br>
   I have been having a really ${adjective1} time 
   at camp. The counselour is ${adjective2} and 
   the food is ${adjective3}. I met ${famousPerson} 
   and we quickly became ${noun}. Talk soon!
   <br><br>
   Your ${dessert},
   <br>
   ${petName}
   <button onclick="goBack()">Go Back</button>
   `;
  //button will call function goBack() upon click

  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");

}

//this function allows the user to go back to the main page without a refresh on button click. Theres a small bug causing the text boxes to still be clickable despite not being visible, unsure if this is the cause. 
function goBack() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("container").classList.remove("generated");


  
/*

  //this code iterates through the input elements where user input was stored and reverts it back to placeholder text. Due to uncertainty with understanding the code fully I have commented it out. Feel free to try it! :)

  
  let formElements = document.getElementsByTagName("input");
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].value = "";
    formElements[i].placeholder = formElements[i].getAttribute("placeholder");
  }

*/
}
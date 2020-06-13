/** Takes data passed from cakeform page to contact page */
var message = ""; //message to display
var customerName = document.getElementById("name");
var address = document.getElementById("address");
var phoneNumber = document.getElementById("phoneNumber");
var comment = document.getElementById("message");
var btnFinalize = document.getElementById("finalize");
var btnCancel = document.getElementById("cancel");
var divContactError = document.querySelector("#display");

/**
 * display empty selection error on form
 */
function displayEmptySelectionError(message){
  divContactError.classList.add("#emptySelection");
  divContactError.innerHTML = message;
}

/** get customer details and return them in an array */
function getCustomerDetails(customerDetails){
  if(customerDetails.includes("")){
      message = "Please Provide Your Name, Address and Phone Number";
      displayEmptySelectionError(message);
      return false;
  }else{
      localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
      window.document.location = "customer.html";
  }
}

/**
* finalize order, save data and take user to homepage
*/
function finalizeOrder(){
  var customerDetails = [];
  customerDetails[0] = customerName.value;
  customerDetails[1] = address.value;
  customerDetails[2] = phoneNumber.value;
  customerDetails[3] = localStorage.getItem("inscriptions");
  customerDetails[4] = localStorage.getItem("price");
  customerDetails[5] = comment.value;
  getCustomerDetails(customerDetails);
}


/** Takes data passed from contact page to the order details(customer) page */
var customerName = document.getElementById("cName");
var address = document.getElementById("cAddress");
var phoneNumber = document.getElementById("cPhoneNumber");
var inscriptions = document.getElementById("cInscriptions");
var price = document.getElementById("cPrice");
var comments = document.getElementById("comments");

displayOrderDetails();

/**
 *display order details when customer finishes ordering 
 */
function displayOrderDetails(){
  var retrievedData = [];
  retrievedData = JSON.parse(localStorage.getItem("customerDetails"));
  customerName.innerHTML = "Name: " + retrievedData[0];
  address.innerHTML = "Address: " + retrievedData[1];
  phoneNumber.innerHTML = "Phone Number: " + retrievedData[2];
  inscriptions.innerHTML = "Inscriptions: " + retrievedData[3];
  price.innerHTML = "Total Price: " + retrievedData[4];
  comments.innerHTML = "Comments: " + retrievedData[5];
}

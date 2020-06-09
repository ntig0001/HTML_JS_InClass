/* Set up an associative array
    The keys represent the size of the cake
    The values represent the cost of the cake i.e A 10" cake cost's $35 */
var cake_prices = new Array();
cake_prices["Round6"] = 20;
cake_prices["Round8"] = 25;
cake_prices["Round10"] = 35;
cake_prices["Round12"] = 75;
 
 /* Set up an associative array 
    The keys represent the filling type
    The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
    We use this this array when the user selects a filling from the form */
 var filling_prices = new Array();
 filling_prices["None"] = 0;
 filling_prices["Lemon"] = 5;
 filling_prices["Custard"] = 5;
 filling_prices["Fudge"] = 7;
 filling_prices["Mocha"] = 8;
 filling_prices["Raspberry"] = 10;
 filling_prices["Pineapple"] = 5;
 filling_prices["Dobash"] = 9;
 filling_prices["Mint"] = 5;
 filling_prices["Cherry"] = 5;
 filling_prices["Apricot"] = 8;
 filling_prices["Buttercream"] = 7;
 filling_prices["Chocolate Mousse"] = 12;


/* find the price based on the size of the cake by taking user's the selection from radio button selection */
function getCakeSizePrice(){  
    var cakeSizePrice = 0;
    var theForm = document.forms["cakeform"]; 
    var selectedCake = theForm.elements["selectedcake"];
    for(var i = 0; i < selectedCake.length; i++)
    {
        //if the radio button is checked
        if(selectedCake[i].checked)
        {
          cakeSizePrice = cake_prices[selectedCake[i].value];
          break;
        }
    }
    return cakeSizePrice;
}

/**
* This function finds the filling price based on the
* drop down selection 
*/
function getFillingPrice(){
    var cakeFillingPrice = 0;
    var theForm = document.forms["cakeform"];
    var selectedFilling = theForm.elements["filling"];
    cakeFillingPrice = filling_prices[selectedFilling.value];
    return cakeFillingPrice;
}

//find the candles price based on a check box selection
function calculateCandles(){
    var candlePrice = 0;
    var theForm = document.forms["cakeform"];
    var includeCandles = theForm.elements["includecandles"];
    if(includeCandles.checked == true)
    {
        candlePrice=5;
    }
    return candlePrice;
}

function calculateInscription(){
    var inscriptionPrice = 0;
    var theForm = document.forms["cakeform"];
    var includeInscription = theForm.elements["includeinscription"];
    var inscriptions = document.getElementById("inscriptions").value;
    if(includeInscription.checked == true && inscriptions !== ""){
        inscriptionPrice = 20;
    }else{
        inscriptionPrice = 0;
    }
    return inscriptionPrice;
}
        
function defineTotal(){
    var cakePrice = getCakeSizePrice() + getFillingPrice() + calculateCandles() + calculateInscription();
    return cakePrice;
}

/**
 * hide the total on homepage
 */
function hideTotal(){
    var result = document.getElementById('totalPrice');
    result.style.display='none';
}

function hideContactError(){
    var contactError = document.getElementById('totalPrice');
    contactError.style.display='none';
}

/**
 * display the total as the customer clicks 'Check Total'
 */
function showTotal(){
    var result = document.getElementById('totalPrice');
    result.style.cssText = `display: block;
    color : #4f321e;
    background-color: hsla(0, 100%, 90%, 0.3);
    line-height: 30px;
    border-radius:5px;
    text-shadow: 2px 2px 8px #ffffff;
    text-align: center;`
    result.innerHTML = "Your Total Is $" + defineTotal();
}

/**
 * display empty selection error on form
 */
function displayEmptySelectionError(message){
    var result = document.getElementById('totalPrice');
    result.style.cssText = `display: block;
    color :#8f0414;
    line-height: 30px;
    border-radius:5px;
    background-color: hsla(0, 100%, 90%, 0.3);
    text-shadow: 2px 2px 8px #ffffff;
    text-align: center;`
    result.innerHTML = message;
}

/**
 * submit user order checking for null total
 */
function submitOrder(){
    var totalPrice = defineTotal();
    if(totalPrice === 0){
        var message = "Please Make A Selection";
        displayEmptySelectionError(message);
        return 0;
    }else{
        location.href = "contact.html";
        return totalPrice;
    }
}

/** get customer details and return them in an array */
function getCustomerDetails(customerDetails){
    if(customerDetails.includes("")){
        var message = "Please Provide Your Name, Address and Phone Number";
        displayEmptySelectionError(message);
        return false;
    }else{
        hideContactError();
        localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
        var storedData = [];
        storedData = JSON.parse(localStorage.getItem("customerDetails"));
        displayOrderDetails(storedData);
    }
}

/**
 * finalize order, save data and take user to homepage
 */
function finalizeOrder(){
    var customerDetails = [];
    var customerName = document.getElementById("name");
    var address = document.getElementById("address");
    var phoneNumber = document.getElementById("phoneNumber");
    var comment = document.getElementById("message");
    customerDetails[0] = customerName.value;
    customerDetails[1] = address.value;
    customerDetails[2] = phoneNumber.value;
    customerDetails[3] = comment.value;
    getCustomerDetails(customerDetails);
}

/**
 *display order details when customer finishes ordering 
 */
function displayOrderDetails(retrievedDetails){
    var customerDetails = [];
    customerDetails = retrievedDetails;
    console.log(customerDetails);
    location.href = "contact.html";
    // var customerName = document.getElementById("cName").value;
    // customerName.innerHTML = "Name: " + customerDetails[0];

    // var address = document.getElementById("cAddress");
    // address.innerHTML = "Address: " + customerDetails[1];

    // var phoneNumber = document.getElementById("cPhoneNumber");
    // phoneNumber.innerHTML = "Phone Number: " + customerDetails[2];

    // var comments = document.getElementById("comments");
    // comments.innerHTML = "Comments: " + customerDetails[3];

    // var inscriptions = document.getElementById("cInscriptions");
    // inscriptions.innerHTML = "Inscriptions: " + calculateInscription().toString();
    console.log("all is okay");
}

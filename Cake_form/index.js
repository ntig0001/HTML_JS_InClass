var message = ""; //message to display
var btnSubmit = document.getElementById("submit");
var btnFinalize = document.getElementById("finalize");
var btnCancel = document.getElementById("cancel");
var divTotal = document.querySelector("#totalPrice");
var cakeForm = document.forms["cakeform"];        
var inscription = document.getElementById("inscriptions");

/* Set up an associative array for cake size respective prices */
var cake_prices = new Array();
cake_prices["Round6"] = 20;
cake_prices["Round8"] = 25;
cake_prices["Round10"] = 35;
cake_prices["Round12"] = 75;
 
/* Set up an associative array for filling and prices*/
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
    var selectedCake = cakeForm.elements["selectedcake"];      
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
    var selectedFilling = cakeForm.elements["filling"];       
    cakeFillingPrice = filling_prices[selectedFilling.value];
    return cakeFillingPrice;
}

//find the candles price based on a check box selection
function calculateCandles(){
    var candlePrice = 0;                  
    var includeCandles = cakeForm.elements["includecandles"];        
    if(includeCandles.checked == true)
    {
        candlePrice=5;
    }
    return candlePrice;
}

function calculateInscription(){
    var inscriptionPrice = 0;                       
    var includeInscription = cakeForm.elements["includeinscription"];  
    var desiredInscript = inscription.value;
    if(includeInscription.checked == true && desiredInscript !== ""){
        inscriptionPrice = 20;
    }else{
        inscriptionPrice = 0;
    }
    return inscriptionPrice;
}
        
function calculateTotal(){
    var cakePrice = getCakeSizePrice() + getFillingPrice() + calculateCandles() + calculateInscription();
    return cakePrice;
}

function hideContactError(){
    var contactError = document.getElementById('totalPrice');      
    contactError.style.display='none';                           
}

/**
 * display the total as the customer clicks 'Check Total'
 */
function showTotal(){
    // var btnTotal = document.querySelector("#total");
    divTotal.classList.add(".total");
    divTotal.innerHTML = "Your Total Is $" + calculateTotal();
}

/**
 * display empty selection error on form
 */
function displayEmptySelectionError(message){
    divTotal.classList.add(".errorMessage");
    divTotal.innerHTML = message;
}

/**
 * submit user order checking for null total
 */
function submitOrder(){
    var totalPrice = calculateTotal();
    if(totalPrice === 0){
        message = "Please Make A Selection";
        displayEmptySelectionError(message);
        return 0;
    }else{
        // var cakeData = []; //holds cake data to send to contact page
        // cakeData[0] = calculateTotal();
        // cakeData[1] = inscription;
        var price = calculateTotal();
        var inscriptions = inscription.value;
        // console.log(price, inscriptions);
        localStorage.setItem("price", price);
        localStorage.setItem("inscriptions", inscriptions);
        window.document.location = "contact.html";
    }
}
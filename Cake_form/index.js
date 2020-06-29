var message = ""; //message to display
var btnSubmit = document.getElementById("submit");
var btnFinalize = document.getElementById("finalize");
var btnCancel = document.getElementById("cancel");
var divTotal = document.querySelector("#display");
var selectedCake = document.querySelectorAll(".radiolabel");    
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
    for(var i = 0; i < selectedCake.length; i++){
        //if the radio button is checked assign price
        if(selectedCake[i].checked){
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
    var selectedFilling =  document.getElementById("filling").options;
    for(var i = 0; i < selectedFilling.length; i++){
        cakeFillingPrice = filling_prices[selectedFilling.options[i]];
    }
    return selectedFilling;
    // return cakeFillingPrice;
}

/**find the candles price based on a check box selection */
function calculateCandles(){
    var candlePrice = 0;                  
    var includeCandles = document.getElementById("candleCheckbox");       
    if(includeCandles.checked == true)
    {
        candlePrice=5;
    }
    return candlePrice;
}

/** get inscription price */
function calculateInscription(){
    var inscriptionPrice = 0;                       
    var inscriptionCheck = document.getElementById("inscriptCheckbox");
    var desiredInscript = inscription.value;
    if(inscriptionCheck.checked == true && desiredInscript !== ""){
        inscriptionPrice = 20;
    }else{
        inscriptionPrice = 0;
    }
    return inscriptionPrice;
}

/** calculate total */
function calculateTotal(){
    console.log(getFillingPrice());
    var cakePrice = getCakeSizePrice() + getFillingPrice() + calculateCandles() + calculateInscription();
    return cakePrice;
}

/**
 * display the total as the customer clicks 'Check Total'
 */
function showTotal(){
    divTotal.style.color = "#140e05";
    divTotal.innerHTML = "Your Total Is $" + calculateTotal();
}

/**
 * display empty selection error on form
 */
function displayEmptySelectionError(message){
    divTotal.style.color = "#8f0414";
    divTotal.innerHTML = message;
}

/**
 * submit user order checking for selection of a cake
 */
function submitOrder(){
    if(getCakeSizePrice() === 0 || getFillingPrice() === 0){
        message = "Please Make a Purchase First";
        displayEmptySelectionError(message);
        return 0;
    }else{
        var price = calculateTotal();
        var inscriptions = inscription.value;
        localStorage.setItem("price", price);
        if(calculateInscription() === 0){
            localStorage.setItem("inscriptions", "None");
        }else{
            localStorage.setItem("inscriptions", inscriptions);
        }
        window.document.location = "contact.html";
    }
}
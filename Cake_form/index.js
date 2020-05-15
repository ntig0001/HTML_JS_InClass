//console.log("I am connected");

//we used an associative array!!!!!!!
var cake_prices = new Array();
  cake_prices ["Round6"] = 20;
  cake_prices ["Round8"] = 25;
  cake_prices ["Round10"] = 35;
  cake_prices ["round12"] = 75;

  //getCakeSizePrice() finds the price based on the size of the cake
  //Here, we need to take user's selection from radio button selection

  function getCakeSizePrice() {
    var getCakeSizePrice = 0;
    //get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //get a reference to the cake the user chooses by name= selectedCake
    var selectedCake = theForm.elements["selectedCake"];
    //here since there are 4 radio buttons selectedCake.length = 4
    //we loop throughb each radio buttons 
    for(var i = 0; i < selectedCake.length; i++){
      //if the radio button is checked
      if(selectedCake[i].checked){
        //we set the cakeSizePrice to the value of the selected radio button 
        //i.e if the user choose the 8" cake we set it to 25
        //by using the cake_prices array
        //we get the selected Items value
        //For example cake_prices ["Round8".value]
        cakeSizePrice = cake_prices[selectedCake[i].value];
        //if we get a match then we break out of this loop
        //no reason to continue if we get a match
        break;
      }
    }
    //we return the cakeSizePrice
    return cakeSizePrice;
    
  }

  //let's match the values of the drop-down menu to the respective prices
  //using an associative array. But we are going to use a function which finds the filling price //based on the drop down selection
  function getFillingPrice(){
    var cakeFillingPrice = 0;
    //get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //console.log(theForm);
    //get a reference to the selected id = "filling"
    var selectedFilling = theForm.elements["filling"];
    //return selectedFilling;

    //set cakeFilling Price equal to the value user chose
    //For example filling_price ["Lemon".value] would be equal to 5

    //Let's create the associative array first
    var filling_price = new Array();
        filling_prices ["None"] = 0;
        filling_prices ["Lemon"] = 5;
        filling_prices ["Custard"] = 5;
        filling_prices ["Fudge"] = 7;
        filling_prices ["Mocha"] = 8;
        filling_prices ["Raspberry"] = 10;

        cakeFillingPrice = filling_prices[selectedFilling.value];

        //finally we return cakeFillingPrice
        return cakeFillingPrice;

  }

  //console.log(getFillingPrice());
  //candlesPrices() finds the candles price based on a check box selection
  function candlesPrice () {
    var candlePrice = 0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //get a reference to the checkbox id="includecandles"
    var includecandles = theForm.elements["includecandles"];
    
    /*Here we simply should have used: 
    var includecandles = document.getElementById("includecandles"); */
    
    //if they checked the box set candlePrice to 5
    if(includecandles.checked == true){
      candlePrice = 5;
    }
    //finally we return the candlePrice
    return candlePrice;
  }
  
  function inscriptionPrice(){
    var incriptionPrice = 0;
    var includeinscription = document.getElementById("includeinscription");
    if(includeinscription.checked){
      inscriptionPrice = 20;
    }
    return inscriptionPrice;
  }
  //console.log(inscriptionPrice());
  
  /*
  Here is what we would have done if the user were to enter a quantity 
  we would have to use the parseInt() method and not an associative array 

  function getQuantity (){
    //assume form id="theform"
    var theForm = document.forms["cakeform"];
    //get a reference to the TextBox 
    var quantity = theForm.elements["quantity"];
    var howmany = 0;
    //if the textbox is not blank
    if(quantity.value!=""){
      howmany = parseInt(quantity.value);
    }
    return howmany;
  }
  */

  function getTotal (){
    //here we get the total price by calling our function
    //each function returns a number so by calling them, we add the values they return together
    var cakePrice = getCakeSixePrice() + 
                    getFillingPrice() +
                    candlesPrice() +
                    inscriptionPrice(); 

    //display the result
    document.getElementById("totalPrice").innerHTML = "Total Price For Cake $" + cakePrice;

    //the program updates the innerHTML of the "totalPrice everytime the totals are calculated"
  }
  
  
  
  
  
  
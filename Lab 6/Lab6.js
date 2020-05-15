/*
Program written by Elysé Ntigirishari
*/

//This program makes the form active
  var widgetPrice = 0;
  var shippingPrice = 0;
  var totalAmount = 0;
  var widgets = [];
  var shippings = [];
  var temp = 0;
  var spanObject;

//validate the form
function validateForm(){
  var inputs = document.getElementsByTagName("input");
  //check for null values
  for(var i = 0; i <= 4; i++){
    if(inputs[i].value.length === 0){
      alert(inputs[i].name + " Is not Entered");
      return false;
    }
    }
    getPostalCode();
    submitForm();
    return false;
  }

//Validate postalCode
function getPostalCode(){
  var pCode = document.getElementById("postalCode");
  var postalCode = pCode.value;
  if(postalCode.length < 6){
    alert("Invalid Postal Code");
    reset();
  }
    return true;
}

function validateOrderEntries(){
  var orders = document.querySelectorAll(".order");
  //check for valid entries and calculate widget total
  for(var i = 0; i <= 5; i++){
    for(var i = 0; i <= 2; i++){
      if(isNaN(orders[i].value) || orders[i].value < 0){
        alert("Invalid Quantity");
        return false;
      }else if(orders[i].value == 0){
        temp++;
      }
      widgets.push(orders[i].value);
    }
    for(var i = 3; i <= 5; i++){ 
      if(orders[i].checked){
        shippings.push(orders[i].id);
      }
    }
  }
  return temp;
}

function calculateTotal(){
  //calculate widgets total
  var temp = validateOrderEntries();
  console.log(temp);
  if(temp === 2){
    alert("Please Order At Least Two Products");
    reset();
    return false;
  }else{
    widgetPrice += ((widgets[0] * 5) + (widgets[1] * 15) + (widgets[2] * 25));
    //calculate shipping total
    if(shippings[0] === "shippingTypeStandard"){
      shippingPrice += 5;
    }else if(shippings[0] === "shippingTypeExpress"){
      shippingPrice += 10;
    }else{
      shippingPrice += 20;
    }
  }
  totalAmount += (widgetPrice + shippingPrice);
  return totalAmount;
}

//Display total and successfull message on submit click
function submitForm(){
  var spanObject = document.getElementById("productError");
    spanObject.style.display = "block";
    spanObject.innerHTML = "Success! Total: $" + calculateTotal();
}

//Reset Form
function reset(){
  document.getElementById("myForm").reset();
  spanObject = document.getElementById("productError");
  spanObject.style.display="none";
}
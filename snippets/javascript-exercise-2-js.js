// File: js-example2.js

// This is a one line comment
/*
    This is a multiple
    line comment
 */

// 1. Different types of variables
var typeOfBread = 'white bread';
var numberOfSalamiSlices = 2;
var butter = true;

// 2. Adding variable with a number.
var totalSlices = numberOfSalamiSlices + 2;
var stringAddition = 'this will ' + 'be an awesome ' + 'sandwich';

// 3. Alert data to the user
// alert('totalSlices: ' + totalSlices);

// 4. The following is a simple function.
function cutBread(){
  // 5. The alert, is actually a javascript built-in function!
  alert('Cutting ' +typeOfBread);
}

// 6. Functions can become more generic by passing in an input
function useButter(spread){
    // 7. "if" statements allow you to add logic!
    // e.g. if it's raining, take a coat with you!
    if(spread === true){
      alert('Spreading butter');
    }else{
      alert('Not spreading butter');
    }
}

// call the function using cutBread();
cutBread();
useButter();
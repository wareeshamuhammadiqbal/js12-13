// Question 01

var input = prompt('Write a character that checked your character is a number or latter or not valid:');

if (!isNaN(input)){
    alert(input + ' is a number')
}

else if (input >= 'A' && input <= 'Z'){
    alert(input + ' is an UpperCase Letter')
}

else if (input >= 'a' && input <= 'a'){
    alert(input + ' is an LowerCase Letter')
}

else {
    alert(input + ' is not a valid character');
}

// Question 02 
// large num or short

var UserNum1 = +prompt('Write first number that i check your number is larger or smaller'); 
var UserNum2 = +prompt('write second number that i check your number is larger or smaller'); 

if (UserNum1 > UserNum2){
    alert (UserNum1 + ' is larger than ' + UserNum2);
}

else if (UserNum1 < UserNum2){
    alert (UserNum1 + ' is smaller than ' + UserNum2);
}

else if (UserNum1 = UserNum2){
    alert (UserNum1 + ' is equal to ' + UserNum2);
}

// // Question 03
// // positive or negative number

var userNumber = +prompt('Enter a number because i want to Check your number is positive or negative:');

if (userNumber < 0){
    alert(userNumber + ' is nagative number');
}
else{
    alert(userNumber + ' is positive number');
}


// // Question 04
// // vowel checking

var vowelCheck = prompt('Write a letter i check your letter is vowel or not:')
var vowel = 'a ' + 'e' + 'i' + 'o' + 'u' + 'A' + 'E' + 'I' + 'O' + 'U';

if (vowelCheck === vowel){
    return true;
}
else{
    return false;
}

// // Questio 05
// // Password prompt

var Password = 123456;
var userPassword = +prompt('Enter a password')

if (userPassword === Password){
    alert('Correct!');
}
else if(userPassword == ' '){
    alert(userPassword = +prompt('Please! Enter a password.') && 'Correct!')
    
}
else{
    alert('Incorrect Password!'  &&  ( userPassword = +prompt('Please! Enter valid a password.')  && 'Correct!' ) );
}

// // Question 06
// // greeting according to an hour

var greeting;
var time = 15;

if (time < 18 ){
    greeting = ' Good Day! '
   
}
else{
    greeting = ' Good Evening! '
    
}

// Question 07 
// user Time prompt

var hour = +prompt('write a hour in 24 hour format:' , 'from 0-24');
var minutes = +prompt('Writa minutes from 0-59')
if (hour >= 0 && hour <= 24  ){
    alert ('The time in 12-hour clock format is: ' )
}
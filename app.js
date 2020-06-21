                            //////// CHAPTER NO:21 to 25 ////////

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.
//  Greet the user using his full name.

// var firstname = prompt("Enter your First name");
// var lastname = prompt("Enter your Last name");
// var fullname = (firstname +" "+ lastname);
// alert("Hello"+" " +fullname);


// 2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser

// var fvrtmobile = prompt("Enter your favorite Mobile phone model");
// document.write("My favorite phone is : "+fvrtmobile+"<br>");
// document.write("length of string  : " +fvrtmobile.length);


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var str = "pakistan";
// var n = str.indexOf("n");
// document.write("String : " + str +"<br>" + "Index of  'n' :" + n);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var str = "Hello World";
// var l = str.lastIndexOf("l");
// document.write("String : " + str +"<br>" + "Index of  'l' :" + l);


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str = "pakistan";
// var z = str.charAt(3);
// document.write("String : " + str +"<br>" + "Index of 3 : " + z);


// 6. Repeat Q1 using string concat() method.

// var firstname = prompt("Enter your First name");
// var lastname = prompt("Enter your Last name");
// var fullname = firstname.concat(lastname);
// alert("Hello"+" " +fullname);


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// document.write("City : "+city+"<br>");
// var cityafterrep = city.replace("Hyderabad", "Islamabad");
// document.write("After replacement : "+cityafterrep);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var names = "Ali and Sami are best friends.They play cricket and football together "
// var newnames = names.replace(/and/g, "&");
// document.write(newnames);


// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str = "472";
// document.write("Value: "+str +"<br>" +"Type: string"+"<br>");
// var convert = parseInt(str);
// document.write("Value: "+convert +"<br>" +"Type: number");


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var userinput = prompt("Enter your text");
// convert = userinput.toUpperCase();
// document.write("User input : "+userinput +"<br>" + " Upper Case : "+ convert);


// 11. Write a program that takes user input. Convert and show the input in title case.

// var userinput = prompt("Enter your text");
// var firstchar = userinput.slice(0,1);
// firstchar = userinput.toUpperCase()
// var otherchar = userinput.slice(1);
// otherchar = userinput.toLowerCase()
// var Title = firstchar + otherchar;
// document.write("User input : " +userinput  +"<br>" +  "Title case : " +Title);


// 12. Write a program that converts the variable num to string. Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var str = num.toString();
// var res = str.replace(/\./g, '');
// document.write("Number : "+str+"<br>"+"Result : "+res);


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username. For character codes of [@ .

// var userName = prompt("Enter your name");
// var userlength = userName.length;
// for(i = 0; i < userName.length; i++) {
//     if (userName.slice(i,i+1) == "!" || userName.slice(i,i+1) == "," || userName.slice(i,i+1) == "@" || userName.slice(i,i+1) == "." ) {
//     alert("Invalid username!\n" +"Please Enter a valid username! ");
    
// }
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("What do you want Sir/Ma'am ?");
// bakery = bakery.toLowerCase();
// var bakeryitems = A.indexOf(bakery);
// if (A.indexOf(bakery)!=-1){
//     alert(bakery+ " is available at index "+bakeryitems + " in our bakery");
// } else{
//     alert("We are Sorry! "+bakery+" is not available in our bakery")
// }


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.

// var psswrd = prompt("Enter your Password!")
// if (psswrd =="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]" || psswrd ==psswrd.length>6)
// {  
//     alert("Password can not begin  with a number\n"+"Please! Enter a valid Password"); 
//     alert("Password must be at least 6 characters long.");    
//   } 

// 16. Write a program to convert the following string to an array using string split method.

// var university = "University of Karachi";
// var split = university.split(" ");
// console.log(split);


// 17. Write a program to display the last character of a user input.

// var str = "Pakistan";
// var last = str.charAt(str.length-1)
// document.write("User input : " + str +"<br>"+"Last character : "+last);


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var char = "the quick brown fox jumps over the lazy dog.";
// var count = (char.match(/the/g) || []).length;
// document.write("Text : "+char+"<br>"+"There are  " + count + " occurrence(s) of word 'the' ");


                              /////////  CHAPTER NO: 26 to 30 //////////


// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
                              
// var positive = prompt("Enter positive integers");
// document.write("number : "+positive+"<br>");

// var num = positive;
// var round = Math.round(num); 
// document.write("round off value : "+round+"<br>");

// var num = positive;
// var floor = Math.floor(num); 
// document.write("floor value : "+floor+"<br>");

// var num = positive;
// var ceil = Math.ceil(num); 
// document.write("ceil value : "+ceil);


// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var negative = prompt("Enter negative integers");
// document.write("number : "+negative+"<br>");

// var num = negative;
// var round = Math.round(num); 
// document.write("round off value : "+round+"<br>");

// var num = negative;
// var floor = Math.floor(num); 
// document.write("floor value : "+floor+"<br>");

// var num = negative;
// var ceil = Math.ceil(num); 
// document.write("ceil value : "+ceil);

// 3. Write a program that displays the absolute value of a number.

// var input = -4;
// var absolute = Math.abs(input);
// document.write("The absolute value of "+ input + " is " +absolute);


// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// var dice = prompt("Enter any random number");
// var random =  Math.floor(Math.random(dice) *10);
// document.write("random dice value : " + dice +"<br>"+"random dice value : " +random);


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser


// var head = prompt("Coin toss");
// var tails=  Math.floor(Math.random(head) *2);
// document.write( head + "<br>" + "random coin value  : Heads "  +"<br>"+ tails + "<br>" + "random coin value  : Tails "  );


// 6. Write a program that shows a random number between 1 and 100 in your browser.


// var num = prompt("Enter any number between 1 to 100");
// var random = Math.floor(Math.random(num) *100); 
// document.write( "random number between 1 to 100 : "+random);


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret number, congratulate the user.


// var secret = prompt("Enter a number between 1 to 10");
// if (secret==9){
//     alert("Congratulationssss!")
// } else {
//     alert("Try Again!")
// }

                            /////// CHAPTER NO:31 to 35 ///////

// 1. Write a program that displays current date and time in your browser.

// var d = new Date();
// var dayOfMonth = d.getDate();
// document.write(d);


// 2. Write a program that alerts the current month in words. 

// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const d = new Date();
// document.write("Current month : " + monthNames[d.getMonth()]);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is : "+nameOfToday);


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var daysnames=["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday"];
// const d = new Date();
// document.write( daysnames[d.getDay()]);
// if (daysnames==sunday || daysnames==saturdays){
//     alert("It's Fun day")
// }


// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var d = new Date();
// var dayOfMonth = d.getDate();
// if(dayOfMonth<=16)
// {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last days of the month")
// }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var d = new Date();
// var dayOfMonth = d.getDate();
// document.write("Current Date : " +d+"<br>");

// var d = new Date();
// var millsSince = d.getTime();
// document.write("Elapsed milliseconds Since January 1,1970 : " +millsSince+"<br>");


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var now = new Date();
// var hour = now.getHours();
// if(hour < 12){
//     alert("It's AM")
// } else {
//     alert("It's PM")
// }
//  hour = hour % 12;
//  if(hour == 0){
//      hour = 12;
//  }
// hour = hour + " " +alert;


// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var d = new Date();
// d.setDate(30);
// d.setMonth(11);
// d.setFullYear(2020);
// d.setHours(00);
// d.setMinutes(00);
// d.setSeconds(00);
// document.write("Later Date : "+d);


// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var today = new Date();
// var doomsday = new Date("Dec 06, 2015");

// var last = new Date();
// var doomsday1 = new Date("June 18, 2015");

// var msDiff = doomsday-doomsday1;

// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// document.write(dDiff+ " days have passed Since 1 Ramadan, 2015");


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var a = new Date ("dec 31,2014, 00:00:00");
// var b = new Date ("dec 5,2015 ,22:50:16");
// document.write("On reference date "+b +"<br>");
// var i = b.getTime();
// var j = a.getTime();
// var c = i-j;
// var d = c/(1000*60);
// var e = d;
// document.write(e+" seconds had passed since beginning of 2015");



// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser


// var d = new Date();
// var dayOfMonth = d.getDate();
// document.write("Current date : "+d+"<br>");

// var d = new Date();
// d.setDate(18);
// d.setMonth(05);
// d.setFullYear(2020);
// d.setHours(13);
// d.setMinutes(13);
// d.setSeconds(24);
// document.write("1 hour, ago it was "+d )


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var d = new Date();
// d.setDate(05);
// d.setMonth(11);
// d.setFullYear(2015);
// d.setHours(23);
// d.setMinutes(09);
// d.setSeconds(37);
// document.write("Current date : "+d+"<br>" )

// var d = new Date();
// d.setDate(05);
// d.setMonth(11);
// d.setFullYear(1915);
// d.setHours(23);
// d.setMinutes(09);
// d.setSeconds(37);
// document.write("100 years back it was "+d )

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var dob = new Date("Nov 9, 1997");
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili-dobmili;
// var accurate = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Your age is "+accurate+"<br>" + "Your birth year is 1997");

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// var customername = prompt("Enter your Name");
// document.write("Customer Name : "+customername+"<br>");

// var monthname = prompt("Enter your Current Month");
// document.write("Month : "+monthname+"<br>");

// var num = prompt("Enter your Numbers of units");
// var numbersofunits= (Math.round(num)* 100) / 100;
// document.write("Number of units : "+numbersofunits+"<br>");

// var num1 = prompt("Enter your Charges per units");
// var chargesperunits= (Math.round(num1)* 100) / 100;
// document.write("Charges per unit : "+chargesperunits+"<br>");

// var netamount =  (numbersofunits * chargesperunits);
// document.write("Net Amount Payable (within Due Date) : "+netamount+"<br>");

// var num3 = prompt("Enter your Late payment surcharges");
// var latepaymentsurcharge = (Math.round(num3)* 100) / 100;
// document.write("Late Payment Surcharge : "+latepaymentsurcharge+"<br>");

// var grossamount = (netamount + latepaymentsurcharge);
// document.write(" Gross Amount Payable (after Due Date): " +grossamount);



                       ////////// CHAPTER NO: 35 to 38 /////////

// 1. Write a function that displays current date & time in your browser.

// var d = new Date();
// var dayOfMonth = d.getDate();
// document.write(d);

// 2. Write a function that takes first & last name and then it greets the user using his full name.


// function greeting() {
//     var first = prompt("Enter your first name");
//     var second = prompt(" Enter your last name");

//     document.write("Hello"+ " "+ first+" "+second);
// }
// greeting();


// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function add(a,b) {
//     var z = a + b
//     return z;
// }
// var c = add(2,4);
// alert(c);


//4. Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result 
// in your browser.

// function calc (num1,opr,num2){

//     if (opr === "+"){
//         return  num1 + num2
        
//     }
//     else if (opr === "-")
//      {
//         return num1 - num2
//     }
//     else if (opr === "*")
//     {
//         return num1 * num2
//     }
//     else if (opr === "/")
//     {
//         return num1 / num2
//     }
//     else {
//         return "Incorrect Operator!"
//     } 
// }
// var result1= calc(5,"+",3);
// var result2= calc(4,"-",2);
// var result3= calc(8,"*",4);
// var result4= calc(10,"/",5);
// var result5= calc(6,"$",2);

// document.write(result1+"<br>");
// document.write(result2+"<br>");
// document.write(result3+"<br>");
// document.write(result4+"<br>");
// document.write(result5+"<br>");


// 5. Write a function that squares its argument.

// function square() {
//     var a = Math.pow(4, 2)
//     document.write(a);
//   }
//   square();


// 6. Write a function that computes factorial of a number.

// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = 5;
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2


// function calcHypotenus(base,  per){
//   var base = prompt("Enterthe value of Base"); 
//   var per = prompt("Enterthe value of perpendicular"); 
//     var calcsquare= Math.sqrt(base*base  + per*per);
//   document.write("Hypotenus is : "+ calcsquare);
// }
// calcHypotenus();


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height

// function area (width,height) {
// return width * height ;
// }

// document.write("The area of your rectangle is " + area(4,7)); 


//10. Write a JavaScript function that checks whether a passed string is palindrome or not?

// var word = prompt("Enter your word");
// var check = "" ;
// for (var i = word.length -1; i >= 0; i--){
//   console.log(word[i])
//   check += word[i]
// }
// if (word === check){
//   console.log(word + " is a palindrome word")
// } else {
//   console.log(word + " is  not a palindrome word")
// }


// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


// function capitalletter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }
// document.write(capitalletter("the quick brown fox"));


// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 


// function findlongestword(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(findlongestword('Web Development Tutorial'));


// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of  
// occurrences of the specified letter within the string. 


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));


// 14. The Geometrizer

// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".


// function calcCircumfrence(){ 
//   var r= prompt("Enter the value of radius");
//    var calc= 2 * 22/7 * r; 
//    document.write('output1' + " Circumfrence is "+calc +"<br>");
//   }
  // calcCircumfrence();

  // function calcArea(){
  //    var r= prompt("Enter the value of radius"); 
  //    var area=22/7 * r * r; 
  //    document.write('output2' + " Area is "+area); 
  // }
  // calcArea();




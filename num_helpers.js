//Pseuodo code
/*
____________________________________________________________
//Create a function that will take in the four function even, odd, prime and fizzbars as arguments
//Import the even, prime and fizzbuzz helper functions
//create an empty array to hold smaller arrays
//Inside a for loop
//use if statements to populate the array by testing the four conditions
//Print out the contents of the array 
____________________________________________________________
*/
const prime_no = require('./sort_primes.js'); //import statemnet

const myfbz = require('./fizzbuzz.js'); //import statemnet

const myeven = require('./evens.js'); //import statemnet

const num_helper_func = (x,y) =>
{
var final_array =[];
	for(var i=x; i<=y; i++)
	{
		var sub_array=[];
		if (evens(x,y)===true)
			sub_array.push("Even,");
		else
			sub_array.push("Odd,");
		if(prime_number_calculator(x,y)==true)
			sub_array.push("Prime");
		if(fizzbuzz(x,y)=="FizzBuzz") 
			sub_array.push("FizzBuzz");
		else if(FizzBuzz(x,y)=="Buzz")
			sub_array.push("Buzz");
		else if(FizzBuzz(x,y)=="Fizz")
			sub_array.push("Fizz");
		else
			sub_array.push(i);
		final_array.push(sub_array);
	}
	console.log(final_array);
}
num_helper_func(0,100);
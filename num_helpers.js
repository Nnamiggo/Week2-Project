//Pseuodo code
/*
____________________________________________________________
//Import the even, prime and fizzbuzz helper functions
//Create a function that will test the functions even, prime and fizzbuzz return types
//Inside a for loop
//create an empty array to store results from the checks
//use if statements to populate the above array by testing the four conditions
//Print out the contents of the array for each iteration 
____________________________________________________________
*/
const prime_no = require('./primes.js'); //import statemnet

const myfbz = require('./fizzbuzz.js'); //import statemnet

const myeven = require('./evens.js'); //import statemnet

const num_helper_func = (x,y) =>
{

	for(var i=x; i<=y; i++)
	{
		var sub_array=[];


		if (evens(i)===true)

			sub_array.push("Even,");
		else
			sub_array.push("Odd,");


		if(prime_number_calculator(i)==true)

			sub_array.push("Prime");


		if(fizzbuzz(i)=="FizzBuzz") 

			sub_array.push("FizzBuzz");

		else if(fizzbuzz(i)=="Buzz")

			sub_array.push("Buzz");

		else if(fizzbuzz(i)=="Fizz")

			sub_array.push("Fizz");

		else
			sub_array.push(i);

console.log(sub_array);

	}
}
num_helper_func(0,100);
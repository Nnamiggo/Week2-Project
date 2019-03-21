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

//To improve this code,
//create arrays to hold evens , primes, odds, fizzbuzz, fizz and buzz numbers
//print the length of these arrays
const num_helper_func = (x,y) =>
{
	var evensC=[], oddsC =[], primesC=[], fizzbuzzC=[],fizzC=[], buzzC=[];

	for(var i=x; i<=y; i++)
	{
		var sub_array=[];


		if (evens(i)===true)

			sub_array.push("Even");

			evensC.push(i); // #improved
		else
			sub_array.push("Odd");


			oddsC.push(i); // #improved

		if(prime_number_calculator(i)==true)

			sub_array.push("Prime");

			primesC.push(i); // #improved

		if(fizzbuzz(i)=="FizzBuzz") 

			sub_array.push("FizzBuzz");

			fizzbuzzC.push(i); // #improved

		else if(fizzbuzz(i)=="Buzz")

			sub_array.push("Buzz");

			buzzC.push(i); // #improved

		else if(fizzbuzz(i)=="Fizz")

			sub_array.push("Fizz");

			fizzC.push(i); // #improved

		else
			sub_array.push(i);

console.log(sub_array);
console.log("Prime numbers are:" +primesC.length);
console.log("Even numbers are:" +evensC.length);
console.log("Odd numbers are:" +oddsC.length);
console.log("FizzBuzz numbers are:" +fizzbuzzC.length);
console.log("Fizz numbers are:" +fizzC.length);
console.log("Buzz numbers are:" +buzzC.length);
	}
}
num_helper_func(0,100);
/*

// get the number
var my_num = 10;
//get all numbers from 2 to my number
//get these number one by one.....test if these are prime :: how?
var my_prime = 0// result from the ileterati
//get all numbers from 2 to my_prime - 1
//if any of the divides it completely print my_prime else go test the next number

//implementing line 18
for(var i = 0; i<=my_num; i++)
{
	// now I have my first number i e.g 3 and I want to test if it is prime 
	var my_prime = i;// so my value is in here and I want to test if it is prime or not
	// i should get all values from 2 to i-1

	Var tester = 2;
	while (>1 && my_prime%tester!=0) {}
	
}  */

// var n = 40;
// for (var i = 2; i<=n; i++)
// {
// 	var are_you_prime = true;
	
// 	for(var test_u =2; test_u<=i; test_u++)
// 	{
// 		if(i%test_u === 0 && test_u!==i )
// 			{are_you_prime = false;}
// 		}

// 			if (are_you_prime===true) {console.log(i);}
// }

// changing code to use functions

// function prime_number_calculator (n)
// {
// 	for (var i =2; i<=n; i++)
// 	{
// 		var are_you_prime = true;

// 				for (var testing_u = 2; testing_u<=i; testing_u++)
// 				{
// 					if (i%testing_u==0 && testing_u!==i)
// 					{
// 						are_you_prime =false;
// 					}
					
// 				}
// 				if (are_you_prime==true ){console.log(i);}
// 	}
// }
// prime_number_calculator(40)

//____________Now using arrow function

prime_number_calculator=(n) => {
	for (var i =2; i<=n; i++)
	{
		var are_you_prime = true;

				for (var testing_u = 2; testing_u<=i; testing_u++)
				{
					if (i%testing_u==0 && testing_u!==i)
					{
						are_you_prime =false;
					}
					
				}
				if (are_you_prime==true ){console.log(i);}
	}
}
prime_number_calculator(40)
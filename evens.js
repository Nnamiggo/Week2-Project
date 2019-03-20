/*
Using the for loop to output even numbers from 2 to 20.
*/

// inside the for loop initialise a variable (i) with 2, let the condition for this varible be less than or equal to 20 and let the variable be incremented by 1
// step2: Test if i is even by dividing it with 2 and assessing the remainder and also if i is less than or equal to 20
// if remainder is zero print i and if not add 1 to i and repeat


for(var i = 2; i<=20; i++)
	{
		if(i%2==0 && i<=20)
				console.log(i);
	}
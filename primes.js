prime_no = prime_number_calculator=(m,n) => {
	for (var i = m; i<=n; i++)
	{
		var are_you_prime = true;

				for (var testing_u = 2; testing_u<=i; testing_u++)
				{
					if (i%testing_u==0 && testing_u!==i)
					{
						are_you_prime =false;
						return false;
					}
					
				}

				if (are_you_prime==true ){return true;}
	}
}
module.exports = prime_no; //export statement


prime_no = prime_number_calculator=(m) => {

				for (var testing_u = 2; testing_u<=m; testing_u++)
				{
					if (m%testing_u==0 && testing_u!==m)
					{
						//are_you_prime =false;
						return false;
					}
					else
						return true;
		
				}
				
}
module.exports = prime_no; //export statement


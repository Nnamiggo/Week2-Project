let evens = (x,y) =>
{
	val = false;
	for(var i = x; i<=y; i++)
	{
		if(i%2==0 && i<=y){
			val = true;
		}
		else{
			val = false;
		}

		console.log(val);
	}
}

console.log(evens(0,100));
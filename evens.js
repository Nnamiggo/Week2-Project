var myeven = evens = (x,y) =>
{
	val = false;
	for(var i = x; i<=y; i++)
	{
		if(i%2==0){
			val = true;
		}
		else{
			val = false;
		}

		return val;
	}
}

console.log(evens(0,100));

module.exports = myeven; //export statement
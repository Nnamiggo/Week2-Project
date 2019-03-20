var myeven = evens = (x) =>
{
	if(x%2==0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

console.log(evens(9));

module.exports = myeven; //export statement
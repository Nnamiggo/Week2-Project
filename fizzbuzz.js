
var myfbz = fizzbuzz=(x) => {

if (x%3===0 && x%5===0){
  return "FizzBuzz";
}

else if (x%3===0) {
  return "Fizz";
}

else if (x%5===0){
  return "Buzz";
}
else{
  return x;
}

}
console.log(fizzbuzz(3));
module.exports = myfbz; //export statement
/* Challenge 1: Looping a Triangle */

var hash = "#";
hashTotal = "#";
for (i = 1; i <= 7; i++){
  console.log(hashTotal);
  hashTotal += hash;
};

/* Challenge 2: Fizz Buzz */

var i = 1;
while (i <= 100){
  if (i % 3 === 0 && i % 5 === 0){
  	console.log("FizzBuzz");
    i++;
  }
  else if (i % 3 === 0){
  console.log("Fizz");
    i++
  }
  else if (i % 5 === 0){
  console.log("Buzz");
    i++
  }
  else {
console.log(i);
  i++;
  }
}

/* Challenge 3: Chess Board */
var gridSize = 10;
var board = "";

for (x = 0; x < gridSize; x++){
	for (y = 0; y < gridSize; y++){
    	if ((x + y) % 2 == 0){
          board += " ";
        }
       else {
      	board += "#";
       }
      }

      board += "\n";

};
console.log(board);

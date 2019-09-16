// Given an array of integers A sorted in non-decreasing order, 
//return an array of the squares of each number, also in sorted non-decreasing order.


// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

var arr = [ -4, -1, 0, 3, 10]
var result = squareOfArray(arr);

function squareOfArray(arr){

  
   var new1=  arr.map(square)

    function square(n) {
        return n*n;
    }

   
    new1.sort();

    return new1;
}
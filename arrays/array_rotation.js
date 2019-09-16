// input arr[] = [1 , 2, 3, 4, 5, 6] 
// input n=2

// output [3, 4, 5, 6, 1, 2]

function rotateArray(arr, n, d) {


    var new_arr = []


   for(var m=0; m< arr.length; m++){

        new_arr[m] = arr[(m+d)%n];
    
    }

    for(var i=0 ; i < arr.length; i++){
        console.log('index ' + i + ' ' + new_arr[i]);
    }
  
    return new_arr;

}


var arr = [1, 2, 3, 4, 5, 6]
var d=2

rotateArray(arr, 6, 2);
// Print all values of given array

function printAllVals(arr) {
    if (arr.length == 0) {
        console.log ("No values")
    }
    else {
        for ( var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

printAllVals([12,41,24,6,346,4]);
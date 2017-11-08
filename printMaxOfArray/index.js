// Print the largest element of an array

function printArrayMax(arr){
    if (arr.length == 0){
        console.log("No max value");
    }
    else {
        var max = arr[0];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        console.log("The max value is " + max);
    }
}

printArrayMax([1,24,5]);
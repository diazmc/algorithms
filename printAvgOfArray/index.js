// Print average of given array

function printAvgOfArray(arr) {
    if (arr.length == 0) {
        console.log("Empty, no average");
    }
    else {
        var sum = arr[0];

        for (var i = 1; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log("The average is " +  sum/arr.length);

    }

}

printAvgOfArray([4,4,4,4]);
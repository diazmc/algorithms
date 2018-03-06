// function makeItBig (arr) {
//     for(var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 ) {
//             arr[i] = "big"
//         }
//         else {
//             continue;
//         }
//     }
//     console.log(arr);
// }

// makeItBig([-1,3,5,-5])

// function printLow(arr) {
//     if (!arr) {
//         console.log("Enter an array")
//     }
//     else {
//         var lowNumber = arr[0];
//         for (var i = 0; i < arr.length; i++) {
//             if(arr[i] < lowNumber) {
//                 lowNumber = arr[i];
//             }
//         }
//         console.log(lowNumber);
//     }
// }

// // printLow([2323,434,5,3246,23,42,12]);
// printLow();

// function doubleValue(arr) {
//     if (!arr) {
//         console.log("Please enter an array");
//     }
//     else {
//         var newArr = [];
//         for (var i = 0; i < arr.length; i++) {
//             arr[i] = (arr[i] * 2)
//             newArr.push(arr[i]);
//         }
//         console.log(newArr)
//     }
// }

// doubleValue([1,2,3]);

// function countPositives(arr) {
//     if (!arr) {
//         console.log("Please enter an array")
//     }
//     else {
//         var count = 0;
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] > 0) {
//                 count ++;
//             }
//         }
//         arr.pop();
//         arr.push(count);
//         console.log(arr);
//     }
// }

// countPositives([-1,1,1,1]);

// function evenAndOdds(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
//             console.log("3 even numbers in a row");
//         }
//         if (arr[i] % 2 != 0 && 
//                 arr[i + 1] % 2 != 0 && 
//                 arr[i + 2] % 2 != 0) {
//             console.log("3 odd numbers in a row");
//             break;
//         }
//     }
// }

// evenAndOdds([2,2,2]);

// function lengthOfString(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "string"){
//             arr[i] = arr[i].length;
//         }
//     }
//     console.log(arr);
// }

// lengthOfString(["qwe",3213,"q"]);


// function turnToNegativeNumber(arr) {
    //     for (var i = 0; i < arr.length; i++) {
        //         if (arr[i] > 0) {
            //             arr[i] *= -1;
            //         }
            //     }
            //     console.log(arr);
            // }
// turnToNegativeNumber([12,4,-2]);

function reverseArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i]
        for(var j = arr.length -1 ; j > -1; j--){
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    console.log(arr);
}

reverseArray([3,1,6,4,2]);

function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) { 
        if (arr[i] == "food") {
            console.log("yummy");
        }
    }
}

alwaysHungry(["food"])
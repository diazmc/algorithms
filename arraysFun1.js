// function countdown(int) {

//     var arr = []

//     for (var i = int; i > 0; i--) {
//         arr.push(i)
//     }

//     console.log(arr);

// }

// countdown(5)

// function firstPlus(arr) {
    

//     if (typeof arr[0] == "string") {
//         console.log("It is a string");
//     }
//     else if (typeof arr[0] == "boolean") {
//         console.log("It is a boolean");
//     }
//     else {
//         console.log(arr[0] + arr.length);
//     }
// }

// firstPlus([true,3,4,5]);

// function greaterThanSecond(arr) {

//     for(var i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[1]) {
//             console.log(arr[i])
//         }
//     }
// }

// greaterThanSecond([4,3,5,7,9,13]);

// function greaterThanSecond(arr) {

//     var newArr = [];

//     if (arr.length == 1) {
//         console.log("Add more values");
//     }

//     else {
//         for(var i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[1]) {
//                 newArr.push(arr[i]);
//             }
//         }
//         console.log(newArr);
//     }

// }

// greaterThanSecond([4]);

// function thisLength(arr1, arr2) {

//     if (arr1 == arr2) {
//         console.log("Jinx");
//     }

//     else {
//         arr2.unshift(arr1.length)
//         console.log(arr2);
//     }

// }

// thisLength([1,2,4], [1,4,5])

// function fitFirstValue(arr) {
//     if (arr[0] > arr.length) {
//         console.log("Too big!")
//     }
//     else if (arr[0] < arr.length) {
//         console.log("Too small")
//     }
//     else {
//         console.log("Just right")
//     }
// }

// fitFirstValue([4,3])

// function farToCelsius(fdegrees) {
//     var celsius = (fdegrees - 32) / 1.8
//     console.log(celsius);
// }

// farToCelsius(74);

// function celToFahrenheit(cdegrees) {
//     var far = (cdegrees * 1.8) + 32
//     console.log(far);
// }

// celToFahrenheit(25)




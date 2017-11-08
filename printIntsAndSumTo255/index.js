// Print integers from 0 to 255, and the sum

function printIntsAndSum0to255() {
    var sum = 0;

    for (var num = 0; num <= 255; num++) {
        sum += num;
        console.log(num, "the sum is " + sum);
    }
}

printIntsAndSum0to255();
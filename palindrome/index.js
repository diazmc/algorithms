// Palindrome

function palindrome(str) {
    var p1 = ''
    var p2 = ''
    
    for (var i = 0; i < str.length; i++ ) {
        p1 += str[i];
    }

    for (var i = str.length - 1; i > -1; i--) {
        p2 += str[i];
    }

    if (p1 == p2) {
        console.log("It is a palindrome");
    }
    else {
        console.log("Not a palindrome");
    }
}

palindrome('racecar')
